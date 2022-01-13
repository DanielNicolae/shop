import { Link } from "react-router-dom";
import Home from "./Home";
import ShoppingCart from "./ShoppingCart";

export default function Header() {
  return (
    <div>
      <Link to="/">
        <button className="NavButton">
          Home
        </button>
      </Link>
      <Link to="/shopping-cart">
        <button className="NavButton">
          Shopping cart
        </button>
      </Link>
    </div>
  );
}