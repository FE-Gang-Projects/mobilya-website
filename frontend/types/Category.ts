import { Strapi, StrapiArray, StrapiMedia, Media, MediaFlat, ProductFlat, StrapiMediaSingle } from './';
export interface Category {
  name: string;
  medya: StrapiMediaSingle<Media>;
  icon: StrapiMediaSingle<Media>;
  altKategoriler: { data: { id: number }[] };
}

export interface CategoryFlat {
  id: number;
  products: ProductFlat[];
  name: string;
  medya: MediaFlat[];
  icon: MediaFlat[];
  altKategoriler: number[];
  slug: string;
}
