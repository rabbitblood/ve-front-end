import collar from "@/assets/collar-demo.webp";
import productImage from "@/assets/product-image/IMG_9822 3.png";
import productImage2 from "@/assets/product-image/IMG_5577 1.png";

const mockProducts: VeProduct[] = [
  {
    productId: "1",
    type: { typenName: "chocker" },
    series: { SerieName: "pure", type: { typenName: "chocker" } },
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
    simmilarProducts: [],
  },
  {
    productId: "2",
    type: { typenName: "chocker" },
    series: { SerieName: "classic", type: { typenName: "chocker" } },
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
    simmilarProducts: [],
  },
  {
    productId: "3",
    type: { typenName: "bracelet" },
    series: { SerieName: "pure", type: { typenName: "chocker" } },
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
    productId: "4",
    type: { typenName: "bracelet" },
    series: { SerieName: "classic", type: { typenName: "chocker" } },
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
    productId: "5",
    type: { typenName: "accessories" },
    series: { SerieName: "pure", type: { typenName: "chocker" } },
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
    type: { typenName: "accessories" },
    series: { SerieName: "classic", type: { typenName: "chocker" } },
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
    type: { typenName: "chocker" },
    series: { SerieName: "pure", type: { typenName: "chocker" } },
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
    type: { typenName: "chocker" },
    series: { SerieName: "classic", type: { typenName: "chocker" } },
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
    type: { typenName: "bracelet" },
    series: { SerieName: "pure", type: { typenName: "chocker" } },
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
    type: { typenName: "bracelet" },
    series: { SerieName: "classic", type: { typenName: "chocker" } },
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
    type: { typenName: "accessories" },
    series: { SerieName: "pure", type: { typenName: "chocker" } },
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
    type: { typenName: "accessories " },
    series: { SerieName: "classic", type: { typenName: "chocker" } },
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

const ProductData = {
  name: "special summer hat for lady",
  tag: ["summer best", "new arrival", "best seller"],
  price: "123",
  src: collar,
  star: 4,
  reviews: 124,
  colorOptions: ["red", "blue", "green"],
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
  originalPrice: 226,
};

const Products = [
  {
    productid: 1,
    name: "hat",
    base: "Classic Base",
    price: "123$",
    src: productImage,
    colorOptions: [
      { color: "black", images: [productImage, productImage2] },
      { color: "white", images: [productImage, productImage2] },
      { color: "red", images: [productImage, productImage2] },
    ],
  },
  {
    productid: 2,
    name: "hat",
    base: "Classic Base",
    price: "123$",
    src: productImage,
    colorOptions: [
      { color: "black", images: [productImage, productImage2] },
      { color: "white", images: [productImage, productImage2] },
      { color: "red", images: [productImage, productImage2] },
    ],
  },
  {
    productid: 3,
    name: "hat",
    base: "Classic Base",
    price: "123$",
    src: productImage,
    colorOptions: [
      { color: "black", images: [productImage, productImage2] },
      { color: "white", images: [productImage, productImage2] },
      { color: "red", images: [productImage, productImage2] },
    ],
  },
  {
    productid: 4,
    name: "hat",
    base: "Classic Base",
    price: "123$",
    src: productImage,
    colorOptions: [
      { color: "black", images: [productImage, productImage2] },
      { color: "white", images: [productImage, productImage2] },
      { color: "red", images: [productImage, productImage2] },
    ],
  },
  {
    productid: 5,
    name: "hat",
    base: "Classic Base",
    price: "123$",
    src: productImage,
    colorOptions: [
      { color: "black", images: [productImage, productImage2] },
      { color: "white", images: [productImage, productImage2] },
      { color: "red", images: [productImage, productImage2] },
    ],
  },
  {
    productid: 6,
    name: "hat",
    base: "Classic Base",
    price: "123$",
    src: productImage,
    colorOptions: [
      { color: "black", images: [productImage, productImage2] },
      { color: "white", images: [productImage, productImage2] },
      { color: "red", images: [productImage, productImage2] },
    ],
  },
  {
    productid: 7,
    name: "hat",
    base: "Classic",
    price: "123$",
    src: productImage,
    colorOptions: [
      { color: "black", images: [productImage, productImage2] },
      { color: "white", images: [productImage, productImage2] },
      { color: "red", images: [productImage, productImage2] },
    ],
  },
];

const productList = {
  1: {
    id: "1",
    name: "Product 1",
    description: "This is a description of product 1",
    image: "https://via.placeholder.com/50",
    price: 100,
  },
  2: {
    id: "2",
    name: "Product 2",
    description: "This is a description of product 2",
    image: "https://via.placeholder.com/50",
    price: 200,
  },
  3: {
    id: "3",
    name: "Product 3",
    description: "This is a description of product 3",
    image: "https://via.placeholder.com/50",
    price: 300,
  },
};

export { ProductData, Products, productList, mockProducts };
