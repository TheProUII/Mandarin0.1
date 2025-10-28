const ContactsPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Контакты</h1>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Наш адрес</h2>
          <p className="text-lg text-gray-700">г. Усть-Илимск, ул. Примерная, д. 1</p>
          <p className="text-lg text-gray-700">График работы: Пн-Пт, 9:00 - 18:00</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Свяжитесь с нами</h2>
          <p className="text-lg text-gray-700">Телефон: +7 (XXX) XXX-XX-XX</p>
          <p className="text-lg text-gray-700">Email: info@mandarin.ui</p>
        </div>
        <div>
          {/* Placeholder for map */}
          <div className="bg-gray-300 h-96 rounded-lg">
            <p className="text-center text-gray-500 pt-4">Здесь будет карта</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
