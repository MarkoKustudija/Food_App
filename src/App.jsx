import Cart from "./components/Cart/Cart";
import Checkout from "./components/Cart/Checkout";
import Meals from "./components/Meals/Meals";
import Header from "./components/layout/Header";
import Layout from "./components/layout/Layout";
import CartProvider from "./store/CartProvider";
import { UserProgressContexProvider } from "./store/UserProgressContex";

function App() {
  return (
    <UserProgressContexProvider>
      <CartProvider>
        <Layout />
        <Meals />
        <Cart />
        <Checkout />
      </CartProvider>
    </UserProgressContexProvider>
  );
}

export default App;
