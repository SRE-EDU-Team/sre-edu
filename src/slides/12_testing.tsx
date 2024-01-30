import { type ReactElement } from 'react'

import { IntroSlide, RevealSlides, type RevealSlidesProps } from '../components/reveal'

export function TestingSlides ({ embedded }: RevealSlidesProps): ReactElement {
    return <RevealSlides embedded={embedded}>
        <IntroSlide title='Тестирование для SRE'/>
        {/*
* Предпродовое и продакшен тестирование
    * Тестирование прода перед запуском пользователей
    * Тестирование во время работы приложения
* Использование сохраненных запросов для эмуляции пользовательских действий
* Использование мирроринга для тестирования
* Тестирование редко используемого функционала встраиванием в рабочие процессы
* Тестирование одними приложениями других (тестирование зависимостей)
* Тестирование конфигов
* Тестирование приложения на работу во время сбоя
    * под огромной нагрузкой
    * с сломанными зависимостями
* Хаос-инжиниринг
* Использование продакшена в качестве тестовой среды
*/}
        <section>
            <h1>Тестирование прода перед запуском пользователей</h1>
        </section>
        <section>
            <h1>Тестирование во время работы приложения</h1>
        </section>
        <section>
            <h1>Использование сохраненных запросов для эмуляции пользовательских действий</h1>
        </section>
        <section>
            <h1>Использование мирроринга для тестирования</h1>
        </section>
        <section>
            <h1>Тестирование редко используемого функционала встраиванием в рабочие процессы</h1>
        </section>
        <section>
            <h1>Тестирование одними приложениями других (тестирование зависимостей)</h1>
        </section>
        <section>
            <h1>Тестирование приложения на работу во время сбоя</h1>
            <ul>
                <li>под огромной нагрузкой</li>
                <li>с сломанными зависимостями</li>
            </ul>
        </section>
        <section>
            <h1>Хаотическое тестирование</h1>
        </section>
        <section>
            <h1>Использование продакшена к качестве тестовой среды</h1>
        </section>
        <section>
            <h1>Спасибо!</h1>
            <h2>Вопросы?</h2>
        </section>
    </RevealSlides>
}
