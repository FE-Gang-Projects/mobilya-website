import { headerBottomLinks, headerTopLinks } from './options';
import Link from 'next/link';
import SearchBar from './SearchBar';
import { useState, useEffect } from 'react';

const Hamburger = () => {
  const [hamburgerClick, setHamburgerClick] = useState(false);

  useEffect(() => {
    const body = document.querySelector('body');
    if (hamburgerClick) body?.classList.add('body-lock');
    else body?.classList.remove('body-lock');
  }, [hamburgerClick]);

  return (
    <>
      <div
        onClick={() => setHamburgerClick(!hamburgerClick)}
        className={`${
          hamburgerClick ? 'hamburger-click' : 'hamburger-not-click'
        } hamburger-menu-container`}>
        <span className="hamburger-first-line"></span>
        <span className="hamburger-second-line"></span>
        <span className="hamburger-third-line"></span>
      </div>
      <div
        className={`${
          hamburgerClick ? 'hamburger-options-open' : 'hamburger-options-close'
        } hamburger-options`}>
        <ul>
          <SearchBar />
          {headerTopLinks.map((option) => (
            <Link key={option.name} href={option.location}>
              {option.name}
            </Link>
          ))}
          {headerBottomLinks.map((option) => (
            <Link key={option.name} href={option.location}>
              {option.name}
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Hamburger;
