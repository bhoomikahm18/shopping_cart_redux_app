import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/auth/Auth.jsx";
import Layout from "./components/layout/Layout.jsx";
import { useEffect } from "react";
import Notification from "./components/notification/Notification.jsx";
import { uiActions } from "./store/ui_slice.js";

let isFirstRender = true;

function App() {
  const dispatch = useDispatch();
  const notification = useSelector(state => state.ui.notification)
  const cart = useSelector(state => state.cart)
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {

    if (isFirstRender) {
      isFirstRender = false;
      return;
    }

   
    sendRequest().catch(err => {
      dispatch(uiActions.showNotification({
        open: true,
        message: "Sending Request Failed",
        type: "error",
      }))
    });
  }, [cart])


  return (
    <div className="App">
      <Notification type={notification.type} message={notification.message} />
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
