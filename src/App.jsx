import { useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/auth/Auth.jsx";
import Layout from "./components/layout/Layout.jsx";
import { useEffect } from "react";

function App() {
  const cart = useSelector(state => state.cart)
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    fetch('https://redux-http-e78a2-default-rtdb.firebaseio.com/cartItem.json',{
      method: 'PUT',
      body: JSON.stringify(cart)
    })
  },[cart])
  
  return (
    <div className="App">
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
