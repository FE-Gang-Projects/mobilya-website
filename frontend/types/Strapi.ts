export interface Strapi<T> {
  data: {
    attributes: T;
    id: number;
  };
}

export interface StrapiArray<T> {
  data: {
    attributes: T;
    id: number;
  }[];
}
