import Link from 'next/link';
import Button from './Button';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-orange-500">
          Мандарин
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/services" className="text-gray-600 hover:text-orange-500">Услуги</Link>
          <Link href="/portfolio" className="text-gray-600 hover:text-orange-500">Портфолио</Link>
          <Link href="/prices" className="text-gray-600 hover:text-orange-500">Цены</Link>
          <Link href="/about" className="text-gray-600 hover:text-orange-500">О компании</Link>
          <Link href="/contacts" className="text-gray-600 hover:text-orange-500">Контакты</Link>
        </nav>
        <div className="hidden md:block">
          <Link href="/order">
            <Button>Заказать</Button>
          </Link>
        </div>
        <div className="md:hidden">
          {/* Mobile menu button will go here */}
        </div>
      </div>
    </header>
  );
};

export default Header;
