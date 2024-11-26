import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import LoginSignup from "./Pages/LoginSignup";
import Cart from "./Pages/Cart";
import Footer from "./Components/Footer/Footer";
import Aboutus from "./Components/Aboutus/Aboutus";
import men_banner from "./Components/Assets/banner_mens.jpg";
import women_banner from "./Components/Assets/banner_women.jpg";

// Import the GlobalProvider
import { GlobalProvider } from "./Context/GlobalContext";

function App() {
  return (
    <GlobalProvider>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route
              path="/mens"
              element={<ShopCategory banner={men_banner} category="men" />}
            />
            <Route
              path="/womens"
              element={<ShopCategory banner={women_banner} category="women" />}
            />
            <Route path="product" element={<Product />}>
              <Route path=":productId" element={<Product />} />
            </Route>
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<LoginSignup />} />
            <Route path="/Aboutus" element={<Aboutus />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </GlobalProvider>
  );
}

export default App;