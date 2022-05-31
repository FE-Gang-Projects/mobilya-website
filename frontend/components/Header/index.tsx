import Image from 'next/image';
import Link from 'next/link';
import SearchBar from './SearchBar';

const Header = () => {
  const headerTopLinks = [
    { name: 'Tüm Ürünler', location: '/urunler' },
    { name: 'Hakkımızda', location: '/hakkimizda' },
    { name: 'İletişim', location: '/' },
  ];
  const headerBottomLinks = [
    { name: 'Düğün Paketi', location: '/' },
    { name: 'Düğün Paketi', location: '/' },
    { name: 'Oturma Grubu', location: '/' },
    { name: 'Yemek Odası', location: '/' },
    { name: 'Yatak Odası', location: '/' },
    { name: 'Genç Odası', location: '/' },
    { name: 'Genç Odası', location: '/' },
  ];
  return (
    <header className="header">
      <div className="header-top">
        <Link href="/">
          <Image src="/logos/logo.jpg" width={255.5} height={36} alt="Çalışkan Mobilya Logo" />
        </Link>
        <div className="header-top-options">
          {headerTopLinks.map((option) => (
            <Link key={option.name} href={option.location}>
              {option.name}
            </Link>
          ))}
        </div>
        <div className="header-top-utils">
          <SearchBar />
          <div className="header-top-favorites-container">
            <Image src="/icons/favorites.svg" width={21} height={20} alt="Favori İkonu" />
            <span>Favorilerim</span>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        {headerBottomLinks.map((option, i) => (
          <Link key={i} href={option.location}>
            {option.name}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
