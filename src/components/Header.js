import { Link } from "react-router-dom";
import Home from "./Home";
import ShoppingCart from "./ShoppingCart";

export default function Header() {
  return (
    <div>
      <Link to="/">
        <Home />
      </Link>
      <Link to="shopping-cart">
        <ShoppingCart />
      </Link>
    </div>
  )
}