const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">О компании "Мандарин"</h1>
        <p className="text-lg text-gray-700 mb-6">
          Мы — современная типография, расположенная в сердце Усть-Илимска. Наша миссия — предоставлять
          высококачественные полиграфические услуги как для корпоративных клиентов, так и для частных лиц.
        </p>
        <h2 className="text-3xl font-semibold mt-12 mb-4">Наше оборудование</h2>
        <p className="text-gray-700">
          Мы используем только современное оборудование от ведущих мировых производителей, что позволяет
          нам гарантировать яркие цвета, четкую печать и долговечность продукции.
        </p>
        <h2 className="text-3xl font-semibold mt-12 mb-4">Наша команда</h2>
        <p className="text-gray-700">
          Наша команда — это опытные профессионалы, которые любят свое дело и готовы помочь вам
          реализовать любую идею.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
