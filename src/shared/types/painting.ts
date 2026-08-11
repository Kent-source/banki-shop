export interface IPainting {
  id: string;
  mainImage: string;
  label: string;
  painter: string;
  price: string;
  discountPrice: string;
  isSold: boolean;
  images: Array<string>;
}
