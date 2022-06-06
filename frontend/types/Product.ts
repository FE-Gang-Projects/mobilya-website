import { Strapi, StrapiMedia, Category, Brand } from './';
export interface Product {
  ad: string;
  aciklama: string;
  medya: StrapiMedia;
  kategori: Strapi<Category>;
  kampanya: boolean;
  marka: Strapi<Brand>;
  kisaAciklama: string;
  ozellikler: { [key: string]: string };
}

export interface ProductFlat {
  ad: string;
  aciklama: string;
  medya: string[];
  kategori: string;
  kampanya: boolean;
  marka: string;
  id: number;
  slug: string;
  kisaAciklama: string;
  ozellikler: { [key: string]: string };
}
