import { Product, ProductFlat, Category, CategoryFlat, StrapiArray, StrapiMedia } from '../types';
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
      kisaAciklama: item.attributes.kisaAciklama || '',
      kategori: item.attributes.kategori.data.attributes.name,
      slug: translateChars(item.attributes.ad),
      ozellikler: item.attributes.ozellikler || {},
    };
  });
  return temp;
};

const mediaFlatter = (media: StrapiMedia): string[] => {
  if (!media.data) return [];
  if (!Array.isArray(media.data)) {
    return [media.data.attributes.url];
  }
  const temp = media.data.map((item) => {
    return item.attributes.url;
  });
  return temp;
};

export { categoryFlatter, mediaFlatter, productFlatter };
