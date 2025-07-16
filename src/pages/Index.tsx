import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Icon name="Car" className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">CarShare</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
                Войти
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Регистрация
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-600 border-blue-200">
                  Каршеринг нового поколения
                </Badge>
                <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                  Автомобиль
                  <span className="block text-blue-600">когда нужно</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Найдите автомобиль рядом с вами за секунды. Бронируйте через приложение, 
                  платите только за время использования.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                  <Icon name="MapPin" className="mr-2 h-5 w-5" />
                  Найти авто
                </Button>
                <Button size="lg" variant="outline" className="border-gray-300 text-gray-700">
                  <Icon name="Play" className="mr-2 h-5 w-5" />
                  Как работает
                </Button>
              </div>
              
              <div className="flex items-center space-x-8 text-sm text-gray-500">
                <div className="flex items-center">
                  <Icon name="Clock" className="mr-2 h-4 w-4" />
                  <span>24/7 доступно</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Shield" className="mr-2 h-4 w-4" />
                  <span>Полная страховка</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Zap" className="mr-2 h-4 w-4" />
                  <span>Быстрая аренда</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="/img/0993bb5d-3466-4eec-be06-b602a030a8aa.jpg" 
                  alt="Современный автомобиль каршеринга" 
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Найдите автомобиль рядом с вами
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Интерактивная карта покажет доступные автомобили в режиме реального времени
            </p>
          </div>
          
          <Card className="overflow-hidden shadow-lg">
            <CardContent className="p-0">
              <div className="relative h-96 bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Icon name="Map" className="h-16 w-16 text-blue-600 mx-auto" />
                  <h3 className="text-xl font-semibold text-gray-900">Интерактивная карта</h3>
                  <p className="text-gray-600 max-w-md">
                    Просматривайте доступные автомобили, их тип и стоимость аренды в режиме реального времени
                  </p>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Открыть карту
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Прозрачные тарифы
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Платите только за время использования. Никаких скрытых платежей
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <Icon name="Clock" className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Поминутно</CardTitle>
                <CardDescription>Идеально для коротких поездок</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  8₽<span className="text-lg text-gray-600">/мин</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">+ 3₽/км</p>
                <Button variant="outline" className="w-full">
                  Выбрать
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300 border-blue-200 bg-blue-50">
              <CardHeader className="text-center">
                <Icon name="Calendar" className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Суточно</CardTitle>
                <CardDescription>Для долгих поездок</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  1200₽<span className="text-lg text-gray-600">/сутки</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">Без ограничений по км</p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Выбрать
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <Icon name="Zap" className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Подписка</CardTitle>
                <CardDescription>Для частого использования</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  2990₽<span className="text-lg text-gray-600">/мес</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">Безлимитное использование</p>
                <Button variant="outline" className="w-full">
                  Выбрать
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Современные технологии для максимального удобства
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Icon name="Smartphone" className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Мобильное приложение</h3>
              <p className="text-gray-600">Управляйте арендой через удобное приложение</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Icon name="CreditCard" className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Безопасные платежи</h3>
              <p className="text-gray-600">Автоматическое списание с карты</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Icon name="Shield" className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Полная страховка</h3>
              <p className="text-gray-600">Защита на все случаи жизни</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Icon name="Headphones" className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Поддержка 24/7</h3>
              <p className="text-gray-600">Всегда готовы помочь</p>
            </div>
          </div>
        </div>
      </section>

      {/* App Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-green-100 text-green-600 border-green-200">
                  Скачайте приложение
                </Badge>
                <h2 className="text-3xl font-bold text-gray-900">
                  Управляйте арендой
                  <span className="block text-blue-600">из любой точки</span>
                </h2>
                <p className="text-lg text-gray-600">
                  Находите автомобили, бронируйте, открывайте и завершайте аренду — 
                  всё в одном приложении.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">Поиск авто на карте в реальном времени</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Key" className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">Открытие автомобиля через телефон</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CreditCard" className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">Автоматическая оплата по окончании</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MessageCircle" className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">Мгновенная поддержка в чате</span>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <Button className="bg-black hover:bg-gray-800 text-white px-6">
                  <Icon name="Apple" className="mr-2 h-5 w-5" />
                  App Store
                </Button>
                <Button className="bg-green-600 hover:bg-green-700 text-white px-6">
                  <Icon name="Smartphone" className="mr-2 h-5 w-5" />
                  Google Play
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-indigo-200 rounded-3xl p-8 text-center">
                <Icon name="Smartphone" className="h-32 w-32 text-blue-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Мобильное приложение</h3>
                <p className="text-gray-600">Скоро в App Store и Google Play</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Готовы начать?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Зарегистрируйтесь и получите 30 минут бесплатной аренды
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input 
              placeholder="Ваш email" 
              className="bg-white border-0 text-gray-900 placeholder-gray-500"
            />
            <Button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold">
              Начать
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Car" className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold">CarShare</span>
              </div>
              <p className="text-gray-400">
                Современный каршеринг для удобных поездок по городу
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Сервис</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Как работает</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Тарифы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Автопарк</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Города</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Поддержка</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Правила</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Условия</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-gray-400">
                <p>+7 (495) 123-45-67</p>
                <p>support@carshare.ru</p>
                <div className="flex space-x-4 mt-4">
                  <Icon name="Facebook" className="h-5 w-5 hover:text-white cursor-pointer" />
                  <Icon name="Twitter" className="h-5 w-5 hover:text-white cursor-pointer" />
                  <Icon name="Instagram" className="h-5 w-5 hover:text-white cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CarShare. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;