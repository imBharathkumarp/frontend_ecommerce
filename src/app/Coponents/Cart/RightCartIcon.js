import React from "react";
import "./RightCartIcon.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { totalCartItem } from "../../Features/Cart/CartSelector";

function LanzaIcon({ size = 24, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2 L13 7 L17 8 L13 9 L12 22 L11 9 L7 8 L11 7 Z" stroke={color} strokeWidth="2" fill="none" strokeLinejoin="round"/>
      <line x1="12" y1="2" x2="12" y2="22" stroke={color} strokeWidth="2"/>
    </svg>
  );
}

function RightCartIcon() {
  let state = useSelector((state) => state);
  let totalItems = totalCartItem(state);
  return (
    <NavLink to={`/cart`}>
      <div className="cart-icon">
        <div className="d-flex flex-column">
          <span>
            <LanzaIcon size={28} color="#fff" />
          </span>
          <span>{totalItems}</span>
        </div>
      </div>
    </NavLink>
  );
}

export default RightCartIcon;
