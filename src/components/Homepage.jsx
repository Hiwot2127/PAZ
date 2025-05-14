
import ImageSlider from "./ImageSlider";
import Sidebar from "./Sidebar";

const homepageStyle = {
	backgroundSize: "cover",
	backgroundPosition: "center",
	minHeight: "100vh",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	position: "relative",
};

const Homepage = () => {
	return (
		<div style={homepageStyle} className="relative w-full h-screen">
			<ImageSlider />
			<Sidebar />
		</div>
	);
};

export default Homepage;
