import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Landing from "./pages/Landing";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import { loginAction } from "./actions/userAction";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:2500";

function App() {
  const dispatch = useDispatch();

  const keepLogin = () => {
    let getLocalStorage = JSON.parse(localStorage.getItem("eshop_login"));
    console.log(getLocalStorage);
    axios
      .get(API_URL + `/user?id=${getLocalStorage.id}`)
      .then((res) => {
        delete res.data[0].password;
        dispatch(loginAction(res.data[0]));
        localStorage.setItem("eshop_login", JSON.stringify(res.data[0]));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    keepLogin();
  }, []);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
