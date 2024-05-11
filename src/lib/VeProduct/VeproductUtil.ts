import { mockProducts } from "@/data/mockData";
import { VeShippingFee, VeTaxRate } from "./VeConstants";

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

function calculateCartTotal(cartItems: VeCart) {
  let total = 0;

  cartItems.items.forEach((item) => {
    total += item.price * item.amount;
  });

  return total;
}

function calculateCartTotalWithFeeAndTax(cartItems: VeCart) {
  let total = 0;

  cartItems.items.forEach((item) => {
    total += item.price * item.amount;
  });

  total *= 1 + VeTaxRate;
  total += VeShippingFee;

  return total;
}

export {
  getProductById,
  getProductsByType,
  getProductsBySeries,
  getAllSimmilarProducts,
  calculateCartTotal,
  calculateCartTotalWithFeeAndTax,
};
