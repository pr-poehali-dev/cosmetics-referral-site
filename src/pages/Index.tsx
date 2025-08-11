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
              <a href="#catalog" className="text-vshell-text hover:text-black transition-colors font-medium">Каталог</a>
              <a href="#earnings" className="text-vshell-text hover:text-black transition-colors font-medium">Доходы</a>
              <a href="#materials" className="text-vshell-text hover:text-black transition-colors font-medium">Материалы</a>
            </nav>
            <Button className="bg-black hover:bg-gray-800 text-white font-medium px-6">
              Войти в кабинет
            </Button>
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
              <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-10 py-4 text-lg font-medium">
                Хочу зарабатывать с VSHELL
              </Button>
              <Button size="lg" variant="outline" className="border-black text-black hover:bg-black hover:text-white px-10 py-4 text-lg font-medium">
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
                <p className="text-vshell-accent">Делитесь персональной ссылкой и получайте до 15% с каждой продажи</p>
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

          {/* Multi-level Structure */}
          <div className="bg-vshell-gray rounded-lg p-8">
            <h3 className="text-2xl font-bold text-black mb-8 text-center tracking-tight">
              Структура вознаграждений
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { level: 'Ваши продажи', percent: '15%', desc: 'Максимум от продаж' },
                { level: 'От рефералов', percent: '5%', desc: 'От их продаж' },
                { level: 'Общий доход', percent: '20%', desc: 'Максимальный лимит' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white rounded-lg p-6 shadow-sm mb-4">
                    <div className="text-3xl font-bold text-black mb-2">{item.percent}</div>
                    <div className="text-lg text-black font-medium mb-2">{item.level}</div>
                  </div>
                  <p className="text-sm text-vshell-accent">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-10 py-4 text-lg font-medium">
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

      {/* Product Catalog */}
      <section id="catalog" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 text-center tracking-tight">
            Каталог продукции VSHELL
          </h2>
          <p className="text-lg text-vshell-accent mb-12 text-center max-w-2xl mx-auto">
            Эксклюзивные продукты с высокой маржинальностью для максимального дохода
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: '/img/c7019870-f285-4daf-a336-941f09fcc626.jpg',
                title: 'Сыворотка для лица с коллагеном',
                price: '₽8,900',
                commission: '₽1,335',
                category: 'Уход',
                article: '2248668873'
              },
              {
                image: '/img/abae8870-679d-4fa4-8f71-43989b847feb.jpg',
                title: 'Сыворотка для лица с арбузом',
                price: '₽15,600',
                commission: '₽2,340',
                category: 'Уход',
                article: '2223893584'
              },
              {
                image: '/img/49d848f5-84bc-4b04-93e0-6b38ee1bd540.jpg',
                title: 'Сыворотка для лица с козьим молоком',
                price: '₽23,400',
                commission: '₽3,510',
                category: 'Уход',
                article: '2058578662'
              }
            ].map((product, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow overflow-hidden bg-white">
                <div className="aspect-square overflow-hidden bg-vshell-gray">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Icon name="Heart" size={20} className="text-vshell-accent hover:text-black cursor-pointer" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-black mb-2">
                    {product.title}
                  </h3>
                  <p className="text-sm text-vshell-accent mb-4">арт: {product.article}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xl font-bold text-black">{product.price}</span>
                    <span className="text-black font-medium">+{product.commission}</span>
                  </div>
                  <Button className="w-full bg-black hover:bg-gray-800 text-white font-medium">
                    <Icon name="Share" size={16} className="mr-2" />
                    Поделиться ссылкой
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Materials for Partners */}
      <section id="materials" className="py-20 bg-vshell-gray">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 text-center tracking-tight">
            Материалы для партнеров
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: 'Image', title: 'Визуальные материалы', desc: 'Баннеры, карточки товаров' },
              { icon: 'Video', title: 'Видео-обзоры', desc: 'Готовые ролики о продуктах' },
              { icon: 'MessageSquare', title: 'Тексты для соцсетей', desc: 'Готовые посты и сторис' },
              { icon: 'BookOpen', title: 'Обучающие материалы', desc: 'Курсы по продажам' }
            ].map((item, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow text-center bg-white">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={item.icon as any} size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">
                    {item.title}
                  </h3>
                  <p className="text-vshell-accent text-sm mb-4">{item.desc}</p>
                  <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white font-medium">
                    Скачать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-10 py-4 text-lg font-medium">
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