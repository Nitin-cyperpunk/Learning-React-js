// src/pages/ProductDetails.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

 function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://fakestoreapi.in/api/products?page=2/${id}`)
      .then(res => setProduct(res.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found!</p>;

  return (
    <div className="p-4">
      <img src={product.image} alt={product.title} className="h-64 mx-auto" />
      <h1 className="text-2xl font-bold mt-4">{product.title}</h1>
      <p className="mt-2">{product.description}</p>
      <p className="mt-2 font-semibold">${product.price}</p>
    </div>
  );
}
export default ProductDetails;