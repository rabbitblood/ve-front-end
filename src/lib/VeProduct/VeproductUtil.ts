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
    if (
      simmilarProduct &&
      !simmilarProducts.find(
        (p) => p.productId === simmilarProduct.productId
      ) &&
      !productList.find((p) => p.productId === simmilarProduct.productId)
    ) {
      simmilarProducts.push(simmilarProduct);
    }
  }

  return simmilarProducts;
}

async function calculateCartTotal(cartItems: VeCart): Promise<number> {
  const products = (await getAllProductsAsVeProducts()) as VeProduct[];
  let total = 0;

  for (const item of cartItems.items) {
    const product = products.find(
      (product) => product.productId === item.productId
    );
    if (!product) return 0;
    total += product.price * item.amount;
    total +=
      product.options.colorOptions.find(
        (color) => color.colorName === item.color
      )?.additionalPrice ?? 0;
    total +=
      product.options.sizeOptions.find((size) => size.sizeName === item.size)
        ?.additionalPrice ?? 0;
    const comboProduct = await getProductById(item.comboId);
    total += comboProduct?.price ?? 0;
  }

  return total;
}

async function calculateCartTotalWithFeeAndTax(
  cartItems: VeCart
): Promise<number> {
  const products = (await getAllProductsAsVeProducts()) as VeProduct[];
  const storeData = await getStoreData();

  let total = 0;

  for (const item of cartItems.items) {
    const product = products.find(
      (product) => product.productId === item.productId
    );
    if (!product) return 0;
    total += product.price * item.amount;
    total +=
      product.options.colorOptions.find(
        (color) => color.colorName === item.color
      )?.additionalPrice ?? 0;

    total +=
      product.options.sizeOptions.find((size) => size.sizeName === item.size)
        ?.additionalPrice ?? 0;
    const comboProduct = await getProductById(item.comboId);
    total += comboProduct?.price ?? 0;
  }

  total *= 1 + storeData.taxRate;
  total += storeData.shippingFee;

  return total;
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
