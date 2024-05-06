import { mockProducts } from "@/data/mockData";

function getProductById(productId: string) {
  return mockProducts.find((product) => product.productId === productId);
}

function getProductsByType(type: string) {
  return mockProducts.filter((product) => product.type.typenName === type);
}

function getProductsBySeries(series: string) {
  return mockProducts.filter((product) => product.series.SerieName === series);
}

export { getProductById, getProductsByType, getProductsBySeries };
