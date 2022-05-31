import {
  Product,
  ProductFlat,
  Category,
  CategoryFlat,
  Media,
  MediaFlat,
  StrapiArray,
  StrapiMedia,
  StrapiMediaSingle,
} from '../types';
import { translateChars } from './helpers';

const categoryFlatter = (
  categories: StrapiArray<Category>,
  products?: ProductFlat[]
): CategoryFlat[] => {
  const temp = categories.data.map((category) => {
    return {
      name: category.attributes.name,
      id: category.id,
      products: products ? products.filter((item) => item.kategori === category.attributes.name) : [],
      medya: mediaFlatter(category.attributes.medya),
      icon: mediaFlatter(category.attributes.icon),
      altKategoriler: category.attributes.altKategoriler.data.map((item) => item.id),
      slug: translateChars(category.attributes.name),
    };
  });
  return temp;
};

const productFlatter = (products: StrapiArray<Product>): ProductFlat[] => {
  const temp = products.data.map((item) => {
    return {
      id: item.id,
      ad: item.attributes.ad,
      aciklama: item.attributes.aciklama,
      kampanya: item.attributes.kampanya,
      medya: mediaFlatter(item.attributes.medya),
      marka: item.attributes.marka.data?.attributes.ad || '',
      kategori: item.attributes.kategori.data.attributes.name,
      slug: translateChars(item.attributes.ad),
    };
  });
  return temp;
};

// const mediaFlatter = (media: StrapiMedia<Media>): MediaFlat[] => {
//   console.log(media);
//   if (!media.data) return [];
//   const temp = media.data.map((item) => {
//     return { ...item.attributes.formats };
//   });
//   return temp;
// };

const mediaFlatter = (media: StrapiMedia<Media> | StrapiMediaSingle<Media>): MediaFlat[] => {
  if (!media.data) return [];
  if (!Array.isArray(media.data)) {
    return [media.data.attributes.formats];
  }
  const temp = media.data.map((item) => {
    return { ...item.attributes.formats };
  });
  return temp;
};

export { categoryFlatter, mediaFlatter, productFlatter };
