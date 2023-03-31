import React from "react";
import { Routes, Route } from "react-router-dom";
import { AddProduct } from "../admin/pages/AddProduct";
import { Product } from "../admin/pages/Product";
import { Dashboard } from "../admin/pages/Dashboard";
import { EditProduct } from "../admin/pages/EditProduct";
import Home from "../pages/Home/Home";
import AllProducts from "../pages/Product/AllProducts";
export const AllRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/products" element={<AllProducts />} />

			<Route path="/admin" element={<Dashboard />} />
			<Route path="/admin/product" element={<Product />} />
			<Route path="/admin/product/add" element={<AddProduct />} />
			<Route path="/admin/product/edit/:id" element={<EditProduct />} />
			<Route path="*" element={<h1>Page Not Found</h1>} />
		</Routes>
	);
};
