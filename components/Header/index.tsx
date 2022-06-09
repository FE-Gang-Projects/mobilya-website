import Image from 'next/image';
import Link from 'next/link';
import SearchBar from './SearchBar';
import Favorites from './Favorites';
import Hamburger from './Hamburger';
import { headerBottomLinks, headerTopLinks } from './options';
import logo from '../../public/logos/logo.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="header-top">
        <Link href="/" passHref>
          <a>
            <Image src={logo} width={150} height={55} alt="Çalışkan Mobilya Logo" />
          </a>
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
          <Hamburger />
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
