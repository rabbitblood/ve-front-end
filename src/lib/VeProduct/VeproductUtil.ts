import { mockProducts } from "@/data/mockData";

function getProductById(productId: string): VeProduct | undefined {
  return mockProducts.find((product) => product.productId === productId);
}

function getProductsByType(type: string): VeProduct[] {
  return mockProducts.filter((product) => product.type.typenName === type);
}

function getProductsBySeries(series: string): VeProduct[] {
  return mockProducts.filter((product) => product.series.SerieName === series);
}

function getAllSimmilarProducts(productList: VeProduct[]) {
  const simmilarProducts: VeProduct[] = [];
  productList.forEach((product) => {
    product.simmilarProducts.forEach((productId) => {
      const simmilarProduct = getProductById(productId);
      if (simmilarProduct && !simmilarProducts.includes(simmilarProduct)) {
        simmilarProducts.push(simmilarProduct);
      }
    });
  });
  return simmilarProducts;
}

export {
  getProductById,
  getProductsByType,
  getProductsBySeries,
  getAllSimmilarProducts,
};
