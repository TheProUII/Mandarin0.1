const ServicesPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Наши услуги</h1>

      {/* Business Printing */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Полиграфия для бизнеса</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Визитки</h3>
            <p>Односторонние/двусторонние, матовые/глянцевые, ламинация, скругление углов.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Листовки и Буклеты</h3>
            <p>Форматы A4, A5, Евро, различные типы сложения.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Брошюры и Каталоги</h3>
            <p>Скрепление на скрепку, термоклей, пружину.</p>
          </div>
        </div>
      </div>

      {/* Large Format Printing */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Широкоформатная печать</h2>
        {/* ... */}
      </div>

      {/* Souvenir Products */}
      <div>
        <h2 className="text-3xl font-semibold mb-6">Сувенирная продукция</h2>
        {/* ... */}
      </div>

    </div>
  );
};

export default ServicesPage;
