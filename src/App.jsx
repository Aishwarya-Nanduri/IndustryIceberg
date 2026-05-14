import "./App.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CardDetails from "./pages/CardDetails";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* HOME PAGE */}
        <Route path="/" element={<Home />} />

        {/* DETAILS PAGE */}
        <Route path="/details/:slug" element={<CardDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;