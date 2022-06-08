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
          width: number;
          height: number;
        };
        id: number;
      }[]
    | {
        attributes: {
          url: string;
          width: number;
          height: number;
        };
        id: number;
      }
    | null;
}

export interface Media {
  url: string;
  width: number;
  height: number;
}
