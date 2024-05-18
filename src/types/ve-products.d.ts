declare interface VeProductType {
  typeName: string;
}

declare interface VeProductSeries {
  type: VeProductType;
  SerieName: string;
}

declare interface VeProductOptions {
  colorOptions: ColorOption[];
  sizeOptions: SizeOption[];
  comboOptions: ComboOption[];
}

declare interface ComboOption {
  comboProductId: string;
}

declare interface ColorOption {
  colorName: string;
  color: string;
  images: string[];
  additionalPrice: number;
}

declare interface SizeOption {
  sizeName: string;
  additionalPrice: number;
}

declare interface VeProduct {
  productId: string;
  type: VeProductType;
  series: VeProductSeries;
  name: string;
  price: number;
  description: string;
  images: string[];
  options: VeProductOptions;
  tags: string[];
  simmilarProducts: SimmilarProducts[];
  isPreorder: boolean;
}
declare interface SimmilarProducts {
  similarProductId: string;
}

declare interface VeCartItem {
  productId: string;
  amount: number;
  productName: string;
  productDesc: string;
  price: number;
  imageUrl: string;
  color: string;
  size: string;
  comboId: string;
}

declare interface VeCart {
  items: VeCartItem[];
}
