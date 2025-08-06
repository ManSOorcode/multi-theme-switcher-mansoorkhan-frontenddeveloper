interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface Category {
  name: string;
  slug: string;
}

export type { Product, Category };
