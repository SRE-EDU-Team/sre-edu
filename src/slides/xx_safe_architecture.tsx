import { type ReactElement } from 'react'

import { RevealSlides, type RevealSlidesProps } from '../components/reveal'

export function SafeArchSlides ({ embedded }: RevealSlidesProps): ReactElement {
    return <RevealSlides embedded={embedded}>

        <section>
            <h1>Про отказоустойчивые архитектуры</h1>
            <p>
                <i className='fa-regular fa-copyright'></i>
                    Дмитрий Масленников, «Тинькофф»
            </p>
        </section>
        {/*
    - CAP
    - Consistency (Every read receives the most recent write or an error.)
        - Strong consistency
            - Linearizability
        - Week consistency
            - Eventual consistency
            - Session Consistency
                - Read Own Writes
                - Write Follows Read
                - Monotonic Write
                - Monotonic Read
            - Consistent Prefix Read
    - Availability (Every request receives a (non-error) response, without the guarantee that it contains the most recent write.)
    - Partitioning (The system continues to operate despite an arbitrary number of messages being dropped (or delayed) by the network between nodes.)
    - PACELC
*/}
        <section>
            <h1>CAP теорема</h1>
            <p>Consistency, Availability, Partitioning — можно гарантировать только 2 из этих свойств</p>
        </section>
        <section>
            <h1>Consistency</h1>
            <p>Читаем самую последнюю запись</p>
        </section>
        <section>
            <h1>Availability</h1>
            <p>Система всегда отвечает (без ошибок). Ответ самыми свежими данными не гарантируется.</p>
        </section>
        <section>
            <h1>Partitioning</h1>
            <p>Система сохраняет гарантии при потерях на сети</p>
        </section>
        <section>
            <h1>Следствие</h1>
            <p>
                    Если нельзя создать надежную, консистентную систему, то надо дизайнить то, как система будет
                    ломаться.
            </p>
            <p className='info'>Частота и длительность сбоев важны для пользовательского опыта, но теорема их никак не
                    учитывает.</p>
        </section>
        <section>
            <h1>Являются ли клиенты частью системы?</h1>
            <p>Связь между клиентом и серверами чатсо теряется — проблема связности становится намного более
                    серьезной</p>
        </section>
        <section>
            <h1>Всегда ли нужна доступность?</h1>
        </section>
        <section>
            <h1>Всегда ли нужна консистентность?</h1>
        </section>
        <section>
            <section>
                <h1>Week Consistency</h1>
            </section>
            <section>
                <h1>Eventual Consistency</h1>
                <p>Если перестать менять состояние, то через какое-то время она придет в консистентное состояние: все записи применены в правильном порядке</p>
            </section>
            <section>
                <h1>Session Consistency</h1>
            </section>
            <section>
                <h1>Read Own Writes</h1>
                <p>Мы видим все свои записи в одной и той же сессии</p>
            </section>
            <section>
                <h1>Write Follows Read</h1>
                <p>Если перед записью (W2) мы делали чтение, которое показало эффект предыдущей записи (W1), то вторая запись (W2) должна всегда быть после предыдущей (W1)</p>
            </section>
            <section>
                <h1>Monotonic Write</h1>
                <p>Все записи одной сессии применяются строго по порядку</p>
            </section>
            <section>
                <h1>Monotonic Read</h1>
                <p>Мы не можем вычитать состоянее старее, чем мы уже читали</p>
            </section>
            <section>
                <h1>Consistent Prefix Read</h1>
                <p>Если мы читаем состояние после некоторой записи, то в нем должны учитываться все предыдущие записи.</p>
            </section>
            <section>
                <h1>Вывод</h1>
                <p>Нам не всегда нужна строгая консистенстность на практике</p>
            </section>
        </section>
        <section>
            <h1>PACELC теорема</h1>
            <p>If Partitioning then Availability or Consistency Else Latency or Consistency</p>
        </section>
        <section>
            <h1>Распределенные системы среди нас</h1>
            <p>Взятие идей из не IT-систем. «Метод маленьких человечков»</p>
        </section>
        <section>
            <h1>Микросервисы</h1>
        </section>
        <section>
            <h1>Недостатки</h1>
            <ul>
                <li>Сетевой вызов медленный — увеличивает время ответа</li>
                <li>Лишние сериализации/десериализации — нужно больше CPU</li>
                <li>Необходим дополнительный мониторинг (ресурсы)</li>
                <li>Надо писать логику по повторам, балансировке и подобное</li>
                <li>Необходимо держать обратную совместимость между контрактами</li>
                <li>Сложнее обучать архитектуре, сложнее искать ошибки</li>
                <li>Сложнее профилировать, трассировать запросы, отлаживать</li>
            </ul>
        </section>
        <section>
            <h1>Преимущества</h1>
            <ul>
                <li>Независимый цикл релизов</li>
                <li>Фатальная ошибка в одной части не приветет к падению другой</li>
                <li>Независимое время жизни — части можно останавливать и рестартовать независимо</li>
                <li>Одной из частей можно гарантировать доступные ресурсы</li>
            </ul>
        </section>
        <section>
            <h1>Спасибо!</h1>
            <h2>Вопросы?</h2>
        </section>
    </RevealSlides>
}
