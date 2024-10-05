
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import Products from "./components/ProductsPage";

// import Gallery from './components/Gallery';
// import Contact from './components/Contact';
// import About from './components/About';
import Navbar from "./components/Navbar";

function App() {
	return (
		// <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
		<Router>
			<div className="App">
				<Navbar />
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/products" element={<Products />} />
					{/*
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} /> */}
				</Routes>
			</div>
		</Router>
		// {/* </ThemeProvider> */}
	);
}

export default App;
