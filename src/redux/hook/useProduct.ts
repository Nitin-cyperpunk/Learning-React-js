// src/hooks/useProducts.ts
import { useState, useEffect } from 'react';
import axios from 'axios';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get<Product[]>('https://fakestoreapi.in/api/products?page=2')
      .then(res => setProducts(res.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);
  return { products, loading };
}
