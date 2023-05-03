import "./App.css";
import Home from "./components/Home";
import Competition from "./components/Competition";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/competition/:id" element={<Competition />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
