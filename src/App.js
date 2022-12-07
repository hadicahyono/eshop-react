import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Landing from "./pages/Landing";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
