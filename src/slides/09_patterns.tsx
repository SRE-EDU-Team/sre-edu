import { type ReactElement } from 'react'

import { RevealSlides, type RevealSlidesProps } from '../components/reveal'

export function PatternsSlides ({ embedded }: RevealSlidesProps): ReactElement {
    return <RevealSlides embedded={embedded}>
        <section>
            <h1>Приемы уменьшения количества сбоев</h1>
            <p>
                <i className='fa-regular fa-copyright'></i>
                    Дмитрий Масленников, «Тинькофф»
            </p>
        </section>
        {/*
- иногда можно не защищаться
 - стихия и внешние техногенные факторы
 - выход из строя оборудования
- если все таки хочется защищаться
 - детектирование проблем в зоне доступности/кластере/датацентре/оборудовании
 - сложность детектирования замедления
 - автоматическое выведение сбойного оборудования
 - универсальный способ защищает от:
  - всех ТИПОВ ошибок (баги, некорректные действия), но НЕ всех ошибок
  - сложная реализации переключения
  - нужно постоянное тестирование
  - каскадные проблемы
- защита от ошибок в коде
  - тестирование (до прода и на проде)
  - ревью кода
  - rolling update/blue-green deployment
  - feature flags
  - поддержание возможности отката и быстрый откат изменений
  - избавление от техдолга (увеличение приоритета)
  - отказ от венторского ПО (переписывание)
  - снижение скорости разработки (вплоть до полной отстановки)
- защита от ошибок во время обслуживания или использования
  - улучшение интерфейса
  - безопасный запрос подтверждений
  - дизайн более безопасных процессов работы
  - написание планов работ
  - учения и отработка действий
  - автоматизация
- защиты от ошибок в коммуникации
  - встраивание документации
  - удаление лишней документации
  - экзамены на знание
  - уменьшение количества коммуникаций (сообщений, писем)
  - обучение новых членов команды
  - подтверждения получения важной информации
- переполнения
 - пытаться учитываать, что может переполниться
  - переполнение DNS в IponWeb
  - переполнение оперативки в Тинькофф SME
  - кончилось место на диске
  - перестало хватать Page Cache
  - заканчиваются идентификаторы в базе данных
  - переполнение сетевого канала (логи в IponWeb)
  - переполнение строки адреса в браузере
  - файловые дескрипторы
  - количество нод в кластере
 - средства защиты:
  - мониторинг
  - планирование ресурсов
  - сбрасывание нагрузки
  - переход на менее ресурсоемкие алгоритмы
  - оставлять запас для вертикального масштабирования
- Graceful degradation
  - опциональное должно быть опциональным
  - кеширование исторических данных от мастер-систем
- "Костыли"
  - Проблему можно решить грязным хаком и выиграть время, но есть риск, что проблема никогда не получит полноценного решения
*/}
        <section>
            <section className='text-left'>
                <h1>Не защищаемся</h1>
                <p>Эффект от защиты может не стоить потраченных на нее денег</p>
                <p>Например:</p>
                <ul>
                    <li>Защита от стихии и внешних техногенных факторов (потеря целых датацентров)</li>
                    <li>Защита от поломок оборудования</li>
                </ul>
            </section>
            <section>
                <h1>Если все-таки надо?</h1>
                <ol>
                    <li>Разрабатываем архитектуру такой, чтобы можно было обслуживать пользователей на части оборудования</li>
                    <li>Делаем автоматическое и надежное детектирование проблем в зоне доступности / кластере / датацентре / на оборудовании</li>
                    <li>Выводим сбойное оборудование при определении проблем</li>
                </ol>
            </section>
            <section>
                <h1>Сложности</h1>
                <ul>
                    <li>Сильное усложнение архитектуры</li>
                    <li>Сложно определить проблему, особенно, если страдает только часть вызовов, или у нас изменились нефукционалные характеристики — например, время ответа системы</li>
                    <li>Можно выключить слишком много и навредить</li>
                    <li>Механизм может сломаться незаметно и не сработать в нужное время</li>
                    <li>Может вызывать каскадные проблемы</li>
                </ul>
            </section>
            <section>
                <h1>Достоинства</h1>
                <ul>
                    <li>Дополнительно защищает от багов в релизах и ошибок при проведении работ</li>
                    <li>Быстрее реакции инженера</li>
                </ul>
            </section>
        </section>
        <section>
            <section>
                <h1>Баги в коде</h1>
            </section>
            <section>
                <h1>Тестирование</h1>
                <p>До прода и в проде!</p>
                <ul>
                    <li>Unit-тестирование</li>
                    <li>Интеграционное тестирование</li>
                    <li>Нагрузочное тестирование</li>
                    <li>Стресс тестирование</li>
                </ul>
                <p>Можно тестировать приложение после деплоя в прод до включения трафика</p>
            </section>
            <section>
                <h1>Ревью кода</h1>
                <ul>
                    <li>Ревью членом команды перед принятием коммита</li>
                    <li>Парное программирование</li>
                    <li>Ревью экспертом по использованным технологиям</li>
                </ul>
            </section>
            <section>
                <h1>Более безопасные релизы</h1>
                <ul>
                    <li>Использование канареек</li>
                    <li>Blue-green deployment</li>
                    <li>Rolling-update</li>
                    <li>Feature-toggle</li>
                    <li>Обеспечение возможности отката всех изменений</li>
                </ul>
            </section>
            <section>
                <h1>Другие возможности</h1>
                <ul>
                    <li>Избавление от техдолга</li>
                    <li>Переписывание</li>
                    <li>Снижение скорости разработки (вплоть до замораживания)</li>
                </ul>
            </section>
        </section>
        <section>
            <section>
                <h1>Защита во время работ</h1>
                <ul>
                    <li>Автоматизация</li>
                    <li>Дизайн безопасных интерфейсов</li>
                    <li>Безопасное подтверждение действий</li>
                    <li>Написание планов работ</li>
                    <li>Отработка действий</li>
                </ul>
            </section>
        </section>
        <section>
            <section>
                <h1>Защита от проблем в коммуникации</h1>
            </section>
            <section>
                <h1>Встраивание документации</h1>
            </section>
            <section>
                <h1>Уменьшение объемов документации</h1>
                <p>Удаление старой документации!</p>
            </section>
            <section>
                <h1>Целенаправленное обучение новых членов команды</h1>
                <p>Экзамен на знание после обучения</p>
            </section>
            <section>
                <h1>Уменьшение количества сообщений и писем</h1>
                <p>Уменьшение автоматически рассылаемой информации</p>
                <p>Подтверждение получения важной информации</p>
            </section>
        </section>
        <section>
            <section>
                <h1>Переполнения</h1>
            </section>
            <section>
                <h1>Что может переполниться?</h1>
                <ul>
                    <li>Место на диске</li>
                    <li>Оперативная память</li>
                    <li>CPU</li>
                    <li>Сетевой канал</li>
                    <li>Файловые дескрипторы</li>
                    <li>Page cache</li>
                    <li>Доступные идентификаторы</li>
                    <li>Размер данных передаваемых через URL в браузере</li>
                    <li>Максимальное количество нод в кластере</li>
                </ul>
            </section>
            <section>
                <h1>Защита</h1>
                <ul>
                    <li>Документирование (обучение разработчиков)</li>
                    <li>Мониторинг</li>
                    <li>Планирование ресурсов (стресс и нагрузочное тестирование)</li>
                    <li>Учить сервисы переходить на менее ресурсоемкие алгоритмы</li>
                    <li>Сброс трафика</li>
                    <li>Иметь запас ресурсов для вертикального масштабирования</li>
                </ul>
            </section>
        </section>
        <section>
            <h1>Graceful Degradation</h1>
            <ul>
                <li>Уметь игнорировать все опциональные зависимости (тестирование!)</li>
                <li>Уметь работать на закешированных данных</li>
                <li>Уметь работать только в режиме на чтение</li>
                <li>Уметь обслуживать только часть клиентов (сброс нагрузки)</li>
            </ul>
        </section>
        <section>
            <h1>Исправление проблем хаками</h1>
            <p>
                    Исправление пролем хаками дает время для нормального исправления проблемы.
                    Но приводит к соблазну не решать проблему более, оставляя хак навечно.
                    Это приводит к обрастанию техдолгом. Требует особого внимания со стороны руководства.
            </p>
        </section>
        <section>
            <h1>Спасибо!</h1>
            <h2>Вопросы?</h2>
        </section>
    </RevealSlides>
}