const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-orange-500 mb-4">Мандарин</h3>
            <p className="text-gray-400">Современная типография в Усть-Илимске. Качество, скорость и отличный сервис.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li><a href="/services" className="hover:text-orange-500">Услуги</a></li>
              <li><a href="/portfolio" className="hover:text-orange-500">Портфолио</a></li>
              <li><a href="/about" className="hover:text-orange-500">О компании</a></li>
              <li><a href="/contacts" className="hover:text-orange-500">Контакты</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <p className="text-gray-400">г. Усть-Илимск, ул. Примерная, 1</p>
            <p className="text-gray-400">Телефон: +7 (XXX) XXX-XX-XX</p>
            <p className="text-gray-400">Email: info@mandarin.ui</p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Типография "Мандарин". Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
