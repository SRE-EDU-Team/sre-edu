import { type ReactElement } from 'react'

import { IntroSlide, RevealSlides, type RevealSlidesProps } from '../components/reveal'

export function TeamSlides ({ embedded }: RevealSlidesProps): ReactElement {
    return <RevealSlides embedded={embedded}>
        <IntroSlide title='Процессы в SRE командах'/>
        {/*
* Работа только в командах
    * Роли менеджера и тех. лида
* Дежурства и расписания
* Взаимодействие команд
    * Ручные пейджи
    * Воррумы
* Процесс работы
    * Определение SLA
    * Мониторинг SLA
    * Задачи ставятся от сбоев и ложных алертов
* Продакшен встреча
* Дейлики для SRE
* Правильная организация алертов
    * Только важные
    * Задачи/пейджи
* Антипаттерны
    * Специализация
    * Работу делает самый опытный
* Чаты SRE команды
    * Team Support
    * Users
    * Team Highlights
*/}
        <section>
            <h1>SRE — командная работа</h1>
        </section>
        <section>
            <h1>Быть «на телефоне» ({'"'}oncall{'"'})</h1>
        </section>
        <section>
            <h1>Процесс алертирования</h1>
            <ul>
                <li>Алерты настраивает себе сама SRE-команда</li>
                <li>Алерты получает SRE-команда</li>
                <li>Алерты подтверждаются</li>
                <li>Есть механизм эскалирования</li>
                <li>Есть механизм «ручных» алертов</li>
            </ul>
        </section>
        <section>
            <h1>Первые шаги SRE-команды</h1>
            <ul>
                <li>Определить SLI и SLO</li>
                <li>Обеспечить автоматический мониторинг SLA</li>
                <li>Падение SLA — источник задач для SRE</li>
            </ul>
        </section>
        <section>
            <h1>Продакшен встреча</h1>
        </section>
        <section>
            <h1>Дневник продакшена</h1>
        </section>
        <section>
            <h1>Антипаттерны</h1>
            <ul>
                <li>Самую сложную работу делает самый опытный</li>
                <li>Специализация</li>
            </ul>
        </section>
        <section>
            <h1>Спасибо!</h1>
            <h2>Вопросы?</h2>
        </section>
    </RevealSlides>
}
