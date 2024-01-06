import React from "react";
import "./Layout.css";
import Header from "../header/Header";
import Products from "../products/Products.jsx"
import CartItems from "../cartitems/CartItems.jsx";
function Layout() {
  let total = 100;

  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
        <CartItems />
        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button className="orderBtn">Place Order</button>
        </div>{" "}
      </div>
    </React.Fragment>
  );
};

export default Layout;
