import {CartWidget} from './CartWidget'

export const NavBar = () => {
  return (
   <nav> 
    <img src="./src/assets/logo.png" alt="logo" className="logo" />
    <CartWidget />
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
   </nav>
  );
};
