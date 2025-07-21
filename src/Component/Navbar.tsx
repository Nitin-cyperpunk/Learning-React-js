
import { NavLink } from 'react-router-dom';


function Navbar() {
  return (
    <div>
        <nav>
        <div className="bg-gray-600 backdrop-blur-lg flex justify-between items-center p-4 text-white text-center rounded-2xl shadow-lg">
<ul className="flex space-x-4">
  <li>
    <NavLink to="/" className="text-blue-500 font-bold text-xl">Home</NavLink>
  </li>
  <li>
    <NavLink to="/About" className="text-blue-500 font-bold text-xl">About</NavLink>
  </li>
  <li>
    <NavLink to="/Contact" className="text-blue-500 font-bold text-xl">Contact</NavLink>
  </li>
  <li>
    <NavLink to="/products" className="text-blue-500 font-bold text-xl">Products</NavLink>
  </li>
  <li>
    <NavLink to="/Login" className="text-blue-500 font-bold text-xl">Login</NavLink>
  </li>
</ul>
        </div>
        </nav>
    </div>
  )
}

export default Navbar