'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Image, { StaticImageData } from 'next/image';
import ScrollHeader from './ScrollHeader';

interface NavItem {
  name: string;
  href: string;
  subItems?: {
    name: string;
    href: string;
  }[];
}

interface CustomNavbarProps {
  logo: StaticImageData;
}

const CustomNavbar: React.FC<CustomNavbarProps> = () => {
  const SCROLL_HEADER_HEIGHT = 60;
  const NAVBAR_HEIGHT = 80;

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };

    // Set initial value
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 40);

      if (currentScrollY > lastScrollY && currentScrollY > 40) {
        setHeaderVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setHeaderVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const closeMobileMenu = () => {
    setIsOpen(false);
    setMobileDropdown(null);
  };

  const toggleMobileDropdown = (itemName: string) => {
    setMobileDropdown(mobileDropdown === itemName ? null : itemName);
  };

  const navItems: NavItem[] = [
    {
      name: 'Главная',
      href: '/',
    },
    {
      name: 'Об обществе',
      href: '/pages/view/alias/1_zhamiyat_xakida',
      subItems: [
        { name: 'Предмет и цели', href: '/pages/view/alias/predmeti_va_ma%D2%9Bsadlari' },
        { name: 'Деятельность общество', href: '/pages/view/alias/faoliyati_xakida' },
        { name: 'Структура', href: '/pages/view/alias/tuzilma' },
        { name: 'Администрация', href: '/pages/view/alias/raxbariyat' },
        { name: 'Стратегия развитие', href: '/pages/view/alias/rivozhlantirish_strategiyasi_' },
        { name: 'Структурные сооружения', href: '/pages/view/alias/tarkibkij_tuzilmalar' },
        { name: 'Статистические данные', href: '/pages/view/alias/statistik_malumotlar' },
        { name: 'Вакансии', href: '/pages/view/alias/b%3F%3Fsh_ish_%3F%3Frinlari' },
        { name: 'Органы управление', href: '/pages/view/alias/bosh%D2%9Baruv_organlari' },
        { name: 'Проекты', href: '/pages/view/alias/lojixa' },
      ],
    },
    {
      name: 'Наши продукты',
      href: '/products',
    },
    {
      name: 'Пресс-центр',
      href: '/press-center',
      subItems: [
        { name: 'Новости общество', href: '/news/type/id/1' },
        { name: 'Объявление общество', href: '/news/type/id/2' },
        { name: 'Мероприятие', href: '/news/type/id/3' },
        { name: 'Пресс служба', href: '/news/type/id/4' },
        { name: 'Архив', href: '/news/archive' },
      ],
    },
    {
      name: 'Корпоративное управление',
      href: '/corporate',
      subItems: [
        { name: 'Существенные факты', href: '/docs/type/id/5' },
        { name: 'Квартальные отчеты', href: '/docs/type/id/6' },
        { name: 'Годовые отчеты', href: '/docs/type/id/7' },
        { name: 'Экономические показатели', href: '/docs/type/id/8' },
        { name: 'Дивиденды', href: '/docs/type/id/9' },
        { name: 'Аудит', href: '/docs/type/id/10' },
        { name: 'Бизнес план', href: '/docs/type/id/11' },
        { name: 'Аффилированные лица', href: '/docs/type/id/12' },
        { name: 'Устав', href: '/docs/type/id/13' },
        { name: 'Проспект эмиссия', href: '/docs/type/id/14' },
        { name: 'Положение общество', href: '/docs/type/id/15' },
        { name: 'Обявление', href: '/docs/type/id/16' },
        { name: 'Члены наблюдательного совет', href: '/docs/type/id/17' },
        { name: 'Покупка акций', href: '/docs/type/id/18' },
        { name: 'Ценные бумаги', href: '/docs/type/id/19' },
        { name: 'Балансы', href: '/docs/type/id/22' },
      ],
    },
    {
      name: 'Медиа',
      href: '/media',
      subItems: [
        { name: 'Видео', href: '/video/index' },
        { name: 'Фотогалерея', href: '/photo/index' },
        { name: 'Публикации', href: '/publications' },
        { name: 'Интервью', href: '/interviews' },
      ]
    },
  ];

  return (
    <>
      {/* Scroll Header */}
      <div
        className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
          headerVisible ? 'top-0' : '-top-full'
        }`}
        style={{ height: `${SCROLL_HEADER_HEIGHT}px` }}
      >
        <ScrollHeader />
      </div>

      {/* Main Navbar */}
      <header
        className={`fixed w-full z-40 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md py-2' : 'bg-white py-8'
        }`}
        style={{ top: headerVisible ? `${SCROLL_HEADER_HEIGHT}px` : '0px' }}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo - shown on all sizes */}
           <Link href="/" className="flex items-center">
            <Image
                src="/logo.png"
                alt="Logo"
                width={50}
                height={50}
                className="h-10 object-contain"
            />
            <span className="text-xl font-semibold text-black ml-0 pl-0">UZQEQ</span>
            </Link>


            {/* Mobile Navigation - only shown on mobile */}
            {isMobile && (
              <Sheet>
                <SheetTrigger className="lg:hidden">
                  <FaBars className="h-6 w-6 text-gray-800" />
                </SheetTrigger>
                <SheetContent side="left" className="w-full sm:w-[400px] bg-white">
                  <div className="flex justify-between items-center border-b pb-4 mb-4">
                    <Image
                      src='/logo.png'
                      alt="Logo"
                      width={120}
                      height={40}
                      className="h-10 object-contain"
                    />
                    <SheetTrigger>
                      <FaTimes className="h-6 w-6 text-gray-800" />
                    </SheetTrigger>
                  </div>
                  
                  <nav className="flex flex-col space-y-2">
                    {navItems.map((item) => (
                      <div key={item.name} className="border-b border-gray-100 pb-2">
                        {item.subItems ? (
                          <>
                            <button
                              className="flex items-center justify-between w-full py-3 text-left text-gray-800 font-medium"
                              onClick={() => toggleMobileDropdown(item.name)}
                            >
                              <span>{item.name}</span>
                              {mobileDropdown === item.name ? (
                                <FaChevronUp className="h-4 w-4" />
                              ) : (
                                <FaChevronDown className="h-4 w-4" />
                              )}
                            </button>
                            <div
                              className={`pl-4 overflow-hidden transition-all duration-300 ${
                                mobileDropdown === item.name ? 'max-h-screen' : 'max-h-0'
                              }`}
                            >
                              {item.subItems.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="block py-3 text-gray-600 hover:text-primary transition-colors"
                                  onClick={closeMobileMenu}
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          </>
                        ) : (
                          <Link
                            href={item.href}
                            className="block py-3 text-gray-800 font-medium hover:text-primary transition-colors"
                            onClick={closeMobileMenu}
                          >
                            {item.name}
                          </Link>
                        )}
                      </div>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            )}

            {/* Desktop Navigation - only shown on desktop */}
            {!isMobile && (
              <NavigationMenu>
                <NavigationMenuList className="space-x-1">
                  {navItems.map((item) => (
                    <NavigationMenuItem key={item.name}>
                      {item.subItems ? (
                        <div
                          className="relative group"
                          onMouseEnter={() => setActiveDropdown(item.name)}
                          onMouseLeave={() => setActiveDropdown(null)}
                        >
                          <NavigationMenuLink
                            className={`${navigationMenuTriggerStyle()} flex items-center text-gray-800 hover:text-primary`}
                          >
                            {item.name}
                            <FaChevronDown className="ml-1 h-3 w-3 transition-transform transform group-hover:rotate-180" />
                          </NavigationMenuLink>
                          <div
                            className={`absolute left-0 mt-1 w-56 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-100 transition-all duration-300 ${
                              activeDropdown === item.name
                                ? 'opacity-100 visible translate-y-0'
                                : 'opacity-0 invisible -translate-y-2'
                            }`}
                          >
                            {item.subItems.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                legacyBehavior
                                passHref
                              >
                                <NavigationMenuLink className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary">
                                  {subItem.name}
                                </NavigationMenuLink>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link href={item.href} legacyBehavior passHref>
                          <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-gray-800 hover:text-primary`}>
                            {item.name}
                          </NavigationMenuLink>
                        </Link>
                      )}
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            )}
          </div>
        </div>
      </header>

      {/* Spacer below header and navbar */}
      <div style={{ height: `${SCROLL_HEADER_HEIGHT + NAVBAR_HEIGHT}px` }}></div>
    </>
  );
};

export default CustomNavbar;