import { type ReactElement } from 'react'

import { RevealSlides, type RevealSlidesProps } from '../components/reveal'

export function ClientsSlides ({ embedded }: RevealSlidesProps): ReactElement {
    return <RevealSlides embedded={embedded}>
        <section>
            <h1>SRE для клиентов</h1>
            <p>
                <i className='fa-regular fa-copyright'></i>
                    Дмитрий Масленников, «Тинькофф»
            </p>
        </section>
        {/*
* Терминология
    * Клиент
    * Frontend
    * Backend
* "Особенности клиента"
    * Web
        * Плохая связь
        * Ограничения браузера
    * Mobile
        * Плохая связь
        * Необходимость экономить батарейку
        * Ограничения ОС
        * Сложности с обновлением
* Идемпотентность важнее
* Очень долго держать совместимость по API
* Возможность общаться с пользователем во время сбоев
* Включение функционала удаленно
* Возможность очищать кеши
* Тестирование на сотрудниках
* Перенос логики на бекенд (BFF)
* Тестирование работы при получении ошибок от бекенда
* Умение блокировать часть траффика
*/}
        <section>
            <h1>Терминология</h1>
            <ul>
                <li>Client — приложение (Web, Mobile, Desktop), которое мы используем для доступа</li>
                <li>Frontend — бекенд, который получает запросы от Client</li>
                <li>Backend — общее название всех микросервисов</li>
            </ul>
        </section>
        <section>
            <h1>Ограничения клиентов</h1>
            <ul>
                <li>
                        Web
                    <ul>
                        <li>Нестабильная связь</li>
                        <li>Ограничения браузера</li>
                    </ul>
                </li>
                <li>
                        Native Mobile
                    <ul>
                        <li>Нестабильная связь</li>
                        <li>Необходимость экономить батарейку</li>
                        <li>Ограничения ОС</li>
                        <li>Сложности с обновлениями</li>
                    </ul>
                </li>
            </ul>
        </section>
        <section>
            <h1>Идемпотентность</h1>
            <div className='info'>Идемпотентность для клиентского API важнее, чем для внутри датацентрового</div>
        </section>
        <section>
            <h1>Совместимость по API надо держать годами</h1>
        </section>
        <section>
            <h1>Возможность общения с пользователем во время сбоев</h1>
        </section>
        <section>
            <h1>Feature-toggles удаленно</h1>
        </section>
        <section>
            <h1>Возможность удаленной очистки/переписывания кешей</h1>
        </section>
        <section>
            <h1>Тестирование на сотрудниках</h1>
        </section>
        <section>
            <h1>Перенос логики на бекенд — BFF</h1>
        </section>
        <section>
            <h1>Тестирование работы при получении ошибок от бекенда</h1>
        </section>
        <section>
            <h1>Умение блокировать часть траффика</h1>
        </section>
        <section>
            <section>
                <h1>Про конфигурирование приложений</h1>
            </section>
            <section>
                <div className='info'>Конфигурирование так же опасно, как и релиз!</div>
            </section>
            <section>
                <div className='info'>Избегайте глобальных изменений в конфигурациях</div>
            </section>
            <section>
                <div className='info'>На конфиги можно писать тесты</div>
            </section>
        </section>
        <section>
            <h1>Долгосрочное планирование и ресемплинг метрик</h1>
        </section>
        <section>
            <h1>Спасибо!</h1>
            <h2>Вопросы?</h2>
        </section>
    </RevealSlides>
}
