export interface Strapi<T> {
  data: {
    attributes: T;
    id: number;
  };
}

export interface StrapiMedia<T> {
  data:
    | {
        attributes: T;
        id: number;
      }[]
    | null;
}

export interface StrapiArray<T> {
  data: {
    attributes: T;
    id: number;
  }[];
}
