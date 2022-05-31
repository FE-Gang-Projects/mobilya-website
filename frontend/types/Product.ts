import { Strapi, StrapiArray, StrapiMedia, Media, MediaFlat, Category, Brand } from './';
export interface Product {
  ad: string;
  aciklama: string;
  medya: StrapiMedia<Media>;
  kategori: Strapi<Category>;
  kampanya: boolean;
  marka: Strapi<Brand>;
}

export interface ProductFlat {
  ad: string;
  aciklama: string;
  medya: MediaFlat[];
  kategori: string;
  kampanya: boolean;
  marka: string;
  id: number;
  slug: string;
}
