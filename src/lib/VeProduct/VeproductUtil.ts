import {
  getAllProductsAsVeProducts,
  getStoreData,
} from "@/lib/builderio/builderDataUtil";

async function getProductById(
  productId: string
): Promise<VeProduct | undefined> {
  const product = ((await getAllProductsAsVeProducts()) as VeProduct[]).find(
    (product) => product.productId === productId
  );

  return product;
}

async function getAllSimmilarProducts(productList: VeProduct[]) {
  const simmilarProducts: VeProduct[] = [];
  for (const product of productList) {
    const simmilarProduct = await getProductById(product.productId);
    if (simmilarProduct && !simmilarProducts.includes(simmilarProduct)) {
      simmilarProducts.push(simmilarProduct);
    }
  }

  return simmilarProducts;
}

async function calculateCartTotal(cartItems: VeCart) {
  const products = (await getAllProductsAsVeProducts()) as VeProduct[];
  let total = 0;

  cartItems.items.forEach((item) => {
    const product = products.find(
      (product) => product.productId === item.productId
    );
    if (!product) return;
    total += product.price * item.amount;
  });

  return total;
}

async function calculateCartTotalWithFeeAndTax(cartItems: VeCart) {
  const products = (await getAllProductsAsVeProducts()) as VeProduct[];
  const storeData = await getStoreData();

  let total = 0;

  cartItems.items.forEach((item) => {
    const product = products.find(
      (product) => product.productId === item.productId
    );
    if (!product) return;
    total += product.price * item.amount;
  });

  total *= 1 + storeData.taxRate;
  total += storeData.shippingFee;

  return Math.round(total);
}

async function cartItemToString(cartItem: VeCartItem) {
  const comboProduct = await getProductById(cartItem.comboId);
  const comboName = comboProduct?.name;

  const output = `${cartItem.amount} ${cartItem.productName}${
    cartItem.color ? "-" + cartItem.color : ""
  }${cartItem.size ? "-" + cartItem.size : ""}${
    cartItem.comboId && comboName && "\n(Combo With" + comboName + ")"
  }`;

  return output;
}

async function cartToString(cart: VeCart) {
  let cartStr = "";

  for (const item of cart.items) {
    cartStr += await cartItemToString(item);
    cartStr += "\n";
  }

  return cartStr;
}

export {
  getProductById,
  getAllSimmilarProducts,
  calculateCartTotal,
  calculateCartTotalWithFeeAndTax,
  cartItemToString,
  cartToString,
};
