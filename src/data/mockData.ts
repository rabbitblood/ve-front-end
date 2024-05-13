import collar from "@/assets/collar-demo.webp";
import productImage from "@/assets/product-image/IMG_9822 3.png";
import productImage2 from "@/assets/product-image/IMG_5577 1.png";

const mockProducts: VeProduct[] = [
  {
    productId: "1",
    type: { typeName: "chocker" },
    series: { SerieName: "pure", type: { typeName: "chocker" } },
    name: "product 1",
    price: 100,
    description: "",
    images: [productImage, productImage2],
    options: {
      colorOptions: [
        {
          color: "black",
          images: [productImage, productImage2],
          additionalPrice: 0,
        },
        {
          color: "white",
          images: [collar, productImage2],
          additionalPrice: 0,
        },
        {
          color: "red",
          images: [productImage, collar],
          additionalPrice: 0,
        },
      ],
      sizeOptions: [
        {
          sizeName: "S",
          additionalPrice: 0,
        },
        {
          sizeName: "M",
          additionalPrice: 10,
        },
        {
          sizeName: "L",
          additionalPrice: 50,
        },
      ],
      comboOptions: [
        {
          comboProductId: "2",
        },
        {
          comboProductId: "6",
        },
      ],
    },
    tags: ["new arrival", "best seller"],
    simmilarProducts: ["8", "3"],
  },
  {
    productId: "2",
    type: { typeName: "chocker" },
    series: { SerieName: "classic", type: { typeName: "chocker" } },
    name: "Basic",
    price: 100,
    description: "",
    images: [productImage, productImage2],
    options: {
      colorOptions: [
        {
          color: "black",
          images: [productImage, productImage2],
          additionalPrice: 0,
        },
        {
          color: "white",
          images: [productImage, productImage2],
          additionalPrice: 0,
        },
        {
          color: "red",
          images: [productImage, productImage2],
          additionalPrice: 0,
        },
      ],
      sizeOptions: [
        {
          sizeName: "S",
          additionalPrice: 0,
        },
        {
          sizeName: "M",
          additionalPrice: 10,
        },
        {
          sizeName: "L",
          additionalPrice: 50,
        },
      ],
      comboOptions: [],
    },
    tags: ["new arrival", "best seller"],
    simmilarProducts: ["8", "3"],
  },
  {
    productId: "3",
    type: { typeName: "bracelet" },
    series: { SerieName: "pure", type: { typeName: "chocker" } },
    name: "Classic Base",
    price: 100,
    description: "This is a description of product 1",
    images: [productImage, productImage2],
    options: {
      colorOptions: [
        {
          color: "black",
          images: [productImage, productImage2],
          additionalPrice: 0,
        },
        {
          color: "white",
          images: [productImage, productImage2],
          additionalPrice: 0,
        },
        {
          color: "red",
          images: [productImage, productImage2],
          additionalPrice: 0,
        },
      ],
      sizeOptions: [
        {
          sizeName: "S",
          additionalPrice: 0,
        },
        {
          sizeName: "M",
          additionalPrice: 10,
        },
        {
          sizeName: "L",
          additionalPrice: 50,
        },
      ],
      comboOptions: [],
    },
    tags: ["new arrival", "best seller"],
    simmilarProducts: ["8", "3"],
  },
  {
    productId: "4",
    type: { typeName: "bracelet" },
    series: { SerieName: "classic", type: { typeName: "chocker" } },
    name: "Classic Base",
    price: 100,
    description: "This is a description of product 1",
    images: [productImage, productImage2],
    options: {
      colorOptions: [
        {
          color: "black",
          images: [productImage, productImage2],
          additionalPrice: 0,
        },
        {
          color: "white",
          images: [productImage, productImage2],
          additionalPrice: 0,
        },
        {
          color: "red",
          images: [productImage, productImage2],
          additionalPrice: 0,
        },
      ],
      sizeOptions: [],
      comboOptions: [],
    },
    tags: ["new arrival", "best seller"],
    simmilarProducts: ["8", "3"],
  },
  {
    productId: "5",
    type: { typeName: "accessories" },
    series: { SerieName: "pure", type: { typeName: "chocker" } },
    name: "Classic Base",
    price: 100,
    description: "This is a description of product 1",
    images: [productImage, productImage2],
    options: {
      colorOptions: [
        {
          color: "black",
          images: [productImage, productImage2],
          additionalPrice: 0,
        },
        {
          color: "white",
          images: [productImage, productImage2],
          additionalPrice: 0,
        },
        {
          color: "red",
          images: [productImage, productImage2],
          additionalPrice: 0,
        },
      ],
      sizeOptions: [
        {
          sizeName: "S",
          additionalPrice: 0,
        },
        {
          sizeName: "M",
          additionalPrice: 10,
        },
        {
          sizeName: "L",
          additionalPrice: 50,
        },
      ],
      comboOptions: [],
    },
    tags: ["new arrival", "best seller"],
    simmilarProducts: [],
  },
  {
    productId: "6",
    type: { typeName: "accessories" },
    series: { SerieName: "classic", type: { typeName: "chocker" } },
    name: "Classic Base",
    price: 100,
    description: "This is a description of product 1",
    images: [productImage, productImage2],
    options: {
      colorOptions: [
        {
          color: "black",
          images: [productImage, productImage2],
          additionalPrice: 0,
        },
        {
          color: "white",
          images: [productImage, productImage2],
          additionalPrice: 0,
        },
        {
          color: "red",
          images: [productImage, productImage2],
          additionalPrice: 0,
        },
      ],
      sizeOptions: [
        {
          sizeName: "S",
          additionalPrice: 0,
        },
        {
          sizeName: "M",
          additionalPrice: 10,
        },
        {
          sizeName: "L",
          additionalPrice: 50,
        },
      ],
      comboOptions: [],
    },
    tags: ["new arrival", "best seller"],
    simmilarProducts: [],
  },
  {
    productId: "7",
    type: { typeName: "chocker" },
    series: { SerieName: "pure", type: { typeName: "chocker" } },
    name: "Classic Base",
    price: 100,
    description: "This is a description of product 1",
    images: [productImage, productImage2],
    options: {
      colorOptions: [
        {
          color: "black",
          images: [productImage, productImage2],
          additionalPrice: 0,
        },
        {
          color: "white",
          images: [productImage, productImage2],
          additionalPrice: 0,
        },
        {
          color: "red",
          images: [productImage, productImage2],
          additionalPrice: 0,
        },
      ],
      sizeOptions: [
        {
          sizeName: "S",
          additionalPrice: 0,
        },
        {
          sizeName: "M",
          additionalPrice: 10,
        },
        {
          sizeName: "L",
          additionalPrice: 50,
        },
      ],
      comboOptions: [],
    },
    tags: ["new arrival", "best seller"],
    simmilarProducts: [],
  },
  {
    productId: "8",
    type: { typeName: "chocker" },
    series: { SerieName: "classic", type: { typeName: "chocker" } },
    name: "Classic Base",
    price: 100,
    description: "This is a description of product 1",
    images: [productImage, productImage2],
    options: {
      colorOptions: [],
      sizeOptions: [
        {
          sizeName: "S",
          additionalPrice: 0,
        },
        {
          sizeName: "M",
          additionalPrice: 10,
        },
        {
          sizeName: "L",
          additionalPrice: 50,
        },
      ],
      comboOptions: [],
    },
    tags: ["new arrival", "best seller"],
    simmilarProducts: [],
  },
  {
    productId: "9",
    type: { typeName: "bracelet" },
    series: { SerieName: "pure", type: { typeName: "chocker" } },
    name: "Classic Base",
    price: 100,
    description: "This is a description of product 1",
    images: [productImage, productImage2],
    options: {
      colorOptions: [
        {
          color: "black",
          images: [productImage, productImage2],
          additionalPrice: 0,
        },
        {
          color: "white",
          images: [productImage, productImage2],
          additionalPrice: 0,
        },
        {
          color: "red",
          images: [productImage, productImage2],
          additionalPrice: 0,
        },
      ],
      sizeOptions: [
        {
          sizeName: "S",
          additionalPrice: 0,
        },
        {
          sizeName: "M",
          additionalPrice: 10,
        },
        {
          sizeName: "L",
          additionalPrice: 50,
        },
      ],
      comboOptions: [],
    },
    tags: ["new arrival", "best seller"],
    simmilarProducts: [],
  },
  {
    productId: "10",
    type: { typeName: "bracelet" },
    series: { SerieName: "classic", type: { typeName: "chocker" } },
    name: "Classic Base",
    price: 100,
    description: "This is a description of product 1",
    images: [productImage, productImage2],
    options: {
      colorOptions: [
        {
          color: "black",
          images: [productImage, productImage2],
          additionalPrice: 0,
        },
        {
          color: "white",
          images: [productImage, productImage2],
          additionalPrice: 0,
        },
        {
          color: "red",
          images: [productImage, productImage2],
          additionalPrice: 0,
        },
      ],
      sizeOptions: [],
      comboOptions: [],
    },
    tags: ["new arrival", "best seller"],
    simmilarProducts: [],
  },
  {
    productId: "11",
    type: { typeName: "accessories" },
    series: { SerieName: "pure", type: { typeName: "chocker" } },
    name: "Classic Base",
    price: 100,
    description: "This is a description of product 1",
    images: [productImage, productImage2],
    options: {
      colorOptions: [
        {
          color: "black",
          images: [productImage, productImage2],
          additionalPrice: 0,
        },
        {
          color: "white",
          images: [productImage, productImage2],
          additionalPrice: 0,
        },
        {
          color: "red",
          images: [productImage, productImage2],
          additionalPrice: 0,
        },
      ],
      sizeOptions: [
        {
          sizeName: "S",
          additionalPrice: 0,
        },
        {
          sizeName: "M",
          additionalPrice: 10,
        },
        {
          sizeName: "L",
          additionalPrice: 50,
        },
      ],
      comboOptions: [],
    },
    tags: ["new arrival", "best seller"],
    simmilarProducts: [],
  },
  {
    productId: "12",
    type: { typeName: "accessories " },
    series: { SerieName: "classic", type: { typeName: "chocker" } },
    name: "Classic Base",
    price: 100,
    description: "This is a description of product 1",
    images: [productImage, productImage2],
    options: {
      colorOptions: [
        {
          color: "black",
          images: [productImage, productImage2],
          additionalPrice: 0,
        },
        {
          color: "white",
          images: [productImage, productImage2],
          additionalPrice: 0,
        },
        {
          color: "red",
          images: [productImage, productImage2],
          additionalPrice: 0,
        },
      ],
      sizeOptions: [
        {
          sizeName: "S",
          additionalPrice: 0,
        },
        {
          sizeName: "M",
          additionalPrice: 10,
        },
        {
          sizeName: "L",
          additionalPrice: 50,
        },
      ],
      comboOptions: [],
    },
    tags: ["new arrival", "best seller"],
    simmilarProducts: [],
  },
];

export { mockProducts };
