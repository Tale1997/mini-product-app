import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/homePage";
import ProductsList from "./pages/products/ProductsList";
import AppLayout from "./components/layout/AppLayout";
import PageNotFound from "./components/layout/PageNotFound";
import ProductDetal from "./pages/products/ProductDetal";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/products" element={<ProductsList />} />
          <Route path="/products/:id" element={<ProductDetal />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
