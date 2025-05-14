const AboutUs = () => {
  return (
    <div className="relative bg-cover bg-center min-h-screen flex items-center justify-center" style={{ backgroundImage: "url('/assets/rainer.jpg.webp')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto py-16 px-4 relative z-10">
        <h1 className="text-4xl font-bold text-center text-yellow-500 mb-8 animate-fadeIn">PAZ Tiles and Terrazzo</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="animate-fadeInLeft">
            <img
              src="/assets/removedabt.png"
              alt="Terrazzo"
              className="w-full h-auto rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
            />
          </div>
          <div className="text-white animate-fadeInRight">
            <div className="bg-white bg-opacity-10 p-6 transform transition duration-500 hover:scale-105 rounded-lg shadow-lg mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-center text-yellow-500">Our Story</h2>
              <p className="mb-4 text-center text-white">
                Paz Tiles and Terrazzo is revolutionarizing the Ethiopian tiles and terrazzo industry. We offer the finest affordable terrazzo with unmatched Italian quality, known for its exceptional durability and timeless beauty. Whether it&apos;s for homes, commercial buildings or large-scale infrastructure projects, we deliver a wide range of tile and terrazzo products designed to meet every need.
              </p>
            </div>
            <div className="bg-white transform transition duration-500 hover:scale-105 bg-opacity-10 p-6 rounded-lg shadow-lg mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-center text-yellow-500">Our Mission</h2>
              <p className="mb-4 text-center text-white">
                To provide high-quality, durable, and aesthetically pleasing tiles and terrazzo products that meet the diverse needs of our customers.
              </p>
            </div>
            <div className="bg-white transform transition duration-500 hover:scale-105 bg-opacity-10 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-center text-yellow-500">Why Choose Us</h2>
              <div className="flex flex-col items-center mb-4">
                <img
                  src="/assets/concept.png"
                  alt="Italian Craftsmanship"
                  className="w-16 h-16 mb-2"
                />
                <h3 className="text-xl font-semibold mb-2 text-yellow-500">Italian Craftsmanship</h3>
                <p className="text-center text-white">
                  Crafted with the finest Italian techniques, ensuring unparalleled quality and beauty.
                </p>
              </div>
              <div className="flex flex-col items-center mb-4">
                <img
                  src="/assets/affordable.png"
                  alt="Affordable Prices"
                  className="w-16 h-16 mb-2"
                />
                <h3 className="text-xl font-semibold mb-2 text-yellow-500">Affordable Prices</h3>
                <p className="text-center text-white">
                  Competitive pricing without compromising on quality.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="/assets/construction.png"
                  alt="Custom Designs"
                  className="w-16 h-16 mb-2"
                />
                <h3 className="text-xl font-semibold mb-2 text-yellow-500">Custom Designs</h3>
                <p className="text-center text-white">
                  Custom design options to meet the unique needs of each project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;