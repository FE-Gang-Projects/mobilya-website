import React, { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useLocalProducts } from '@helpers/localStorage';
import { translateChars } from '@helpers/helpers';
import { FavoriteCard } from '@components';
import { useOutsideAlerter } from '@helpers/hooks';

export default function SearchBar() {
  const [search, setSearch] = useState('');
  const products = useLocalProducts();

  const [show, setShow] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);
  useOutsideAlerter(() => setShow(false), divRef);

  const filteredProducts = useMemo(
    () => products.filter((product) => translateChars(product.ad).includes(translateChars(search))),
    [products, search]
  );

  const router = useRouter();
  const { kelime } = router.query;

  useEffect(() => {
    if (kelime && typeof kelime === 'string') {
      setSearch(kelime);
    }
  }, [kelime]);

  const active = useMemo(() => search.length > 0 && kelime !== search, [kelime, search]);

  const handleSearch = () => {
    if (active) {
      router.push(`/arama?kelime=${search}`);
    }
  };

  return (
    <div className="header-top-search-container" ref={divRef}>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onFocus={() => setShow(true)}
        onKeyPress={(e) => {
          if (e.key === 'Enter' && search.length > 0) {
            if (filteredProducts.length === 1) {
              router.push('/urunler/' + filteredProducts[0].slug);
            } else {
              handleSearch();
            }
          }
        }}
        type="text"
        placeholder="Site içi ürün arama"
        className={`${active ? 'active' : ''}`}
      />
      <div className="search-icon-container">
        <Image src="/icons/search.svg" width={21} height={20} alt="Arama İkonu" />
      </div>
      <button onClick={handleSearch} className={`${active ? 'active' : ''}`}>
        ARA
      </button>
      {search.length > 0 && filteredProducts.length > 0 && show && (
        <div className="search-results scroll">
          <div>
            {search.length > 0 &&
              filteredProducts.map((product) => (
                <FavoriteCard key={product.id} product={product} search />
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
