import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">V</span>
              </div>
              <h1 className="text-2xl font-bold text-black">VSHELL</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#program" className="text-vshell-text hover:text-black transition-colors font-medium">Программа</a>
              <a href="#earnings" className="text-vshell-text hover:text-black transition-colors font-medium">Доходы</a>
            </nav>
            <Button className="bg-black hover:bg-gray-800 text-white font-medium px-6">Создавать с VSHELL</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-8 bg-vshell-gray text-vshell-text border-0 text-sm font-medium" variant="outline">
              РЕФЕРАЛЬНАЯ ПРОГРАММА
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight tracking-tight">
              КОМПЛЕКСНЫЙ УХОД
              <br />
              ДЛЯ РАЗНЫХ ЗОН ЛИЦА И ТЕЛА
            </h1>
            <div className="mb-8">
              <div className="text-2xl md:text-3xl font-bold text-black mb-4 uppercase tracking-wide">
                выкладывай контент и зарабатывай
              </div>
              <div className="w-20 h-0.5 bg-black mx-auto"></div>
            </div>
            <p className="text-lg text-vshell-accent mb-12 max-w-2xl mx-auto leading-relaxed">
              Многоуровневая система вознаграждений. Получайте до 15% от продаж и дополнительно до 5% от доходов ваших рефералов.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-10 py-4 text-lg font-medium" onClick={() => { window.prmo?.('trackEx', {event:'NEW'}); window.open('https://vshell.prmonline.ru/register', '_blank'); }}>
                Хочу зарабатывать с VSHELL
              </Button>
              <Button size="lg" variant="outline" className="border-black text-black hover:bg-black hover:text-white px-10 py-4 text-lg font-medium" onClick={() => { window.prmo?.('trackEx', {event:'NEW'}); window.open('https://vshell.prmonline.ru/register', '_blank'); }}>
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-16 bg-vshell-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <img 
              src="https://cdn.poehali.dev/files/490b4701-f8e7-45cb-bc74-252c1d50831c.png" 
              alt="Vshell Products" 
              className="mx-auto max-w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="program" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 tracking-tight">
              Как работает реферальная программа
            </h2>
            <p className="text-lg text-vshell-accent max-w-2xl mx-auto">
              Простая и прозрачная система многоуровневых вознаграждений
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="UserPlus" size={24} className="text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-black">Привлекайте клиентов</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-vshell-accent">Делитесь персональным промокодом и получайте до 15% с каждой продажи</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={24} className="text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-black">Приглашайте партнеров</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-vshell-accent">Создавайте команду и получайте до 5% с продаж ваших рефералов</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="TrendingUp" size={24} className="text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-black">Максимальный доход</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-vshell-accent">Максимальный доход 20% (15% продажи + 5% рефералы)</p>
              </CardContent>
            </Card>
          </div>

          {/* Collaboration Types */}
          <div className="bg-vshell-gray rounded-lg p-8">
            <h3 className="text-2xl font-bold text-black mb-8 text-center tracking-tight">
              Три типа сотрудничества
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Самостоятельное */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold mr-3">
                    1
                  </div>
                  <h4 className="text-xl font-bold text-black">Самостоятельное</h4>
                </div>
                <ul className="space-y-3 text-vshell-text">
                  <li className="flex items-start">
                    <Icon name="Check" size={16} className="text-black mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm">Выбираете любой продукт VSHELL на наших площадках</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" size={16} className="text-black mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm">Используете <strong>личный промокод</strong> для отслеживания продаж</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" size={16} className="text-black mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm">Делаете видео и получаете доход с каждой покупки</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" size={16} className="text-black mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm">Никаких обязательств, полная свобода в контенте</span>
                  </li>
                </ul>
              </div>

              {/* Промобокс */}
              <div className="bg-white rounded-lg p-6 shadow-sm border-2 border-black">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold mr-3">
                    2
                  </div>
                  <h4 className="text-xl font-bold text-black">Промобокс</h4>
                </div>
                <Badge className="mb-3 bg-black text-white">ПОПУЛЯРНЫЙ</Badge>
                <div className="bg-black text-white text-center py-2 px-4 rounded mb-4">
                  <span className="font-bold text-lg">₽3,000</span>
                  <span className="text-sm ml-2">первый бокс</span>
                </div>
                <ul className="space-y-3 text-vshell-text">
                  <li className="flex items-start">
                    <Icon name="Check" size={16} className="text-black mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm">Подписка на ежемесячные боксы с эксклюзивными продуктами</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" size={16} className="text-black mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm">Новинки до релиза</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Gift" size={16} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm"><strong>Все остальные боксы бесплатно</strong> при соблюдении условий</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="AlertTriangle" size={16} className="text-red-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm"><strong>Обязательно:</strong> минимум 5 роликов в месяц с промокодом</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="X" size={16} className="text-red-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm">Не выполнили условия → следующий бокс не получите</span>
                  </li>
                </ul>
              </div>

              {/* Партнёрство */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold mr-3">
                    3
                  </div>
                  <h4 className="text-xl font-bold text-black">Партнёрство</h4>
                </div>
                <ul className="space-y-3 text-vshell-text">
                  <li className="flex items-start">
                    <Icon name="Check" size={16} className="text-black mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm">Привлекаете других авторов в VSHELL</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" size={16} className="text-black mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm">Они работают по <strong>вашему реферальному коду</strong></span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" size={16} className="text-black mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm">Вы получаете % с их продаж</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" size={16} className="text-black mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm">Без обязательств по контенту</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              {/* Выплаты */}
              <div className="p-4 bg-green-50 border-l-4 border-green-400 rounded">
                <div className="flex items-start">
                  <Icon name="CreditCard" size={20} className="text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-black mb-1">Выплаты:</p>
                    <p className="text-vshell-text text-sm">
                      Выплаты можно получить сразу как забрали товар покупатели, простым движением руки.
                    </p>
                  </div>
                </div>
              </div>

              {/* Важно */}
              <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                <div className="flex items-start">
                  <Icon name="Info" size={20} className="text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-black mb-1">Важно:</p>
                    <p className="text-vshell-text text-sm">
                      Во всех типах сотрудничества доход зависит от активности и охвата аудитории. 
                      Промокод – ваш идентификатор для учёта продаж.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Steps */}
          <div className="bg-white rounded-lg p-8 mt-8">
            <h3 className="text-2xl font-bold text-black mb-8 text-center tracking-tight">
              Этапы сотрудничества
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Шаг 1 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  1
                </div>
                <h4 className="text-lg font-bold text-black mb-3">Знакомство</h4>
                <p className="text-vshell-text text-sm">
                  Мы с тобой познакомимся при помощи небольшой анкеты
                </p>
              </div>

              {/* Шаг 2 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  2
                </div>
                <h4 className="text-lg font-bold text-black mb-3">Получение кодов</h4>
                <p className="text-vshell-text text-sm">
                  Ты получишь собственную реферальную ссылку и промокод
                </p>
              </div>

              {/* Шаг 3 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  3
                </div>
                <h4 className="text-lg font-bold text-black mb-3">Творчество</h4>
                <p className="text-vshell-text text-sm">
                  Начинаешь творить и зарабатывать
                </p>
              </div>
            </div>

            {/* Стрелки между шагами */}
            <div className="hidden md:flex justify-center items-center mt-8 space-x-8">
              <Icon name="ArrowRight" size={24} className="text-vshell-accent" />
              <Icon name="ArrowRight" size={24} className="text-vshell-accent" />
            </div>
          </div>

          {/* Limited Places */}
          <div className="bg-red-600 text-white rounded-lg p-6 mt-8 text-center">
            <div className="flex items-center justify-center mb-3">
              <Icon name="Clock" size={24} className="mr-2" />
              <h3 className="text-xl font-bold">Ограниченное предложение</h3>
            </div>
            <p className="text-lg mb-2">
              Осталось всего <span className="font-bold text-2xl">7 мест</span> на реферальную программу
            </p>
            <p className="text-sm opacity-90">
              После заполнения мест программа будет закрыта
            </p>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-10 py-4 text-lg font-medium" onClick={() => { window.prmo?.('trackEx', {event:'NEW'}); window.open('https://vshell.prmonline.ru/register', '_blank'); }}>
              Хочу зарабатывать с VSHELL
            </Button>
          </div>
        </div>
      </section>

      {/* Earnings Dashboard */}
      <section id="earnings" className="py-20 bg-vshell-gray">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 text-center tracking-tight">
            Отслеживание доходов
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border-0 shadow-sm bg-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-vshell-accent">Общий доход</CardTitle>
                <Icon name="DollarSign" className="h-4 w-4 text-black" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-black">₽284,700</div>
                <p className="text-xs text-green-600 flex items-center mt-1">
                  <Icon name="TrendingUp" className="h-3 w-3 mr-1" />
                  +15.3% за месяц
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-vshell-accent">Активных рефералов</CardTitle>
                <Icon name="Users" className="h-4 w-4 text-black" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-black">24</div>
                <p className="text-xs text-green-600 flex items-center mt-1">
                  <Icon name="Plus" className="h-3 w-3 mr-1" />
                  +3 за неделю
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-vshell-accent">Конверсия</CardTitle>
                <Icon name="Target" className="h-4 w-4 text-black" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-black">12.5%</div>
                <p className="text-xs text-green-600 flex items-center mt-1">
                  <Icon name="TrendingUp" className="h-3 w-3 mr-1" />
                  +2.1% за месяц
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-0 shadow-sm bg-white">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-black">Прогресс до следующего уровня</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-vshell-accent">Серебряный партнер</span>
                  <span className="text-black font-medium">₽284,700 / ₽500,000</span>
                </div>
                <Progress value={57} className="h-2" />
                <p className="text-sm text-vshell-accent">
                  До золотого уровня осталось ₽215,300. Следующий уровень откроет максимальную комиссию 20%
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>



      {/* Requirements & Guarantees */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Requirements */}
            <div>
              <h2 className="text-3xl font-bold text-black mb-8 tracking-tight">
                Ты нам подходишь если:
              </h2>
              <div className="space-y-6">
                {[
                  'Ты умеешь снимать крутые видео и классно монтируешь',
                  'Ты чувствуешь себя максимально комфортно перед камерами',
                  'Ты креативный',
                  'Ты следишь за трендами'
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon name="Check" size={16} className="text-white" />
                    </div>
                    <p className="text-lg text-vshell-text leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Guarantees */}
            <div>
              <h2 className="text-3xl font-bold text-black mb-8 tracking-tight">
                Мы гарантируем:
              </h2>
              <div className="space-y-6">
                {[
                  'Доход до 500,000 рублей. Но границ нет, ты всегда можешь больше',
                  'Перспективы развития в нашей команде',
                  'Крутые подарки и классный продукт'
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon name="Star" size={16} className="text-white" />
                    </div>
                    <p className="text-lg text-vshell-text leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-12 py-4 text-xl font-medium">
              Хочу зарабатывать с VSHELL
            </Button>
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-xs">V</span>
                </div>
                <h3 className="text-xl font-bold">VSHELL</h3>
              </div>
              <p className="text-white/70 mb-4">
                Премиальная косметика Vshell и выгодная реферальная программа
              </p>
              <div className="flex space-x-4">
                <Icon name="Instagram" size={20} className="text-white/70 hover:text-white cursor-pointer" />
                <Icon name="Facebook" size={20} className="text-white/70 hover:text-white cursor-pointer" />
                <Icon name="Twitter" size={20} className="text-white/70 hover:text-white cursor-pointer" />
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Программа</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-white">Как начать</a></li>
                <li><a href="#" className="hover:text-white">Условия</a></li>
                <li><a href="#" className="hover:text-white">Выплаты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-white">FAQ</a></li>
                <li><a href="#" className="hover:text-white">Контакты</a></li>
                <li><a href="#" className="hover:text-white">Обучение</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-white/70">
                <p>support@vshell.com</p>
                <p>+7 (495) 123-45-67</p>
                <p>Москва, ул. Тверская, 1</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/50">
            <p>&copy; 2024 Vshell. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;