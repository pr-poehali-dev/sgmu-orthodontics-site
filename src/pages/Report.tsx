import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Report = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="GraduationCap" className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-xl font-bold">Кафедра ортопедической стоматологии</h1>
              <p className="text-xs text-muted-foreground">СГМУ, Архангельск</p>
            </div>
          </div>
          <Button variant="outline" asChild>
            <a href="/">
              <Icon name="Home" className="h-4 w-4 mr-2" />
              На главную
            </a>
          </Button>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-24">
        <article className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold mb-4 text-primary">
            Доклад: Создание сайта кафедры ортопедической стоматологии с использованием нейросетей
          </h1>
          
          <p className="text-muted-foreground mb-8">Время выступления: 10 минут</p>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-primary">Слайд 1: Титульный (30 сек)</h2>
              <p className="mb-4">Здравствуйте, уважаемая комиссия!</p>
              <p className="mb-4">
                Тема моей аттестационной работы: <strong>"Применение нейросетевых технологий для создания информационного сайта кафедры ортопедической стоматологии СГМУ"</strong>.
              </p>
              <p>В современном образовании цифровое присутствие кафедры становится необходимостью. Я решил изучить, насколько эффективно можно использовать нейросети для решения этой задачи.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-primary">Слайд 2: Актуальность и цель работы (1 мин)</h2>
              
              <h3 className="text-xl font-semibold mb-3">Актуальность:</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Традиционная разработка сайтов требует значительных финансовых затрат и времени</li>
                <li>Кафедре необходима современная площадка для информирования студентов и абитуриентов</li>
                <li>Нейросети открывают новые возможности для быстрой разработки без глубоких технических знаний</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Цель работы:</h3>
              <p className="mb-4">
                Создать функциональный информационный сайт кафедры, используя возможности искусственного интеллекта, и оценить эффективность этого подхода для образовательной среды.
              </p>

              <h3 className="text-xl font-semibold mb-3">Задачи:</h3>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Изучить современные нейросетевые инструменты для веб-разработки</li>
                <li>Спроектировать структуру и дизайн сайта</li>
                <li>Реализовать сайт с помощью ИИ-ассистента</li>
                <li>Проанализировать результаты и эффективность процесса</li>
              </ol>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-primary">Слайд 3: Выбор инструмента (1 мин 30 сек)</h2>
              
              <p className="mb-4">
                Для реализации проекта я выбрал платформу <strong>poehali.dev</strong> — российский сервис для разработки сайтов с помощью ИИ-ассистента Юры.
              </p>

              <h3 className="text-xl font-semibold mb-3">Почему именно этот инструмент:</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Работает на русском языке — естественная коммуникация без языкового барьера</li>
                <li>Не требует знания программирования — достаточно описать желаемый результат</li>
                <li>Полный цикл разработки: от идеи до публикации в интернете</li>
                <li>Встроенный редактор кода для точечных корректировок</li>
                <li>Интеграция с GitHub для сохранения исходного кода</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Альтернативы:</h3>
              <p>
                Я также рассматривал конструкторы сайтов (Tilda, Wix), но они ограничены шаблонами. ChatGPT и другие нейросети могут писать код, но требуют навыков программирования для его применения.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-primary">Слайд 4: Процесс разработки (2 мин)</h2>
              
              <h3 className="text-xl font-semibold mb-3">Этап 1: Планирование структуры</h3>
              <p className="mb-4">Я начал с формулировки задачи для нейросети: "Создай сайт для кафедры ортопедической стоматологии СГМУ".</p>
              
              <p className="mb-2">Юра предложил структуру:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Главная страница с описанием кафедры</li>
                <li>Раздел "О кафедре" с историей с 1960 года</li>
                <li>Информация о сотрудниках</li>
                <li>Учебная деятельность и программы</li>
                <li>Научные достижения</li>
                <li>Контакты</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Этап 2: Дизайн и визуальное оформление</h3>
              <p className="mb-4">
                Я попросил использовать медицинскую цветовую палитру — голубые и белые тона, ассоциирующиеся с чистотой и профессионализмом. Нейросеть сгенерировала современный дизайн с градиентами и анимациями.
              </p>

              <h3 className="text-xl font-semibold mb-3">Этап 3: Наполнение контентом</h3>
              <p className="mb-2">На этом этапе я давал конкретные указания:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>"Добавь информацию о том, что кафедра работает с 1960 года"</li>
                <li>"Создай раздел с современным оборудованием: CAD/CAM системы, артикуляторы"</li>
                <li>"Добавь поэтический элемент о кафедре"</li>
              </ul>
              <p className="mb-4">
                Интересный момент: я попросил добавить стихотворение о кафедре, и нейросеть создала оригинальный текст, отражающий деятельность кафедры в поэтической форме.
              </p>

              <h3 className="text-xl font-semibold mb-3">Этап 4: Корректировки</h3>
              <p>
                Когда стихотворение получилось слишком крупным, я попросил: "Сделай его в уголке, сдвинь в уголок и меньше шрифт сделай". Нейросеть сразу поняла и выполнила правку.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-primary">Слайд 5: Технические особенности (1 мин 30 сек)</h2>
              
              <h3 className="text-xl font-semibold mb-3">Что создано под капотом:</h3>
              <p className="mb-2">Несмотря на то, что я не писал код, нейросеть создала современное веб-приложение:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>React</strong> — современная библиотека для интерфейсов</li>
                <li><strong>TypeScript</strong> — типизированный JavaScript для надежности</li>
                <li><strong>Tailwind CSS</strong> — современный подход к стилизации</li>
                <li>Адаптивный дизайн для мобильных устройств</li>
                <li>Анимации и плавные переходы</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Публикация:</h3>
              <p className="mb-4">
                Одной командой "Опубликуй сайт" платформа развернула проект на серверах, выдала публичную ссылку и SSL-сертификат для безопасного соединения.
              </p>

              <h3 className="text-xl font-semibold mb-3">Интеграция с GitHub:</h3>
              <p className="mb-2">Весь исходный код автоматически синхронизируется с репозиторием на GitHub. Это означает:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Полный доступ к коду для будущих модификаций</li>
                <li>История всех изменений</li>
                <li>Возможность передать проект другим разработчикам</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-primary">Слайд 6: Результаты работы (1 мин 30 сек)</h2>
              
              <h3 className="text-xl font-semibold mb-3">Что получилось:</h3>
              <ol className="list-decimal pl-6 mb-4 space-y-2">
                <li><strong>Функциональный сайт</strong> с полной информацией о кафедре</li>
                <li><strong>Современный дизайн</strong> с анимациями и градиентами</li>
                <li><strong>Адаптивная верстка</strong> — корректно отображается на всех устройствах</li>
                <li><strong>Публичный доступ</strong> — сайт доступен по ссылке в интернете</li>
              </ol>

              <h3 className="text-xl font-semibold mb-3">Временные затраты:</h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Традиционная разработка: 2-4 недели работы программиста</li>
                <li>С использованием нейросети: <strong>около 2-3 часов активной работы</strong></li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Экономия:</h3>
              <p>
                Стоимость разработки подобного сайта фрилансером составила бы 30-50 тысяч рублей. Использование poehali.dev обошлось в бесплатный тарифный план (с возможностью upgrade при необходимости).
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-primary">Слайд 7: Преимущества и ограничения метода (1 мин)</h2>
              
              <h3 className="text-xl font-semibold mb-3">Преимущества использования нейросетей:</h3>
              <ul className="list-none pl-0 mb-4 space-y-2">
                <li>✅ Скорость разработки — результат за часы, а не недели</li>
                <li>✅ Доступность — не требуется знание программирования</li>
                <li>✅ Гибкость — легко вносить изменения простыми командами</li>
                <li>✅ Современные технологии — нейросеть использует актуальные инструменты</li>
                <li>✅ Обучающий эффект — я изучил принципы веб-разработки в процессе</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Ограничения:</h3>
              <ul className="list-none pl-0 space-y-2">
                <li>⚠️ Требуется четкая формулировка задач</li>
                <li>⚠️ Сложные интерактивные элементы могут требовать итераций</li>
                <li>⚠️ Необходимо понимание базовых принципов веб-дизайна для качественного результата</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-primary">Слайд 8: Применение в образовательной среде (1 мин)</h2>
              
              <h3 className="text-xl font-semibold mb-3">Перспективы использования:</h3>
              <p className="mb-4">Этот опыт показал, что нейросети могут стать инструментом для:</p>
              
              <ol className="list-decimal pl-6 mb-4 space-y-2">
                <li><strong>Студенческих проектов</strong> — создание портфолио, проектных работ</li>
                <li><strong>Кафедральных сайтов</strong> — быстрое создание информационных порталов</li>
                <li><strong>Учебного процесса</strong> — изучение веб-технологий без барьера входа</li>
                <li><strong>Научных конференций</strong> — оперативное создание сайтов мероприятий</li>
              </ol>

              <h3 className="text-xl font-semibold mb-3">Образовательная ценность:</h3>
              <p>
                Работа с ИИ-ассистентом развивает навык формулирования технических задач, понимание структуры веб-проектов и дизайн-мышление.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-primary">Слайд 9: Выводы (1 мин)</h2>
              
              <p className="mb-4"><strong>По итогам работы я пришел к следующим выводам:</strong></p>
              
              <ol className="list-decimal pl-6 space-y-3">
                <li><strong>Нейросети существенно снижают порог входа</strong> в веб-разработку. То, что раньше требовало месяцев обучения, теперь доступно через естественный диалог.</li>
                
                <li><strong>Качество результата сопоставимо с ручной разработкой</strong> для типовых информационных сайтов. Код чистый, современный и поддерживаемый.</li>
                
                <li><strong>Скорость разработки возрастает в 10-30 раз</strong> по сравнению с традиционным подходом.</li>
                
                <li><strong>Экономическая эффективность очевидна</strong> для образовательных учреждений с ограниченным бюджетом.</li>
                
                <li><strong>Это не замена программистам</strong>, а инструмент, который расширяет возможности непрограммистов решать цифровые задачи.</li>
              </ol>

              <p className="mt-6 p-4 bg-primary/10 rounded-lg font-semibold">
                <strong>Главный вывод:</strong> Нейросетевые технологии в веб-разработке — это не будущее, а настоящее, которое уже можно эффективно применять в образовательной среде.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-primary">Слайд 10: Заключение (30 сек)</h2>
              
              <p className="mb-4">
                Цель моей аттестационной работы достигнута — создан функциональный сайт кафедры с использованием нейросетевых технологий.
              </p>
              
              <p className="mb-4">
                Этот проект показал, что современные ИИ-инструменты делают цифровые технологии доступнее и открывают новые возможности для образования и науки.
              </p>
              
              <p className="text-xl font-bold text-center mt-8 mb-4">
                Спасибо за внимание! Готов ответить на ваши вопросы.
              </p>
            </section>

            <section className="mb-12 bg-secondary/20 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-primary">Приложение: Возможные вопросы комиссии и ответы</h2>
              
              <div className="space-y-4">
                <div>
                  <p className="font-semibold mb-2">В: Насколько безопасно использовать сгенерированный нейросетью код?</p>
                  <p className="text-muted-foreground">О: Платформа использует проверенные библиотеки и стандарты. Код проходит автоматическую валидацию, а интеграция с GitHub позволяет провести дополнительный аудит безопасности.</p>
                </div>

                <div>
                  <p className="font-semibold mb-2">В: Можно ли масштабировать такой сайт в будущем?</p>
                  <p className="text-muted-foreground">О: Да, поскольку используются стандартные технологии (React, TypeScript), любой разработчик сможет продолжить работу. Исходный код доступен через GitHub.</p>
                </div>

                <div>
                  <p className="font-semibold mb-2">В: Сколько стоит поддержка такого сайта?</p>
                  <p className="text-muted-foreground">О: Хостинг включен в платформу. Для изменений не нужен программист — можно продолжать работать с ИИ-ассистентом.</p>
                </div>

                <div>
                  <p className="font-semibold mb-2">В: Какие ограничения по контенту и функциональности?</p>
                  <p className="text-muted-foreground">О: Подходит для информационных сайтов. Для сложной бизнес-логики (интернет-магазины, CRM) потребуется привлечение разработчиков, но базу можно создать с помощью ИИ.</p>
                </div>

                <div>
                  <p className="font-semibold mb-2">В: Применимо ли это для обучения студентов?</p>
                  <p className="text-muted-foreground">О: Абсолютно. Это отличный способ изучить современную веб-разработку, структуру проектов и дизайн без необходимости сначала учить программирование год-два.</p>
                </div>
              </div>
            </section>
          </div>
        </article>
      </main>

      <footer className="border-t py-8 bg-white">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Кафедра ортопедической стоматологии СГМУ. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Report;