import Product from '../product';
import Loginbtn from './Loginbtn';
import Logoutbtn from './Logoutbtn';
import MyComp from './MyComp';
import { useAppDispatch, useAppSelector } from '../redux/hook'; 
import { decrement, increment } from '../redux/Slice/Counter';
import ProductDetails from './productDetails';
import { useState } from 'react';
import ProductList from './productList';
function Home() {
  const [isLoggedIn, setisLoggedIn] = useState(false)
  const count = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();


  return (
    <>
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
        <h1 className="text-3xl text-left text-blue-950 font-semibold mb-4">count is :{count}</h1>
        <div className="flex w-screen justify-center items-center gap-2 p-4">
          <button className="rounded-lg bg-amber-300 p-2 text-black" onClick={() => dispatch(increment())}>increment</button>
        <button className="rounded-lg bg-amber-300 p-2 text-black  " onClick={() => dispatch(decrement())}>decrement</button>
        </div>
        
        
      </div> 
      <MyComp />
      
      
      <ProductDetails />
      </>
  )
}

export default Home;