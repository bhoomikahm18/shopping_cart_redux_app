import React from "react";
import "./Layout.css";
import Header from "../header/Header";
import Products from "../products/Products.jsx"
import CartItems from "../cartitems/CartItems.jsx";
import { useSelector } from "react-redux";
function Layout() {
  let total = 0;
  const showCart = useSelector(state => state.cart.showCart);
  const itemList = useSelector(state => state.cart.itemList);

  itemList.forEach(item => {
    total += item.totalPrice;
  })

  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
        {showCart && <CartItems />}
        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button className="orderBtn">Place Order</button>
        </div>{" "}
      </div>
    </React.Fragment>
  );
};

export default Layout;
