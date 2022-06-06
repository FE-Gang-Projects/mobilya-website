export interface Slider {
  url: string;
  link: string;
}

export interface SliderResponse {
  data: {
    attributes: {
      links: {
        [key: string]: string;
      };
      media: {
        data: {
          attributes: {
            url: string;
          };
        }[];
      };
    };
  };
}
