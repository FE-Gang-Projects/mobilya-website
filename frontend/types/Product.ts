import { Strapi, StrapiArray, Media, Category, Brand } from './';
export default interface Product {
  ad: string;
  aciklama: string;
  medya: StrapiArray<Media>;
  kategori: Strapi<Category>;
  kampanya: boolean;
  marka: Strapi<Brand>;
}
