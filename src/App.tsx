import "./App.css";
import Product from "./product";


import Loginbtn from "./Component/Loginbtn";
import Logoutbtn from "./Component/Logoutbtn";
import { useState } from "react";

function App() {
  
const [isLoggedIn, setIsLoggedIn] = useState(false);
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
       <h1 className="text-4xl text-left text-blue-950 font-semibold mb-4">Iphones</h1>
      <div className="flex w-screen gap-2 p-4">
        
        <Product title="iPhone 16"  />
        <Product title="iPhone 16 Pro" />
        <Product title="iPhone 16 Pro Max" />
        <Product title="iPhone 16 Mini" />
      </div>
      <div>
        <h1 className="text-4xl text-left text-blue-950 font-semibold mb-4">wellcome ser</h1>
        <div>{isLoggedIn ? <Logoutbtn /> : <Loginbtn />}</div>
        
      </div>
    </div>
  );
}

export default App;
