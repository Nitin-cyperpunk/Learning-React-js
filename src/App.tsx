import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Product from "./product";

function App() {
  
  const [count, setCount] = useState(0);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-blue-500">
        Hello there lets get started with react js
      </h1>
      <div className="w-full h-auto p-4 flex justify-center items-center gap-2">
        <div className="w-1/2 h-40 rounded-2xl bg-amber-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere alias
          modi ab nam esse magnam blanditiis non obcaecati voluptatem. Iste
          asperiores optio corporis, libero eius voluptatibus esse rerum aperiam
          beatae?
        </div>
        <div className="w-1/2 h-40 rounded-2xl bg-amber-200">
          {" "}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi harum,
          iure, enim voluptate eum nobis consequatur voluptatum magnam iusto
          earum nisi soluta veniam, id consequuntur!
        </div>
      </div>
      <div className="flex  w-screen gap-2 p-4">
         <Product title="iphone 16 pro max" storage="256GB" color="Space Gray" />
         <Product title="iphone 16 pro max" storage="256GB" color="Space Gray" />
         <Product title="iphone 16 pro max" storage="256GB" color="Space Gray" />
         <Product title="iphone 16 pro max" storage="256GB" color="Space Gray" />
         <Product title="iphone 16 pro max" storage="256GB" color="Space Gray" />
      </div>
    </div>
  );
}

export default App;
product title : {
  iphone 16 pro max
  <br />
  256GB Storage
  <br />
  Space Gray
}