import { type ReactElement } from 'react'

import { RevealSlides, type RevealSlidesProps } from '../components/reveal'

export function PostmortemsSlides ({ embedded }: RevealSlidesProps): ReactElement {
    return <RevealSlides embedded={embedded}>
        <section>
            <h1>Постмортемы</h1>
            <p>
                <i className='fa-regular fa-copyright'></i>
                    Дмитрий Масленников, «Тинькофф»
            </p>
        </section>
        <section>
            <section>
                <h1>После сбоя</h1>
                <ul>
                    <li>Сбор статистики</li>
                    <li>Улучшение систем</li>
                    <li>Материал для обучения</li>
                </ul>
            </section>
        </section>
        <section>
            <section>
                <h1>Опросник после сбоя</h1>
            </section>
            <section>
                <h2>Сбой затронул рабочий день/сбой начался во время рабочего дня?</h2>
                <ul>
                    <li>Да</li>
                    <li>Нет</li>
                </ul>
            </section>
            <section>
                <h2>Триггером сбоя стал релиз?</h2>
                <ul>
                    <li>Да</li>
                    <li>Нет</li>
                </ul>
            </section>
            <section>
                <h2>Сбой затронул внешних клиентов?</h2>
                <ul>
                    <li>Да</li>
                    <li>Нет</li>
                    <li>Неизвестно</li>
                </ul>
            </section>
            <section>
                <h2>Вызван ли сбой проблемой на базовой инфраструктуре (например, сеть)?</h2>
                <ul>
                    <li>Да</li>
                    <li>Нет</li>
                    <li>Неизвестно</li>
                </ul>
            </section>
            <section>
                <h2>Мониторинг и алерты сработали корректно и доработки не требуются?</h2>
                <ul>
                    <li>Да</li>
                    <li>Нет</li>
                    <li>Неизвестно</li>
                </ul>
            </section>
            <section>
                <h2>Могли обнаружить проблему на стадии тестирования?</h2>
                <ul>
                    <li>Да</li>
                    <li>Нет</li>
                    <li>Неизвестно</li>
                </ul>
            </section>
            <section>
                <h2>Знали о проблеме (баге) до того, как она привела к сбою?</h2>
                <ul>
                    <li>Да</li>
                    <li>Нет</li>
                    <li>Неизвестно</li>
                </ul>
            </section>
            <section>
                <h2>Сбой связан с ошибкой в действиях сотрудника при релизе, плановых работах или других работах по обслуживанию продакшна?</h2>
                <ul>
                    <li>Да</li>
                    <li>Нет</li>
                    <li>Неизвестно</li>
                </ul>
            </section>
            <section>
                <h2>Сбой связан с программной ошибкой в нашем коде?</h2>
                <ul>
                    <li>Да</li>
                    <li>Нет</li>
                    <li>Неизвестно</li>
                </ul>
            </section>
            <section>
                <h2>Сбой связан с естественным увеличением нагрузки?</h2>
                <ul>
                    <li>Да</li>
                    <li>Нет</li>
                    <li>Неизвестно</li>
                </ul>
            </section>
            <section>
                <h2>Сбой связан с форс-мажором (отказ IT оборудования, стихийные бедствия, разрушения инфраструктуры)?</h2>
                <ul>
                    <li>Да</li>
                    <li>Нет</li>
                    <li>Неизвестно</li>
                </ul>
            </section>
            <section>
                <h2>Сбой: на стороне партнёра, связан с ошибкой в купленном ПО или внешнем вендорском решении?</h2>
                <ul>
                    <li>Да</li>
                    <li>Нет</li>
                    <li>Неизвестно</li>
                </ul>
            </section>
            <section>
                <h2>Сбой связан с ошибкой в опенсорсном ПО?</h2>
                <ul>
                    <li>Да</li>
                    <li>Нет</li>
                    <li>Неизвестно</li>
                </ul>
            </section>
            <section>
                <h2>Сбой связан с намеренными действиями злоумышленников (взлом, DDOS, другие атаки)?</h2>
                <ul>
                    <li>Да</li>
                    <li>Нет</li>
                    <li>Неизвестно</li>
                </ul>
            </section>
            <section>
                <h2>Сбой связан с проблемой коммуникации между сотрудниками: некорректная постановка задачи, ошибочное понимание требуемых действий, некачественная документация или её отсутствие?</h2>
                <ul>
                    <li>Да</li>
                    <li>Нет</li>
                    <li>Неизвестно</li>
                </ul>
            </section>
            <section>
                <h2>Откатывали релиз в процессе устранения сбоя?</h2>
                <ul>
                    <li>Да</li>
                    <li>Нет</li>
                    <li>Неприменимо</li>
                </ul>
            </section>
            <section>
                <h2>Применялись специальные программные хотфиксы в процессе устранения сбоя?</h2>
                <ul>
                    <li>Да</li>
                    <li>Нет</li>
                </ul>
            </section>
            <section>
                <h2>Привлекали больше одной SRE-команды для устранения сбоя?</h2>
                <ul>
                    <li>Да</li>
                    <li>Нет</li>
                </ul>
            </section>
            <section>
                <h2>Привлекали разработчиков для устранения сбоя (если есть выделенная команда SRE)?</h2>
                <ul>
                    <li>Да</li>
                    <li>Нет</li>
                    <li>Неизвестно</li>
                </ul>
            </section>
        </section>
        <section>
            <section>
                <h1>Постмортемы</h1>
            </section>
            <section>
                <h2>Краткое содержание</h2>
                    Заботимся о тех, кому некогда читать. Стараемся заинтересовать. Обязательно охватить все аспекты понемногу.
            </section>
            <section>
                <h2>Влияние и последствия</h2>
                    Кто пострадал; что наблюдалось; как отреагировали СМИ и соц-сети; выплачивались ли компенсации и т.п.
            </section>
            <section>
                <h2>Причина и триггер</h2>
                    Все причины и триггер
            </section>
            <section>
                <h2>Обнаружение</h2>
                    Нашли ли по мониторигу (каким именно образом), по сообщениям от пользователей. Вовремя ли сработал мониторинг.
            </section>
            <section>
                <h2>Восстановление</h2>
                    Как восстановили работоспособность системы. Неверные действия. Ворк-эраунды.
            </section>
            <section>
                <h2>Информирование</h2>
                    Все ли хорошо было во взаимодействии во время сбоя? Правильно ли информировали клиентов?
            </section>
            <section>
                <h2>Что мы сделали хорошо?</h2>
                    Выражаем благодарность команде, которая занималась устранением сбоя. Подчёркиваем удачные решения, которые привели к быстрому устранению сбоя и повышению надёжности.
            </section>
            <section>
                <h2>Что мы сделали плохо?</h2>
                    Описываем неудачные решения в процессе работы над устранением сбоя. Анализируем ошибки, внедряем рекомендации по повышению эффективности.
            </section>
            <section>
                <h2>В чем нам повезло/не повезло</h2>
                    Описываем внешние факторы, на которые команда по устранению сбоя не могла повлиять.
            </section>
            <section>
                <h2>Полученные уроки</h2>
                    Что в итоге нового узнали о работе наших систем, о процессах.
            </section>
            <section>
                <h2>План действий</h2>
                    Улучшения технические, улучшения процессов. Включая улучшение документации, разработку служебных тулов, работу с пользователями, PR, выплату компенсаций и т.п.
            </section>
            <section>
                <h2>Хронология</h2>
                    Детальный ход событий с метками времени.
            </section>
        </section>
        <section>
            <h1>Спасибо!</h1>
            <h2>Вопросы?</h2>
        </section>
    </RevealSlides>
}