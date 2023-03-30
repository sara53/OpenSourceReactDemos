import { Route, Routes } from "react-router-dom";
import "./App.css";

import { MyNav } from "./components/MyNav";
import { Home } from "./components/Home";
import { Products } from "./components/Products";
import { ProductForm } from "./components/ProductForm";
import { ProductDetails } from "./components/ProductDetails";
import Error from "./components/Error";

function App() {
  return (
    <>
      <MyNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetails />} />
        <Route path="products/:id/edit" element={<ProductForm />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
