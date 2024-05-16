import { mockProducts } from "@/data/mockData";
import { getStoreData } from "../builderio/builderDataUtil";

function getProductById(productId: string): VeProduct | undefined {
  return mockProducts.find((product) => product.productId === productId);
}

function getProductsByType(type: string): VeProduct[] {
  return mockProducts.filter((product) => product.type.typeName === type);
}

function getProductsBySeries(series: string): VeProduct[] {
  return mockProducts.filter((product) => product.series.SerieName === series);
}

function getAllSimmilarProducts(productList: VeProduct[]) {
  if (!productList) {
    return [];
  }
  const simmilarProducts: VeProduct[] = [];
  productList.forEach((product) => {
    if (!product || !product.simmilarProducts) {
      return;
    }
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

async function calculateCartTotalWithFeeAndTax(cartItems: VeCart) {
  const storeData = await getStoreData();
  let total = 0;

  cartItems.items.forEach((item) => {
    total += item.price * item.amount;
  });

  total *= 1 + storeData.taxRate;
  total += storeData.shippingFee;

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
