import { Strapi, Media } from './';
export default interface Category {
  navigasyondaGoster: boolean;
  name: string;
  medya: Strapi<Media>;
  altKategoriler: Strapi<Category>[];
}
