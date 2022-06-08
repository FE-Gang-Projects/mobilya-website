import {
  Product,
  ProductFlat,
  Category,
  CategoryFlat,
  StrapiArray,
  StrapiMedia,
  SliderResponse,
  Slider,
  Media,
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
      marka: item.attributes.marka?.data?.attributes.ad || '',
      kisaAciklama: item.attributes.kisaAciklama || '',
      kategori: item.attributes.kategori.data.attributes.name,
      slug: translateChars(item.attributes.ad),
      ozellikler: item.attributes.ozellikler || {},
    };
  });
  return temp;
};

const mediaFlatter = (media: StrapiMedia): Media[] => {
  if (!media.data) return [];
  if (!Array.isArray(media.data)) {
    return [
      {
        url: media.data.attributes.url,
        width: media.data.attributes.width,
        height: media.data.attributes.height,
      },
    ];
  }
  const temp = media.data.map((item) => {
    return { url: item.attributes.url, width: item.attributes.width, height: item.attributes.height };
  });
  return temp;
};

const sliderFlatter = (res: SliderResponse): Slider[] => {
  if (res?.data?.attributes?.media?.data?.length === 0) return [];
  const temp = res.data.attributes.media.data.map((item, index) => {
    return {
      url: item.attributes.url,
      link: res?.data?.attributes?.links[index.toString()]
        ? res.data.attributes.links[index.toString()]
        : '',
    };
  });
  return temp;
};

export { categoryFlatter, mediaFlatter, productFlatter, sliderFlatter };
