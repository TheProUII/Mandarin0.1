const PricesPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Прайс-лист</h1>
      <p className="text-center text-lg text-gray-700">
        Наш прайс-лист в данный момент находится в разработке. Пожалуйста, воспользуйтесь формой
        <a href="/order" className="text-orange-500 hover:underline"> запроса расчета</a> для уточнения стоимости.
      </p>
    </div>
  );
};

export default PricesPage;
