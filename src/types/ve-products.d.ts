declare interface VeProductType {
  typenName: string | "chocker" | "bracelet" | "accessory";
}

declare interface VeProductSeries {
  type: VeProductType;
  SserieName: string | "pure" | "classic";
}

declare interface VeProductOptions {
  colorOptions: string[];
  sizeOptions: string[];
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
