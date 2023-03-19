import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/global/Navbar";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { Footer } from "./components/global/Footer";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product" />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
