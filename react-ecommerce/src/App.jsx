import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Views/Home";
import ProductView from "./Views/ProductView";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Link to="/">ECommerce Test Website</Link>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:slug" element={<ProductView />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
