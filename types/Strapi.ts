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

export interface StrapiMedia {
  data:
    | {
        attributes: {
          url: string;
        };
        id: number;
      }[]
    | {
        attributes: {
          url: string;
        };
        id: number;
      }
    | null;
}
