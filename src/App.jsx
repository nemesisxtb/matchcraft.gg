import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Terms from "./components/legal/Terms";
import Privacy from "./components/legal/Privacy";
import "./components/header/header.css";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </>
  );
}
