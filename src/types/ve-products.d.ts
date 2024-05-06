declare interface VeProductType {
  typenName: string | "chocker" | "bracelet" | "accessory";
}

declare interface VeProductSeries {
  type: VeProductType;
  SerieName: string | "pure" | "classic";
}

declare interface VeProductOptions {
  colorOptions: colorOption[];
  sizeOptions: string[];
}

declare interface colorOption {
  color: string;
  images: string[];
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
