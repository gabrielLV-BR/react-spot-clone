import React from "react"
import { ReactDOM } from "react"
import { BrowserRouter,Route, Routes,  } from "react-router-dom";

import { Home } from "./pages/Home";
import { Login } from "./pages/Login";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}