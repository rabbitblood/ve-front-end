import { builder } from "@builder.io/sdk";

async function getStoreData() {
  const storeData = await getDataByName("store-data");
  return storeData;
}

async function getDataByName(name) {
  const data = await builder.get(name).promise();
  return data.data;
}

async function getAllProducts() {
  const products = await getDataByName("all-products");
  return products;
}

async function getAllProductsAsVeProducts() {
  const builderProducts = await getAllProducts();
  //console.log(builderProducts);
  const VeProducts = builderProductsToVeProducts(builderProducts);
  //console.log(VeProducts);

  return VeProducts;
}

function builderProductsToVeProducts(builderProduct) {
  const VeProducts = builderProduct.products.map((product) => {
    return {
      productId: product.product.productId,
      type: {
        typeName: product.product.type.typeName,
      },
      series: {
        SerieName: product.product.series.seriesName,
        type: {
          typeName: product.product.type.typeName,
        },
      },
      name: product.product.productName,
      price: product.product.price,
      description: product.product.productDescription,
      //eslint-disable-next-line @typescript-eslint/no-explicit-any
      images: product.product.defaultImages?.map((image) => {
        return image.images;
      }),
      options: {
        colorOptions:
          //eslint-disable-next-line @typescript-eslint/no-explicit-any
          product.product.colorOptions?.map((colorOption) => {
            return {
              color: colorOption.colorPicker,
              images:
                //eslint-disable-next-line @typescript-eslint/no-explicit-any
                colorOption.colorSelectionImages?.map((image) => {
                  return image.image;
                }),

              additionalPrice: colorOption.additionalMoney,
            };
          }),

        sizeOptions:
          //eslint-disable-next-line @typescript-eslint/no-explicit-any
          product.product.sizeOptions?.map((sizeOption) => {
            return {
              sizeName: sizeOption.size,
              additionalPrice: sizeOption.additionalMoney,
            };
          }),
        comboOptions: product.product.comboOptions?.map(
          //eslint-disable-next-line @typescript-eslint/no-explicit-any
          (comboOption) => {
            return {
              comboProductId: comboOption.comboProductId,
            };
          }
        ),
      },
      tags: [],
      simmilarProducts: product.product.similarProducts,
    };
  });

  return VeProducts;
}

export {
  getDataByName,
  getStoreData,
  getAllProducts,
  getAllProductsAsVeProducts,
};
