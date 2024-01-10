import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Products from "../pages/Products";
import Orders from "../pages/Orders";
import Customer from "../pages/Customer";
import AddProduct from "./AddProduct";
import Edit from "./Edit";

function AdminRouter() {
  return (
    <Routes>
      <Route path="/" element={Products}></Route>
      <Route path="/add-product" element={AddProduct}></Route>
      <Route path="/Edit/:id" element={Edit}></Route>
    </Routes>
  );
}

export default AdminRouter;
