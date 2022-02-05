import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage, HomePage, ProfilePage, MediaViewPage } from "./pages";

const App = () => {
  <BrowserRouter>
    <Routes>
      <Route path="/" element={HomePage} />
      <Route path="/profile" element={ProfilePage} />
      <Route path="/mediaview" element={MediaViewPage} />
      <Route path="/login" element={LoginPage} />
    </Routes>
  </BrowserRouter>;
};

export default App;
