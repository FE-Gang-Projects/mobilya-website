import Image from 'next/image';
import Link from 'next/link';
import SearchBar from './SearchBar';
import Favorites from './Favorites';

const Header = () => {
  const headerTopLinks = [
    { name: 'Tüm Ürünler', location: '/urunler' },
    { name: 'Hakkımızda', location: '/hakkimizda' },
    { name: 'İletişim', location: '/iletisim' },
  ];
  const headerBottomLinks = [
    { name: 'Koltuk Takımı', location: '/kategoriler/koltuk-takimi' },
    { name: 'Yatak Odası', location: '/kategoriler/yatak-odasi' },
    { name: 'Beyaz Eşya', location: '/kategoriler/beyaz-esya' },
    { name: 'Televizyon', location: '/kategoriler/koltuk-takimi' },
    { name: 'Genç Odası', location: '/kategoriler/genc-odasi' },
    { name: 'Yemek Odası', location: '/kategoriler/yemek-odasi' },
    { name: 'Mutfak Masası', location: '/kategoriler/mutfak-masasi' },
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
          <Favorites />
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
