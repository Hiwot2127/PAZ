
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import Products from "./components/ProductsPage"; // Example components for routing
 import Gallery from './components/Gallery';
// import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import Navbar from "./components/Navbar";
import Contact from "./components/Contact"; 

function App() {
	return (
		// <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
		<Router>
			<div className="App">
				<Navbar />

				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/products" element={<Products />} />
					<Route path="/about" element={<AboutUs />}/>
					<Route path="/contact" element={<Contact />} />
				
          <Route path="/gallery" element={<Gallery />} />
     	{/*     <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} /> */}
				</Routes>
			</div>
		</Router>
		// {/* </ThemeProvider> */}
	);
}

export default App;
