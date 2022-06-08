import { Strapi, StrapiArray, StrapiMedia, ProductFlat, Media } from './';
export interface Category {
  name: string;
  medya: StrapiMedia;
  icon: StrapiMedia;
  altKategoriler: { data: { id: number }[] };
}

export interface CategoryFlat {
  id: number;
  products: ProductFlat[];
  name: string;
  medya: Media[];
  altKategoriler: number[];
  slug: string;
}
