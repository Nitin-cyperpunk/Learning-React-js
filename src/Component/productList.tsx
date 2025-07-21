// src/components/ProductList.tsx
import React from 'react';

import { Link } from 'react-router-dom';
import { useProducts } from '../redux/hook/useProduct';

 function ProductList() {
  const { products, loading } = useProducts();
  if (loading) return <p>Loading...</p>;

  return (
    <div className="grid grid-cols-2 gap-4">
      {products.map(p => (
        <div key={p.id} className="border rounded p-4">
          <Link to={`/product/${p.id}`}>
            <img src={p.image} alt={p.title} className="h-40 object-contain mx-auto" />
            <h2 className="mt-2">{p.title}</h2>
            <p className="font-bold">${p.price}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
export default ProductList;