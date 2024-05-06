declare interface VeProductType {
  typenName: string;
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
  simmilarProducts: VeProduct[];
}
