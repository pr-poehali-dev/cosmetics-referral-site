import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-light-gold to-cream">
      {/* Header */}
      <header className="border-b border-gold/20 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Diamond" className="text-gold" size={32} />
              <h1 className="text-2xl font-display font-bold text-dark-brown">Vshell</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#program" className="text-dark-brown hover:text-gold transition-colors">Программа</a>
              <a href="#catalog" className="text-dark-brown hover:text-gold transition-colors">Каталог</a>
              <a href="#earnings" className="text-dark-brown hover:text-gold transition-colors">Доходы</a>
              <a href="#materials" className="text-dark-brown hover:text-gold transition-colors">Материалы</a>
            </nav>
            <Button className="bg-gold hover:bg-gold/90 text-white font-medium">
              Войти в кабинет
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-gold/10 text-gold border-gold/20" variant="outline">
              🌟 Премиальная реферальная программа
            </Badge>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-dark-brown mb-8 leading-tight">
              Зарабатывайте с
              <span className="text-gold"> Vshell</span>
            </h1>
            <p className="text-xl text-dark-brown/70 mb-12 max-w-2xl mx-auto">
              Многоуровневая система вознаграждений. Получайте до 30% от продаж и дополнительно от доходов ваших рефералов.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gold hover:bg-gold/90 text-white px-8 py-4 text-lg">
                <Icon name="Star" size={20} className="mr-2" />
                Начать зарабатывать
              </Button>
              <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold hover:text-white px-8 py-4 text-lg">
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="program" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-dark-brown mb-4">
              Как работает реферальная программа
            </h2>
            <p className="text-lg text-dark-brown/70 max-w-2xl mx-auto">
              Простая и прозрачная система многоуровневых вознаграждений
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center border-gold/20 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="UserPlus" size={32} className="text-gold" />
                </div>
                <CardTitle className="text-xl font-display text-dark-brown">Привлекайте клиентов</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-dark-brown/70">Делитесь персональной ссылкой и получайте 15-30% с каждой продажи</p>
              </CardContent>
            </Card>

            <Card className="text-center border-gold/20 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={32} className="text-gold" />
                </div>
                <CardTitle className="text-xl font-display text-dark-brown">Приглашайте партнеров</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-dark-brown/70">Создавайте команду и получайте 5-15% с продаж ваших рефералов</p>
              </CardContent>
            </Card>

            <Card className="text-center border-gold/20 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="TrendingUp" size={32} className="text-gold" />
                </div>
                <CardTitle className="text-xl font-display text-dark-brown">Масштабируйте доходы</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-dark-brown/70">Развивайте сеть до 5 уровней и получайте пассивный доход</p>
              </CardContent>
            </Card>
          </div>

          {/* Multi-level Structure */}
          <div className="bg-gradient-to-r from-gold/5 to-cream/30 rounded-2xl p-8">
            <h3 className="text-2xl font-display font-bold text-dark-brown mb-8 text-center">
              Структура многоуровневых вознаграждений
            </h3>
            <div className="grid md:grid-cols-5 gap-4">
              {[
                { level: '1 уровень', percent: '30%', desc: 'Ваши продажи' },
                { level: '2 уровень', percent: '15%', desc: 'От рефералов' },
                { level: '3 уровень', percent: '10%', desc: 'От команды' },
                { level: '4 уровень', percent: '7%', desc: 'От структуры' },
                { level: '5 уровень', percent: '5%', desc: 'От сети' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white rounded-xl p-6 border border-gold/20 mb-4">
                    <div className="w-12 h-12 bg-gold text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                      {index + 1}
                    </div>
                    <div className="text-2xl font-bold text-gold mb-1">{item.percent}</div>
                    <div className="text-sm text-dark-brown font-medium">{item.level}</div>
                  </div>
                  <p className="text-sm text-dark-brown/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Earnings Dashboard */}
      <section id="earnings" className="py-20 bg-gradient-to-br from-cream to-light-gold">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-dark-brown mb-12 text-center">
            Отслеживание доходов
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border-gold/20">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-dark-brown/70">Общий доход</CardTitle>
                <Icon name="DollarSign" className="h-4 w-4 text-gold" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-dark-brown">€2,847</div>
                <p className="text-xs text-emerald-600 flex items-center mt-1">
                  <Icon name="TrendingUp" className="h-3 w-3 mr-1" />
                  +15.3% за месяц
                </p>
              </CardContent>
            </Card>

            <Card className="border-gold/20">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-dark-brown/70">Активных рефералов</CardTitle>
                <Icon name="Users" className="h-4 w-4 text-gold" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-dark-brown">24</div>
                <p className="text-xs text-emerald-600 flex items-center mt-1">
                  <Icon name="Plus" className="h-3 w-3 mr-1" />
                  +3 за неделю
                </p>
              </CardContent>
            </Card>

            <Card className="border-gold/20">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-dark-brown/70">Конверсия</CardTitle>
                <Icon name="Target" className="h-4 w-4 text-gold" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-dark-brown">12.5%</div>
                <p className="text-xs text-emerald-600 flex items-center mt-1">
                  <Icon name="TrendingUp" className="h-3 w-3 mr-1" />
                  +2.1% за месяц
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-gold/20">
            <CardHeader>
              <CardTitle className="text-xl font-display text-dark-brown">Прогресс до следующего уровня</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-dark-brown/70">Серебряный партнер</span>
                  <span className="text-dark-brown font-medium">€2,847 / €5,000</span>
                </div>
                <Progress value={57} className="h-3" />
                <p className="text-sm text-dark-brown/70">
                  До золотого уровня осталось €2,153. Следующий уровень откроет комиссию 35%
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Product Catalog */}
      <section id="catalog" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-dark-brown mb-4 text-center">
            Каталог премиум косметики
          </h2>
          <p className="text-lg text-dark-brown/70 mb-12 text-center max-w-2xl mx-auto">
            Эксклюзивные продукты с высокой маржинальностью для максимального дохода
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: '/img/c7019870-f285-4daf-a336-941f09fcc626.jpg',
                title: 'Luxury Gold Lipstick',
                price: '€89',
                commission: '€26.70',
                category: 'Макияж'
              },
              {
                image: '/img/abae8870-679d-4fa4-8f71-43989b847feb.jpg',
                title: 'Premium Serum',
                price: '€156',
                commission: '€46.80',
                category: 'Уход'
              },
              {
                image: '/img/49d848f5-84bc-4b04-93e0-6b38ee1bd540.jpg',
                title: 'Elite Makeup Palette',
                price: '€234',
                commission: '€70.20',
                category: 'Палетки'
              }
            ].map((product, index) => (
              <Card key={index} className="border-gold/20 hover:shadow-lg transition-shadow overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge className="mb-2 bg-gold/10 text-gold border-gold/20" variant="outline">
                    {product.category}
                  </Badge>
                  <h3 className="text-lg font-display font-semibold text-dark-brown mb-2">
                    {product.title}
                  </h3>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-dark-brown">{product.price}</span>
                    <span className="text-gold font-semibold">+{product.commission}</span>
                  </div>
                  <Button className="w-full bg-gold hover:bg-gold/90 text-white">
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
      <section id="materials" className="py-20 bg-gradient-to-br from-cream to-light-gold">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-dark-brown mb-12 text-center">
            Материалы для партнеров
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'Image', title: 'Визуальные материалы', desc: 'Баннеры, карточки товаров' },
              { icon: 'Video', title: 'Видео-обзоры', desc: 'Готовые ролики о продуктах' },
              { icon: 'MessageSquare', title: 'Тексты для соцсетей', desc: 'Готовые посты и сторис' },
              { icon: 'BookOpen', title: 'Обучающие материалы', desc: 'Курсы по продажам' }
            ].map((item, index) => (
              <Card key={index} className="border-gold/20 hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={item.icon as any} size={32} className="text-gold" />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-dark-brown mb-2">
                    {item.title}
                  </h3>
                  <p className="text-dark-brown/70 text-sm mb-4">{item.desc}</p>
                  <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-white">
                    Скачать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-brown text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Icon name="Diamond" className="text-gold" size={24} />
                <h3 className="text-xl font-display font-bold">Vshell</h3>
              </div>
              <p className="text-white/70 mb-4">
                Премиальная косметика Vshell и выгодная реферальная программа
              </p>
              <div className="flex space-x-4">
                <Icon name="Instagram" size={20} className="text-white/70 hover:text-gold cursor-pointer" />
                <Icon name="Facebook" size={20} className="text-white/70 hover:text-gold cursor-pointer" />
                <Icon name="Twitter" size={20} className="text-white/70 hover:text-gold cursor-pointer" />
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Программа</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-gold">Как начать</a></li>
                <li><a href="#" className="hover:text-gold">Условия</a></li>
                <li><a href="#" className="hover:text-gold">Выплаты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-gold">FAQ</a></li>
                <li><a href="#" className="hover:text-gold">Контакты</a></li>
                <li><a href="#" className="hover:text-gold">Обучение</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
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