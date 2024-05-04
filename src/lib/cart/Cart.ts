interface Cart {
  items: CartItem[];
}

interface CartItem {
  productId: string;
  amount: number;
  productName: string;
  productDesc: string;
  imageUrl: string;
  price: number;
}

export type { Cart, CartItem };
