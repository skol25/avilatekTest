interface ProductProps {
  imageSrc: string;
  title: string;
  rating: number;
  price: number;
  pawColor: string;
  pawCount: number;
  onBuyNowClick: () => void;
}
