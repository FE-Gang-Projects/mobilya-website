import React, { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function SearchBar() {
  const router = useRouter();
  const [search, setSearch] = useState('');
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
    <div className="header-top-search-container">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter' && search.length > 0) {
            handleSearch();
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
    </div>
  );
}
