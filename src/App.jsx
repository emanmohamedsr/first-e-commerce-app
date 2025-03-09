import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Nav from "./components/Nav";
import NotFoundPage from "./components/NotFoundPage";
import ProductDetails from "./components/ProductDetails";
import Footer from "./components/Footer";

function App() {
	return (
		<div className='App min-h-dvh relative'>
			<Nav />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/product/:productId' element={<ProductDetails />} />
				<Route path='*' element={<NotFoundPage />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
