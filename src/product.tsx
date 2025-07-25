import React, { useState, useEffect, useMemo } from "react";

interface ProductProps {
  title: string;
}

const Product: React.FC<ProductProps> = ({ title }) => {
  const [count, setCount] = useState<number>(0);
  useEffect(() => {
     
  })
  const price = useMemo(() => (101.1) * count, [count]);

  return (
    <div className="bg-gray-100 h-[400px] w-[400px] rounded-2xl flex flex-col items-center justify-center p-4 shadow-lg">
     
      <img
        src="https://imgs.search.brave.com/BgVYuVuanWEyjsfm1q9At8Ks5dBjrtfIt41XhfxALZA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/Y25ldC5jb20vYS9p/bWcvcmVzaXplL2Jk/ZTFiOGNhMWI5Mzcz/YjYxYmJmOWQzZTEx/M2E4MWFjNzYyOTdi/NTEvaHViLzIwMjQv/MDkvMTMvMGRmMzA3/NDQtYTMzZi00YzZl/LWI1OGMtYTkwZDdh/OTE0MDg5L2FwcGxl/LWlwaG9uZS0xNi0y/ODE1LmpwZz9hdXRv/PXdlYnAmaGVpZ2h0/PTUwMA"
        alt={title}
        className="w-[350px] h-[300px] rounded-2xl hover:scale-109 transition-transform duration-300"
      />
      <h2 id="title" className="text-2xl font-bold">{title}</h2>
      <p className="text-gray-600">Product description goes here.</p>
      <div className="prize">
        <h3 className="text-xl font-semibold">${price}</h3>
      </div>
     <div className="flex  flex-row gap-2">
       <button onClick={() => setCount(count - 1>0 ? count - 1 : 0)} className="text-2xl">-</button>
      <h1 className="text-2xl">{count}</h1>
      <button onClick={() => setCount(count + 1>10 ? 10 : count + 1)}  className="text-2xl">+</button>
     </div>
     <div className="flex items-center  gap-2 justify-center mt-4">
       <button
        onClick={() => open(`/product/${title}`, "productDetails`, ")}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
      >
        View Details
      </button>
      <button
        onClick={() => alert(`${title}` + "Successfully  added into cart")}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
      >
        Add to Cart
      </button>
     </div>
      
    </div>
  );
};

export default Product;
