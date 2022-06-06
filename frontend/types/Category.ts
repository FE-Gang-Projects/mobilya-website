import { Strapi, StrapiArray, StrapiMedia, ProductFlat } from './';
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
  medya: string[];
  icon: string[];
  altKategoriler: number[];
  slug: string;
}
