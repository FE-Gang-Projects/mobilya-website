import Link from 'next/link';
import {
  Container,
  Title,
  ProductSlider,
  ProductCardBig as Card,
  CategorySelector,
} from '../../components';
import Image from 'next/image';
import Slider from 'react-slick';
import { useState, useMemo, useEffect } from 'react';
import { Product, Category, Strapi, StrapiArray } from '../../types';
import axios from '../../axios';

// const ProductGrid = ({ category }: { category: { id: number; name: string; products: Product[] } }) => {
//   useEffect(() => {
//     (async () => {
//       const res: any = (await axios.get('/uruns')).data;
//       console.log(res);
//     })();
//   }, []);

//   if (category.products.length > 0) {
//     return (
//       <>
//         <Title text={category.name} />
//         <div className="products-container">
//           {category.products.slice(0, 8).map((product: Product) => (
//             <Card key={product.id} product={product} />
//           ))}
//           {category.products.length > 8 && <div className="see-more">Tümünü Gör</div>}
//         </div>
//       </>
//     );
//   } else {
//     return null;
//   }
// };

const Products = () => {
  // const cats = categories.map((cat) => ({
  //   ...cat,
  //   products: products.filter((product) => product.kategori === cat.name).slice(0, 9),
  // }));
  // const kampanya = {
  //   id: -1,
  //   name: 'Kampanyalı Ürünler',
  //   products: products.filter((product) => product.kampanya).slice(0, 8),
  // };
  return (
    <Container>
      <CategorySelector />
      {/* {kampanya.products.length > 0 && <ProductGrid category={kampanya} />}
      {cats.map((cat) => (
        <ProductGrid key={cat.name} category={cat} />
      ))} */}
    </Container>
  );
};

export default Products;
