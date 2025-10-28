import Button from "@/components/Button";
import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-orange-500 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Типография "Мандарин" в Усть-Илимске</h1>
          <p className="text-lg md:text-xl mb-8">Более 11 лет опыта в печати. Гарантия качества и быстрые сроки.</p>
          <Link href="/order">
            <Button size="lg" variant="secondary">Рассчитать стоимость</Button>
          </Link>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Наши преимущества</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Опыт и надежность</h3>
              <p className="text-gray-600">Более 11 лет на рынке полиграфических услуг.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Высокое качество</h3>
              <p className="text-gray-600">Современное оборудование и строгий контроль.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Быстрые сроки</h3>
              <p className="text-gray-600">Оперативное выполнение заказов любой сложности.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Services Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Популярные услуги</h2>
          {/* Placeholder for services */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-4 rounded shadow">Визитки</div>
            <div className="bg-white p-4 rounded shadow">Листовки</div>
            <div className="bg-white p-4 rounded shadow">Баннеры</div>
            <div className="bg-white p-4 rounded shadow">Кружки</div>
          </div>
        </div>
      </section>

      {/* News/Promotions Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Новости и акции</h2>
          {/* Placeholder for news */}
          <p>Здесь будут отображаться последние новости и специальные предложения.</p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Отзывы клиентов</h2>
          {/* Placeholder for testimonials */}
          <p>"Отличная типография! Все сделали быстро и качественно." - Довольный клиент</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
