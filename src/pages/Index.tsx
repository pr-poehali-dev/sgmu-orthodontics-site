import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [showHistory, setShowHistory] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const teachers = [
    {
      name: 'Профессор Иванов Иван Иванович',
      position: 'Заведующий кафедрой',
      degree: 'Доктор медицинских наук',
      specialization: 'Ортопедическая стоматология'
    },
    {
      name: 'Доцент Петрова Елена Сергеевна',
      position: 'Профессор кафедры',
      degree: 'Кандидат медицинских наук',
      specialization: 'Протезирование'
    },
    {
      name: 'Доцент Сидоров Алексей Петрович',
      position: 'Доцент кафедры',
      degree: 'Кандидат медицинских наук',
      specialization: 'Имплантология'
    }
  ];

  const publications = [
    {
      title: 'Современные методы протезирования в ортопедической стоматологии',
      authors: 'Иванов И.И., Петрова Е.С.',
      year: '2024',
      journal: 'Стоматология'
    },
    {
      title: 'Применение CAD/CAM технологий в клинической практике',
      authors: 'Сидоров А.П.',
      year: '2023',
      journal: 'Dental Forum'
    },
    {
      title: 'Биомеханика зубочелюстной системы при протезировании',
      authors: 'Иванов И.И., Сидоров А.П.',
      year: '2023',
      journal: 'Российский стоматологический журнал'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="GraduationCap" className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-xl font-bold">Кафедра ортопедической стоматологии</h1>
              <p className="text-xs text-muted-foreground">СГМУ, Архангельск</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6">
            {[
              { id: 'about', label: 'О кафедре', icon: 'Info' },
              { id: 'teachers', label: 'Преподаватели', icon: 'Users' },
              { id: 'students', label: 'Студентам', icon: 'BookOpen' },
              { id: 'science', label: 'Наука', icon: 'FlaskConical' },
              { id: 'contacts', label: 'Контакты', icon: 'Mail' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === item.id ? 'text-primary' : 'text-foreground'
                }`}
              >
                <Icon name={item.icon as any} className="h-4 w-4" />
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-r from-primary to-accent py-24 text-white">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://cdn.poehali.dev/files/33eb520e-58b2-4729-be51-fdbf03fc9297.jpg" 
            alt="Архангельский медицинский институт" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center animate-fade-in">
            <h2 className="text-5xl font-bold mb-6">
              Кафедра ортопедической стоматологии СГМУ
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Подготовка высококвалифицированных специалистов в области ортопедической стоматологии с 1960 года
            </p>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => scrollToSection('about')}
              className="animate-scale-in"
            >
              <Icon name="ArrowDown" className="mr-2 h-5 w-5" />
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="container">
          <div className="mb-12">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div className="animate-fade-in">
                <h3 className="text-4xl font-bold mb-4">О кафедре</h3>
                <p className="text-muted-foreground text-lg mb-6">
                  История и достижения кафедры ортопедической стоматологии
                </p>
                <p className="text-foreground">
                  Кафедра ортопедической стоматологии СГМУ — один из ведущих образовательных центров Северо-Запада России. Мы гордимся нашими традициями и постоянно внедряем инновационные методы обучения.
                </p>
              </div>
              <div className="animate-fade-in rounded-lg overflow-hidden shadow-lg" style={{animationDelay: '0.2s'}}>
                <img 
                  src="https://cdn.poehali.dev/files/65b0d2bc-fc46-4590-a4cd-0fd8b8229e65.jpg" 
                  alt="Коллектив кафедры ортопедической стоматологии СГМУ" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="animate-fade-in hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setShowHistory(!showHistory)}>
              <CardHeader>
                <Icon name="History" className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="flex items-center justify-between">
                  История
                  <Icon name={showHistory ? "ChevronUp" : "ChevronDown"} className="h-5 w-5" />
                </CardTitle>
              </CardHeader>
              {showHistory && <CardContent className="max-h-[500px] overflow-y-auto">
                <div className="space-y-4 text-sm text-muted-foreground">
                  <p>
                    <strong>1960 год</strong> - год организации кафедры ортопедической стоматологии в Архангельском государственном медицинском институте. Основателем и первым заведующим кафедрой (1960-1965 гг.) была доцент Л.Н. Кафтасьева, которая много сил и энергии отдала организации и оснащению кафедры, подбору ассистентов, организации учебного процесса.
                  </p>
                  <p>
                    С этой целью в ММСИ в 1961 году был направлен выпускник лечебного факультета Ю.П. Суслонов, который после окончания ординатуры, (а в последующем и аспирантуры) почти тридцать лет успешно работал на кафедре.
                  </p>
                  <p>
                    В период становления кафедры к учебному процессу привлекались врачи практического здравоохранения. Так, в 1963 году на кафедру была приглашена опытный врач-стоматолог Т.А. Санникова, которая владея методами ортопедического и ортодонтического лечения пациентов стоматологического профиля, в течение ряда лет вела практические занятия со студентами.
                  </p>
                  <p>
                    <strong>С 1965 г. по 1970 г.</strong> обязанности заведующего кафедрой исполнял ассистент Юрий Прокопьевич Суслонов. Несмотря на большую учебную нагрузку, Ю.П. Суслонов активно занимался научной работой. В 1970 году он защитил кандидатскую диссертацию на тему: «О реакции пародонта при длительном воздействии на организм низких температур в сочетании с повышенной влажностью».
                  </p>
                  <p>
                    <strong>С 1970 по 1980 гг.</strong> кафедру возглавлял доктор медицинских наук, профессор Яков Михайлович Збарж – известный ученый, клиницист, педагог. Он внедрил в стоматологическую практику оригинальные методы, сконструировал специальные аппараты для лечения раненых в челюстно-лицевую область, разработал рецептуру и способы применения пластмасс в стоматологии. Результаты этих исследований он обобщил более чем в 130 печатных работах. Под его руководством подготовлены 2 доктора и 14 кандидатов медицинских наук.
                  </p>
                  <p>
                    <strong>С 1980 г. по 2000 г.</strong> кафедрой руководил доцент, кандидат медицинских наук, Заслуженный врач РФ Анатолий Лукич Рожков. Двадцать лет Анатолий Лукич заведовал кафедрой, проявляя себя отличным руководителем, организатором учебного процесса. Талантливый преподаватель, он относился к числу тех, кто составлял ядро педагогического коллектива. В течение 34 лет (до 2008) А.Л. Рожков успешно сочетал руководство кафедрой с работой деканом стоматологического факультета.
                  </p>
                  <p>
                    <strong>С сентября 2000 г.</strong> кафедрой заведует Заслуженный врач РФ, доктор медицинских наук, доцент Татьяна Николаевна Юшманова. В 1999 г. ею была защищена докторская диссертация «Эколого-гигиенические и социальные аспекты стоматологического здоровья населения Архангельской области». Под её руководством на кафедре обучаются аспиранты. Ею опубликовано три монографии, более 350 научных статей. Она является соавтором 7 общероссийских учебников с грифом Министерства Образования.
                  </p>
                  <p>
                    <strong>В настоящее время</strong> на кафедре работает коллектив высококвалифицированных преподавателей в составе одного доктора медицинских наук, профессора (зав. кафедрой), трех доцентов и шести ассистентов. Коллективом кафедры опубликованы две монографии, более двухсот пятидесяти научных статей, получено 2 авторских свидетельства на изобретения, внедрено более 40 рационализаторских предложений.
                  </p>
                </div>
              </CardContent>}
            </Card>

            <Card className="animate-fade-in hover:shadow-lg transition-shadow" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <Icon name="Trophy" className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Достижения</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Преподаватели кафедры — авторы более 200 научных публикаций, 15 монографий и 8 патентов на изобретения.
                </p>
              </CardContent>
            </Card>

            <Card className="animate-fade-in hover:shadow-lg transition-shadow" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <Icon name="Stethoscope" className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Клиническая база</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Современная клиническая база оснащена новейшим оборудованием для подготовки студентов и оказания помощи пациентам.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="teachers" className="py-20 bg-secondary/50">
        <div className="container">
          <div className="mb-12 text-center animate-fade-in">
            <h3 className="text-4xl font-bold mb-4">Преподаватели</h3>
            <p className="text-muted-foreground text-lg">
              Наши опытные специалисты и ученые
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {teachers.map((teacher, index) => (
              <Card key={index} className="animate-fade-in hover:shadow-lg transition-all hover:scale-105" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                    <Icon name="User" className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="text-center">{teacher.name}</CardTitle>
                  <CardDescription className="text-center">{teacher.position}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">{teacher.degree}</p>
                  <p className="text-sm font-medium text-primary">{teacher.specialization}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="students" className="py-20">
        <div className="container">
          <div className="mb-12">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div className="animate-fade-in rounded-lg overflow-hidden shadow-lg order-2 md:order-1">
                <img 
                  src="https://cdn.poehali.dev/projects/3fd91c8d-7103-49be-9bd7-ec83a38ccc3d/files/ad973fa8-3f94-4d1b-bae4-cfb72c0b0f77.jpg" 
                  alt="Лаборатория" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="animate-fade-in order-1 md:order-2" style={{animationDelay: '0.2s'}}>
                <h3 className="text-4xl font-bold mb-4">Студентам</h3>
                <p className="text-muted-foreground text-lg mb-6">
                  Учебные материалы и информация для студентов
                </p>
                <p className="text-foreground">
                  Наша кафедра предоставляет все необходимые ресурсы для успешного обучения: от современной учебной базы до доступа к актуальным научным материалам.
                </p>
              </div>
            </div>
          </div>
          <Tabs defaultValue="schedule" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="schedule">Расписание</TabsTrigger>
              <TabsTrigger value="materials">Материалы</TabsTrigger>
              <TabsTrigger value="practice">Практика</TabsTrigger>
            </TabsList>
            <TabsContent value="schedule" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Calendar" className="h-5 w-5 text-primary" />
                    Расписание занятий
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">Понедельник</p>
                      <p className="text-sm text-muted-foreground">Лекция: Протезирование дефектов зубных рядов</p>
                    </div>
                    <span className="text-primary font-medium">9:00 - 10:30</span>
                  </div>
                  <div className="flex justify-between items-center p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">Среда</p>
                      <p className="text-sm text-muted-foreground">Практика: Изготовление съемных протезов</p>
                    </div>
                    <span className="text-primary font-medium">11:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between items-center p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">Пятница</p>
                      <p className="text-sm text-muted-foreground">Семинар: Современные материалы в стоматологии</p>
                    </div>
                    <span className="text-primary font-medium">13:00 - 14:30</span>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="materials" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="BookOpen" className="h-5 w-5 text-primary" />
                    Учебные материалы
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    'Лекции по ортопедической стоматологии',
                    'Методические рекомендации для практических занятий',
                    'Клинические случаи и разборы',
                    'Тестовые задания для самопроверки',
                    'Видеоматериалы по технологиям протезирования'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 border rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer">
                      <Icon name="FileText" className="h-5 w-5 text-primary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="practice" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Briefcase" className="h-5 w-5 text-primary" />
                    Практика
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">
                    Практические занятия проводятся в клинике кафедры с использованием современного оборудования.
                  </p>
                  <div className="space-y-3">
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <h4 className="font-medium mb-2">Клиническая практика</h4>
                      <p className="text-sm text-muted-foreground">Работа с пациентами под контролем преподавателей</p>
                    </div>
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <h4 className="font-medium mb-2">Лабораторная практика</h4>
                      <p className="text-sm text-muted-foreground">Изготовление зубных протезов в учебной лаборатории</p>
                    </div>
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <h4 className="font-medium mb-2">Симуляционный курс</h4>
                      <p className="text-sm text-muted-foreground">Отработка навыков на фантомах и симуляторах</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="science" className="py-20 bg-secondary/50">
        <div className="container">
          <div className="mb-12 text-center animate-fade-in">
            <h3 className="text-4xl font-bold mb-4">Научная деятельность</h3>
            <p className="text-muted-foreground text-lg">
              Исследования и публикации кафедры
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6 mb-8">
              <Card className="animate-fade-in hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icon name="Target" className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Направления исследований</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="h-5 w-5 text-primary mt-0.5" />
                      <span>Биомеханика зубочелюстной системы при различных видах протезирования</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="h-5 w-5 text-primary mt-0.5" />
                      <span>Применение CAD/CAM технологий в ортопедической стоматологии</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="h-5 w-5 text-primary mt-0.5" />
                      <span>Новые материалы для зубного протезирования</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="h-5 w-5 text-primary mt-0.5" />
                      <span>Дентальная имплантация и остеоинтеграция</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h4 className="text-2xl font-bold mb-6 text-center">Последние публикации</h4>
            <div className="space-y-4">
              {publications.map((pub, index) => (
                <Card key={index} className="animate-fade-in hover:shadow-lg transition-shadow" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon name="FileText" className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h5 className="font-medium mb-2">{pub.title}</h5>
                        <p className="text-sm text-muted-foreground mb-1">{pub.authors}</p>
                        <p className="text-xs text-muted-foreground">{pub.journal}, {pub.year}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20">
        <div className="container">
          <div className="mb-12 text-center animate-fade-in">
            <h3 className="text-4xl font-bold mb-4">Контакты</h3>
            <p className="text-muted-foreground text-lg">
              Свяжитесь с нами
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle>Контактная информация</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Адрес</p>
                    <p className="text-sm text-muted-foreground">
                      г. Архангельск, пр. Троицкий, 51<br />
                      Северный государственный медицинский университет
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Phone" className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Телефон</p>
                    <p className="text-sm text-muted-foreground">+7 (8182) 28-57-91</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Mail" className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">ortho@nsmu.ru</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Clock" className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Режим работы</p>
                    <p className="text-sm text-muted-foreground">
                      Пн-Пт: 8:00 - 17:00<br />
                      Сб-Вс: выходной
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <CardTitle>Напишите нам</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Имя</label>
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Сообщение</label>
                    <textarea
                      placeholder="Ваше сообщение"
                      rows={4}
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    />
                  </div>
                  <Button className="w-full">
                    <Icon name="Send" className="mr-2 h-4 w-4" />
                    Отправить
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-8">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold mb-4 flex items-center gap-2">
                <Icon name="GraduationCap" className="h-6 w-6" />
                Кафедра ортопедической стоматологии
              </h4>
              <p className="text-sm text-white/80">
                СГМУ — ведущий медицинский университет Северо-Запада России
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Быстрые ссылки</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">О кафедре</button></li>
                <li><button onClick={() => scrollToSection('teachers')} className="hover:text-white transition-colors">Преподаватели</button></li>
                <li><button onClick={() => scrollToSection('students')} className="hover:text-white transition-colors">Студентам</button></li>
                <li><button onClick={() => scrollToSection('science')} className="hover:text-white transition-colors">Научная деятельность</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>г. Архангельск</li>
                <li>пр. Троицкий, 51</li>
                <li>+7 (8182) 28-57-91</li>
                <li>ortho@nsmu.ru</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/60">
            <p>© 2024 Кафедра ортопедической стоматологии СГМУ. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;