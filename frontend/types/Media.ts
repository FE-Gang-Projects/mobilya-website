export default interface Media {
  name: string;
  formats: {
    [key: string]: {
      url: string;
      width: number;
      height: number;
    };
  };
}
