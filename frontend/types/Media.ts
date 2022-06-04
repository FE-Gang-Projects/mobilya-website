type mediaKey = 'thumbnail' | 'small' | 'medium' | 'large';

export interface Media {
  name: string;
  url: string;
  formats: {
    [key in mediaKey]?: {
      url: string;
      width: number;
      height: number;
    };
  };
}

export type MediaFlat = {
  [key in mediaKey]?: {
    url: string;
    width: number;
    height: number;
  };
};
