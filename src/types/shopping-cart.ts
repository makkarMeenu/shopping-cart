type Product = {
    id: number;
    name: string;
    price: number;
};

type CartItem = Product & {
    quantity: number;
};

export type { Product, CartItem };
