export enum SelectedPage {
  Home = "home",
  Headphones = "headphones",
  Speakers = "speakers",
  Earphones = "earphones",
}

export interface ImageSet {
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface Product {
  id: number;
  slug: string;
  name: string;
  image: ImageSet;
  category: string;
  categoryImage: ImageSet;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: Array<{ quantity: number; item: string }>;
  gallery: {
    first: ImageSet;
    second: ImageSet;
    third: ImageSet;
  };
  others: Array<{
    slug: string;
    name: string;
    image: ImageSet;
  }>;
}

// Change type any
export interface CartState {
  cart: Product[];
}

export interface CartContextProps {
  state: CartState;
  dispatch: React.Dispatch<any>;
}


