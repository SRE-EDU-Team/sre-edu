import { type ReactElement } from 'react'

import { RevealSlides, type RevealSlidesProps } from '../components/reveal'

export function WorkStyleSlides ({ embedded }: RevealSlidesProps): ReactElement {
    return <RevealSlides embedded={embedded}>
        <section>
            <h1>Работа в режиме сложности, срочности и неопределенности</h1>
            <p>
                <i className='fa-regular fa-copyright'></i>
                    Дмитрий Масленников, «Тинькофф»
            </p>
        </section>
        <section>
            <section>
                <h1>Структура современного ИТ решения</h1>
            </section>
            <section>
                <img width='700' src='imgs/services-top-level.png'/>
            </section>
            <section>
                <img width='600' src='imgs/services-hw.png'/>
                <p>
                        Соберите свой процессор в <a href='https://nandgame.com/'>Nandgame</a>
                </p>
            </section>
            <section>
                <img width='600' src='imgs/services-infra.png'/>
            </section>
            <section>
                <img width='600' src='imgs/services-aux.png'/>
            </section>
            <section>
                <img width='600' src='imgs/services-user.png'/>
            </section>
            <section>
                <img width='600' src='imgs/services-user.png'/>
            </section>
            <section>
                <img width='600' src='imgs/services-clients.png'/>
            </section>
        </section>
        <section>
            <section><h1>Manifesto for Agile Software Development</h1></section>
            <section>
                <h1>Ценности</h1>
            </section>
            <section>
                <p>Люди и их взаимодействие важнее процессов и инструментов</p>
            </section>
            <section>
                <p>Работающий сервис важнее документации</p>
            </section>
            <section>
                <p>Взаимодействие важнее утряски условий</p>
            </section>
            <section>
                <p>Реакция на изменения важнее следования плану</p>
            </section>
            <section>
                <h1>Принципы</h1>
            </section>
            <section>
                <p>Приветствуем изменения даже на поздних стадиях разработки!</p>
            </section>
            <section>
                <p>Главная метрика — работающий софт</p>
            </section>
            <section>
                <p>Постоянное внимание к достижению технического совершенства и хорошему дизайну увеличивает гибкость</p>
                <p>Следствие: хороший дизайн тот, который легко поменять</p>
            </section>
            <section>
                <p>Стремитесь к простоте — искусству не делать как можно больше</p>
            </section>
            <section>
                <p>Регулярная рефлексия, как стать более эффективным и изменение поведения в этм направлении</p>
            </section>
        </section>
        <section>
            <h1>Пирамида приоритетов</h1>
            <ol>
                <li>базовое зарабатывание</li>
                <li>безопасность</li>
                <li>защита от критических сбоев</li>
                <li>обеспечение излишков ресурсов/расширенное зарабатываение</li>
                <li>защита от мини-сбоев (баги, единичные случаи от клиентов)</li>
                <li>развлечения</li>
                <li>выполнение миссии</li>
            </ol>
        </section>
        <section>
            <section>
                <h1>Сложные распределенные системы в жизни</h1>
                <p>Метод человечков при проектировании сложных распределенных систем</p>
            </section>
            <section>
                <h1>Работа почты и сервиса доставки</h1>
                <ul>
                    <li>Что делать, если ящик переполнен?</li>
                    <li>Что делать, если пользователь не забрал посылку?</li>
                    <li>Как принять негабаритный груз?</li>
                    <li>Что делать, если пропал курьер?</li>
                </ul>
            </section>
            <section>
                <h1>Государственные службы</h1>
                <ul>
                    <li>Что делать, если переполнился архив?</li>
                    <li>Что делать, если архив сгорел?</li>
                    <li>Что делать, если в разных ведомствах данные противоречат друг другу?</li>
                    <li>Как обнаружить пропажу данных или имущества?</li>
                </ul>
            </section>
            <section>
                <h1>Обычные взаимодействия людей</h1>
                <ul>
                    <li>Как убедиться, что твое сообщение прочитано?</li>
                    <li>Как собрать вечеринку?</li>
                    <li>Что делать, если к вечеринке не доставили еду?</li>
                </ul>
            </section>
        </section>
        <section>
            <h1>Спасибо!</h1>
            <h2>Вопросы?</h2>
        </section>
    </RevealSlides>
}
