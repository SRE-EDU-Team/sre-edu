import wonderWorldImg from '@site/static/img/wonder-world.jpeg'
import { type ReactElement } from 'react'

import { BulletsSlide, ImageSlide, RevealSlides, type RevealSlidesProps, TitleLeftSlide, TitleSlide, TwoPanelsSlide } from '../components/reveal'
import deepwaterHorizonQrcode from './01_intro/deepwater_horizon_qrcode.png'
import screenshot01 from './01_intro/postmortems/screenshot-01.jpeg'

export function IntroSlides ({ embedded }: RevealSlidesProps): ReactElement {
    return <RevealSlides embedded={embedded}>
        <section>
            <TitleSlide title='Надежность информационных систем' subtitle='Лекции' />
            <BulletsSlide title='Зачем это изучать?' left>
                <li>Если <em>не</em> работать в ИТ?</li>
                <li>Если работать в ИТ?</li>
            </BulletsSlide>
            <ImageSlide src={wonderWorldImg} />
        </section>
        <TitleLeftSlide title='Лекция 01' subtitle='О сбоях'>
            <div className='text-left'>
                На этой лекции рассмотрим сбои в ИТ и не в ИТ, чтобы понимать о чем вообще пойдет речь и чем будем заниматься
            </div>
        </TitleLeftSlide>
        <section>
            <TitleSlide title='Сбои' subtitle='Сбои бывают не только в ИТ' />
            <TitleSlide title='Катастрофа шаттла «Челленджер»'>
                <div className={'r-stack'}>
                    <img className={'fragment fade-out'} data-fragment-index='0' width='500'
                        src='https://upload.wikimedia.org/wikipedia/commons/d/dd/STS-7_Landing_%2818331938034%29.jpg' />
                    <img className={'fragment fade-in'} data-fragment-index='0' width='500'
                        src='https://upload.wikimedia.org/wikipedia/commons/9/9f/Challenger_explosion.jpg' />
                </div>
            </TitleSlide>
            <TitleSlide title='Авария на Deepwater Horizon'>
                <div className={'r-stack'}>
                    <img className={'fragment fade-out'} data-fragment-index='0' width='500'
                        src='https://upload.wikimedia.org/wikipedia/en/e/e0/Deepwater_Horizon.jpg' />
                    <img className={'fragment fade-in'} data-fragment-index='0' width='500'
                        src='https://upload.wikimedia.org/wikipedia/commons/9/9d/Deepwater_Horizon_offshore_drilling_unit_on_fire_2010.jpg' />
                </div>
            </TitleSlide>
            <TwoPanelsSlide>
                <>
                    <p>Фильм по мотивам:</p>
                    <p>
                        <a href='https://www.kinopoisk.ru/film/607737/'>«Глубоководный горизонт»</a><br />
                                Deepwater Horizon
                    </p>
                    <p>2016</p>
                    <img width='250' className='mx-auto' src={deepwaterHorizonQrcode} />
                </>
                <img width='350' className='mx-auto'
                    src='https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/7d48bcd9-e52a-4b39-8549-19f9ec2947a0/1920x' />
            </TwoPanelsSlide>
            <TitleSlide title='Авария на Чернобыльской АЭС'>
                <img className='mx-auto' width='400' src='https://upload.wikimedia.org/wikipedia/ru/1/1b/Chernobyl_Disaster.jpg' />
            </TitleSlide>
            <TitleSlide title='Аполлон 13'>
                <img className='mx-auto' width='350'
                    src='https://upload.wikimedia.org/wikipedia/commons/4/43/Apollo_13_Service_Module_-_AS13-59-8500_%28cropped%29.jpg' />
            </TitleSlide>
        </section>
        <TitleSlide title='Сбои в ИТ системах'/>
        <section>
            <section>
                <h1>Работа с настройками</h1>
                <p>Масштабный сбой в мобильном банке на Android</p>
                <p><em>11 декабря 2020</em></p>
            </section>
            <section>
                <div className={'p2'}>
                    <div>
                        <p>На Android не отображались счета и
                                продукты на главном экране</p>
                        <p>Пострадало около 300 тысяч пользователей</p>
                        <p>Написали РБК, ТАСС и Коммерсант</p>
                    </div>
                    <div>
                        <img className='mx-auto border border-white border-dotted' width='300'
                            src={screenshot01} />
                    </div>
                </div>
            </section>
            <BulletsSlide title='Причины'>
                <li className={'fragment'}>Сначала думали, что дело в «историях» — потеряли время</li>
                <li className={'fragment'}>Оказалось, что добавили новый продукт, но заполнили не все поля</li>
                <li className={'fragment'}>Продукты добавлялись простым редактированием JSON</li>
                <li className={'fragment'}>Не было валидации на сервере</li>
                <li className={'fragment'}>Не было валидации на клиенте (мобильное приложение)</li>
                <li className={'fragment'}>Мобильное приложение Android не отображало все продукты, а не только
                            один
                            невалидный</li>
                <li className={'fragment'}>Мобильные приложения кешировали список продуктов на сутки</li>
                <li className={'fragment'}>Возможность принудительного сброса кеша не была предусмотрена</li>
                <li className={'fragment'}>Возможность массовой коммуникации с пользователями не была
                            предусмотрена
                </li>
            </BulletsSlide>
            <section>
                <h1>Выводы</h1>
                <ul>
                    <li className={'fragment'}>Надо валидировать настройки приложения, даже если их меняет опытный
                            администратор</li>
                    <li className={'fragment'}>Мобильное приложение должно валидировать данные пришедшие с сервера
                    </li>
                    <li className={'fragment'}>Мобильное приложение должно уметь работать с частично валидными данными
                    </li>
                    <li className={'fragment'}>Кешами на мобильном приложении надо уметь управлять с сервера</li>
                    <li className={'fragment'}>В мобильное приложение надо предусмотреть возможность коммуникации с
                            пользователями во время сбоев</li>
                </ul>
            </section>
        </section>
        <section>
            <section>
                <h1>Про алгоритмы и асимптотику</h1>
                <p>Система аналитики Sage</p>
                <p><em>23-24 сентября 2020</em></p>
            </section>
            <section>
                <h1>Пример Sage запроса</h1>
                <pre>
                    <code>
                        {`group="platform_client"
    (level:"ERROR" OR level:"FATAL" OR level:"WARN")
    "TypeError" env="prod"
| where
    if("(pfp|pwa).*" != ".*",
        appName=="(pfp|pwa).*",
        appName:"pwa*" OR appName:"pfp*")
| timechart count as TypeError`}
                    </code>
                </pre>
            </section>
            <section>
                <h2>Соответствующий запрос в Elastic Search</h2>
                <pre>
                    <code>
                        {`{
   "query":{
      "bool":{
         "must":[
            {
               "range":{
                  "@timestamp":{
                     "gte":"2020-09-25T03:28:19.269Z",
                     "lt":"2020-09-25T09:28:19.269Z"
                  }
               }
            },
            {
               "bool":{
                  "filter":[
                     {
                        "bool":{
                           "filter":[
                              {
                                 "bool":{
                                    "filter":[
                                       {
                                          "term":{
                                             "group":"platform_client"
                                          }
                                       },
                                       {
                                          "bool":{
                                             "should":[
                                                {
                                                   "span_near":{
                                                      "in_order":true,
                                                      "slop":0,
                                                      "clauses":[
                                                         {
                                                            "span_term":{
                                                               "level":"error"
                                                            }
                                                         }
                                                      ]
                                                   }
                                                },
                                                {
                                                   "bool":{
                                                      "should":[
                                                         {
                                                            "span_near":{
                                                               "in_order":true,
                                                               "slop":0,
                                                               "clauses":[
                                                                  {
                                                                     "span_term":{
                                                                        "level":"fatal"
                                                                     }
                                                                  }
                                                               ]
                                                            }
                                                         },
                                                         {
                                                            "span_near":{
                                                               "in_order":true,
                                                               "slop":0,
                                                               "clauses":[
                                                                  {
                                                                     "span_term":{
                                                                        "level":"warn"
                                                                     }
                                                                  }
                                                               ]
                                                            }
                                                         }
                                                      ]
                                                   }
                                                }
                                             ]
                                          }
                                       }
                                    ]
                                 }
                              },
                              {
                                 "span_near":{
                                    "in_order":true,
                                    "slop":0,
                                    "clauses":[
                                       {
                                          "span_term":{
                                             "all":"typeerror"
                                          }
                                       }
                                    ]
                                 }
                              }
                           ]
                        }
                     },
                     {
                        "script":{
                           "script":{
                              "lang":"painless",
                              "source":"
                                boolean fulltextSearch(String s, String p) {\n
                                    s = s.toString().toLowerCase();\n
                                    p = p.toString().toLowerCase();\n
                                    if (!p.contains('*')) {\n
                                        return s.contains(p);\n
                                    }\n
                                    int i = 0;\n
                                    int j = 0;\n
                                    int starIndex = -1;\n
                                    int iIndex = -1;\n
                                    while (i < s.length()) {\n
                                        if (j < p.length() && p.charAt(j) == s.charAt(i)) {\n
                                            ++i;\n
                                            ++j;\n
                                        } else if (j < p.length() && p.charAt(j) == (char)'*') {\n
                                            starIndex = j;\n
                                            iIndex = i;\n
                                            j++;\n
                                        } else if (starIndex != -1) {\n
                                            j = starIndex + 1;\n
                                            i = iIndex+1;\n
                                            iIndex++;\n
                                        } else {\n
                                            return false;\n
                                        }\n
                                    }\n
                                    while (j < p.length() && p.charAt(j) == (char)'*') {\n
                                        ++j;\n
                                    }\n
                                    return j == p.length();\n
                                }
                                def s11 = \\"pfp*\\";
                                def s10 = (
                                    !doc.containsKey('appName.keyword')
                                        || doc['appName.keyword'].size() == 0 ? null : doc['appName.keyword'].value);
                                def s12 = ((s10) != null && fulltextSearch(s10,s11));
                                def s8 = \\"pwa*\\";
                                def s7 = (
                                    !doc.containsKey('appName.keyword') 
                                        || doc['appName.keyword'].size() == 0 ? null : doc['appName.keyword'].value);
                                def s9 = ((s7) != null && fulltextSearch(s7,s8));
                                def s13 = (s9 == null || s12 == null ? null : s9 || s12);
                                def s5 = \\"(pfp|pwa).*\\";
                                def s4 = (
                                    !doc.containsKey('appName.keyword')
                                        || doc['appName.keyword'].size() == 0 ? null : doc['appName.keyword'].value);
                                def s6 = (s4 == s5);
                                def s2 = \\".*\\";
                                def s1 = \\"(pfp|pwa).*\\";
                                def s3 = (s1 != s2);
                                def result = (s3 === true ? s6 : s13);
                                return result == null ? false : result"
                           }
                        }
                     }
                  ]
               }
            }
         ]
      }
   },
   "aggs":{
      "buckets":{
         "composite":{
            "sources":[
               {
                  "@timestamp":{
                     "date_histogram":{
                        "field":"@timestamp",
                        "fixed_interval":"300s"
                     }
                  }
               }
            ],
            "size":2500
         },
         "aggs":{
            
         }
      }
   },
   "_source":true,
   "track_total_hits":true,
   "size":0
}`}
                    </code>
                </pre>
            </section>
            <section>
                <h1>24 июля</h1>
                <p>
                        Выложен новый функционал: функция <code>case</code>
                </p>
                <pre>
                    <code>
                        {`group="default"
| eval priority=case(level="INFO", "1", level="DEBUG", "2")
| fields level, status`}
                    </code>
                </pre>
            </section>
            <section>
                <h1>23 сентября</h1>
                <p>Пользователь посылает запрос</p>
                <pre>
                    <code>
                        {`group="mp_smsc" logfile:"1-smsc*"
| eval kodik=case(
        Error_code="1-02", "Некорректный адрес отправителя",
        Error_code="1-03", "Адрес отправителя обнаружен в черном списке",
        Error_code="1-04", "Адрес получателя обнаружен в черном списке",
        <Еще 19 похожих строк...>
        Error_code="8-01", "Попытка регистрации дубликата части конкатенированного сообщения"
    )
| timechart span=10m count by kodik, inst`}
                    </code>
                </pre>
            </section>
            <section>
                <h1>Фрагмент запроса в Elastic Search</h1>
                <pre>
                    <code>
                        {`return (
    s3 === true ? s4 :
        s7 === true ? s8 :
        s11 === true ? s12 :
        s15 === true ? s16 :
        s19 === true ? s20 :
        <...>
        s91 === true ? s92 :
        null
);`}
                    </code>
                </pre>
            </section>
            <section>
                <h1>Баг в Elastic Search</h1>
                <img width='800' src='imgs/GitHub_screenshot.png'/>
            </section>
            <section>
                <h1>«Особенности» бага в Elastic</h1>
                <ul>
                    <li className={'fragment'}>Все работает «без ошибок», только очень медленно</li>
                    <li className={'fragment'}>У Elastic Search все Painless Script запросы парсятся одним воркером
                    </li>
                    <li className={'fragment'}>Запросы с Painles Script блокируют один воркер для процессинга запросов
                            до
                            стадии парсинга</li>
                    <li className={'fragment'}>Запросы без Painless Script работают, пока не закончатся воркеры
                            процессинга</li>
                    <li className={'fragment'}>Сам Elastic думает, что у него все работает</li>
                </ul>
            </section>
            <section>
                <h1>Второй баг</h1>
                <p>Приложение, реализующее преобразование запросов, не освобождало соединения при таймауте со
                        стороны
                        Elastic Search</p>
                <p>Наличие второго бага существенно осложнило поиск причин сбоев</p>
            </section>
            <section>
                <p>
                    У Sage тысячи пользователей, которые генерируют много запросов.
                </p>
                <p>
                    Даже догадавшись, что дело в «плохом» запросе, поиск его — поиск «иголки в стоге сена».
                </p>
            </section>
            <section>
                <h1>Выводы</h1>
                <ul>
                    <li className={'fragment'}>Проблема может проявиться сильно после релиза</li>
                    <li className={'fragment'}>Если пользователям доступен язык запросов, то тестировать становится
                            сильно сложнее</li>
                    <li className={'fragment'}>Несколько проблем могут закрывать дург друга усложняя поиск причин</li>
                    <li className={'fragment'}>Асимптотика важна в неожиданных местах</li>
                </ul>
            </section>
        </section>
        <section>
            <section>
                <h1>Каскадный сбой от маленькой утилиты</h1>
                <p><em>17 февраля 2021</em></p>
            </section>
            <section>
                <h1>Filebeat</h1>
                <p>
                        Простая утилита для загрузки логов
                </p>
                <p>
                        Filebeat обычно используется для загрузки логов в Elastic Search
                </p>
            </section>
            <section>
                <h1>17 февраля в 15:08</h1>
                <p>Filebeat загрузил CPU одной из нод Hazelcast на 100%</p>
            </section>
            <section>
                <h1>Распространение влияния</h1>
                <ol>
                    <li className={'fragment'}>Hazelcast начал медленно отвечать, а затем у него закончились файловые
                            дескрипторы</li>
                    <li className={'fragment'}>Основной API начал медленно отвечать на запросы или отвечать с ошибкой</li>
                    <li className={'fragment'}>Системы обращающиеся к API начали посторять запросы</li>
                    <ul className={'fragment'}>
                        <li>Еще больше увеличили нагрузку на API</li>
                        <li>Увеличили нагрузку на соседние системы (которые надо вызывать совместно с API, или
                                которые вызывает API в процессе работы)</li>
                    </ul>
                </ol>
            </section>
            <section>
                <h1>Влияние на Банк</h1>
                <ul>
                    <li className={'fragment'}>Ошибки при входе в мобильные приложения</li>
                    <li className={'fragment'}>Не загружались счета</li>
                    <li className={'fragment'}>Не работали платежи и переводы</li>
                </ul>
            </section>
            <section>
                <h1>Влияние на Страховую</h1>
                <ul>
                    <li className={'fragment'}>Невозможно было рассчитать, оформить продлить и облатить ОСАГО</li>
                </ul>
            </section>
            <section>
                <h1>Влияние на Инвестиции</h1>
                <ul>
                    <li className={'fragment'}>Трудно войти в приложение</li>
                    <li className={'fragment'}>Пользователи не видели свои счета</li>
                    <li className={'fragment'}>Не получалось получить информацию о ценных бумагах</li>
                    <li className={'fragment'}>Не возможно купить или продать бумаги, виставить лимитные заявки</li>
                </ul>
            </section>
            <section>
                <h1>Влияние на другие сервисы</h1>
                <ul>
                    <li className={'fragment'}>Не работал голосовой помощник</li>
                    <li className={'fragment'}>Нельзя было записать телефонный разговор</li>
                    <li className={'fragment'}>На колценнтр скопилась огромная очередь</li>
                    <li className={'fragment'}>Внимание со стороны регулятора</li>
                    <li className={'fragment'}>Просели рейтинги приложений в AppStore и Google Play</li>
                </ul>
            </section>
            <section>
                <h1>Выводы</h1>
                <ul>
                    <li className={'fragment'}>Вспомогательные приложения должны быть ограничены по максимальному
                            использованию ресурсов</li>
                    <li className={'fragment'}>Надо очень внимательно продумывать работу приложений во время сбоев,
                            особенно при повторных вызовах</li>
                    <li className={'fragment'}>Необходим план действий во время масштабных сбоев, включая работу
                            поддержки
                            и PR</li>
                </ul>
            </section>
        </section>
        <section>
            <h1>Спасибо за внимание!</h1>
            <p>Вопросы?</p>
        </section>
    </RevealSlides>
}
