import { Strapi, StrapiArray, StrapiMedia, Media, MediaFlat, ProductFlat } from './';
export interface Category {
  navigasyondaGoster: boolean;
  name: string;
  medya: StrapiMedia<Media>;
  altKategoriler: Strapi<Category>[];
}

export interface CategoryFlat {
  id: number;
  products: ProductFlat[];
  navigasyondaGoster: boolean;
  name: string;
  medya: MediaFlat[];
  altKategoriler?: number[];
  slug: string;
}
