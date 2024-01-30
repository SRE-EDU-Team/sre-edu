import { type ReactElement } from 'react'

import { IntroSlide, RevealSlides, type RevealSlidesProps } from '../components/reveal'

export function SlaSlides ({ embedded }: RevealSlidesProps): ReactElement {
    return <RevealSlides embedded={embedded}>
        <IntroSlide title='SLA, SLO, SLI'/>
        <section>
            <h1>Проблема оценки работы SRE</h1>
            <p>
                    Как понять, сколько сбоев не случилось из-за того, что поработали SRE?
            </p>
        </section>
        <section>
            <h1>Проблема метрики оценки надежности</h1>
        </section>
        <section>
            <p>SLI — <b>S</b>ervice <b>L</b>evel <b>I</b>ndicators</p>
            <p>Индикаторы уровня сервиса — важные метрики показывающие пользовательский опыт непосредственно</p>
        </section>
        <section>
            <p>SLO — <b>S</b>ervice <b>L</b>evel <b>O</b>bjectives</p>
            <p>Целевые показатели сервиса — значения SLI, которые мы желаем видеть у своего приложения</p>
        </section>
        <section>
            <p>SLA — <b>S</b>ervice <b>L</b>evel <b>A</b>greement</p>
            <p>Соглашение о уровне сервиса</p>
        </section>
        <section>
            <section>
                <h1>Как считают надежность</h1>
            </section>
            <section>
                <img src='imgs/SLA_dashboard.png'/>
            </section>
            <section>
                <img src='imgs/error_budget.png'/>
            </section>
        </section>
        <section>
            <h1>Бюджет ошибок</h1>
            <p>Что можно делать с бюджетом? — Тратить!</p>
        </section>
        <section>
            <h1>Проблемы при подсчетах надежности</h1>
            <ul>
                <li>Не понятно, что считать уже сломанным (выбор SLI/SLO)</li>
                <li>Установка желаемых целей сильно выше возможностей</li>
                <li>Сложно выбрать интервал, на котором считать</li>
            </ul>
        </section>
        <section>
            <h1>Как сделать учет SLA?</h1>
            <p>
                    Нет готовых удобных инструментов — писать самому
            </p>
            <code>
                <pre>
                    {`
schedule(1m, () => {
    bool has_bad_minute = false;
    int currentMinute = minute(timestamp());
    for (indicator in indicators) {
        if (indicator.fail()) {
            mark_minute_bad(indicator.id, currentMinute);
            has_bad_minute = true;
        }
    }
    if (!has_bad_minute) {
        mark_minute_ok(currentMinute);
    }
})`}
                </pre>
            </code>
        </section>
        <section>
            <section>
                <h1>SLI на примере — T-Uber</h1>
            </section>
            <section>
                    Сервис такси
                <ul>
                    <li>Похож на «обычный» сервис такси</li>
                    <li>Два мобильных приложения: для пользователей и водителей</li>
                    <li>Умеет оценивать время поездки с учетом пробок и без (когда внешний сервис отвалился)</li>
                </ul>
            </section>
            <section>
                <ul>
                    <li><b>in_request_count</b> — количество запросов от клиентов в разбивке по типам</li>
                    <li><b>in_request_duration</b> — время выполнения запросов</li>
                    <li><b>in_request_errors</b> — количество запросов завершившися с ошибкой</li>
                </ul>
            </section>
            <section>
                <ul>
                    <li><b>matching_requests</b> — сколько пришло запросов на поиск автомобиля</li>
                    <li><b>matching_requests_done_success</b> — сколько таких запросов успешно обработали</li>
                    <li><b>matching_requests_done_fail</b> — сколько таких запросов не обработали</li>
                    <li><b>awaiting_requests</b> — сколько человек начинали ждать автомобиль</li>
                    <li><b>awaiting_requests_done_success</b> — сколько человек дождались подачи</li>
                    <li><b>awaiting_requests_done_fail</b> — сколько человек не дождались подачи</li>
                    <li>и т.д. про все стадии</li>
                </ul>
            </section>
            <section>
                <ul>
                    <li><b>match_duration</b> — сколько времени ищем водителя</li>
                </ul>
            </section>
            <section>
                <ul>
                    <li><b>estimated_awaiting_time</b> — распределение оценочного времени подачи автомобиля</li>
                    <li><b>estimated_trip_time</b> — распределение оценочного времени поездки</li>
                    <li><b>awaiting_time</b> — сколько фактически ждали подачи автомобиля</li>
                    <li><b>trip_time</b> — сколько фактически длилась поездка</li>
                    <li><b>estimation_discrepancy_await</b> — разница между предсказанным и фактическим времением ожидания</li>
                    <li><b>estimation_discrepancy_trip</b> — разница между предсказанным и фактическим времением поездки</li>
                </ul>
            </section>
            <section>
                <ul>
                    <li><b>traffic_jams_fallback_count</b> — запросов не учитывают пробки</li>
                </ul>
            </section>
        </section>
        <section>
            <h1>Спасибо!</h1>
            <h2>Вопросы?</h2>
        </section>
    </RevealSlides>
}
