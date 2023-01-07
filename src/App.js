import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
// import Props from "./components/Props";
import FormDemo from "./components/FormDemo";
import UseEffectDemo from "./components/UseEffectDemo";

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/service" element={<Services />}></Route>
				<Route path="/about" element={<About />}></Route>
				<Route path="/blog" element={<Blog />}></Route>
				<Route path="/contact" element={<Contact />}></Route>
				{/* <Route path="/props" element={<Props />}></Route> */}
				<Route path="/form" element={<FormDemo />}></Route>
				<Route path="/useeffect" element={<UseEffectDemo />}></Route>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
