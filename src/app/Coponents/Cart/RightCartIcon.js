import React from "react";
import "./RightCartIcon.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { totalCartItem } from "../../Features/Cart/CartSelector";

// Cart icon component with shopping cart design
function CartIcon({ size = 24, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Cart wheel 1 */}
      <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Cart wheel 2 */}
      <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Cart body and handle */}
      <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Main cart icon component with item counter
function RightCartIcon() {
  let state = useSelector((state) => state);
  let totalItems = totalCartItem(state);
  return (
    <NavLink to={`/cart`}>
      <div className="cart-icon">
        <div className="d-flex flex-column">
          {/* Cart icon */}
          <span>
            <CartIcon size={28} color="currentColor" />
          </span>
          {/* Item counter */}
          <span className="cart-count">{totalItems}</span>
        </div>
      </div>
    </NavLink>
  );
}

export default RightCartIcon;
