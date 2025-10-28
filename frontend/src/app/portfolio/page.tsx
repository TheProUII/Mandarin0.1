const PortfolioPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Портфолио</h1>
      <div className="flex justify-center mb-8">
        {/* Filter buttons */}
        <button className="px-4 py-2 bg-orange-500 text-white rounded-md mx-2">Все</button>
        <button className="px-4 py-2 bg-gray-200 rounded-md mx-2">Полиграфия</button>
        <button className="px-4 py-2 bg-gray-200 rounded-md mx-2">Сувениры</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Placeholder images */}
        <div className="bg-white h-64 rounded-lg shadow-md"></div>
        <div className="bg-white h-64 rounded-lg shadow-md"></div>
        <div className="bg-white h-64 rounded-lg shadow-md"></div>
        <div className="bg-white h-64 rounded-lg shadow-md"></div>
      </div>
    </div>
  );
};

export default PortfolioPage;
