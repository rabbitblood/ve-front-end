interface Cart {
  items: CartItem[];
}

interface CartItem {
  productId: string;
  amount: number;
  productName: string;
  productDesc: string;
}

function addItemToCart() {}

export type { Cart, CartItem };
