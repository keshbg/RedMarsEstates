import React from 'react';
import { Link } from 'react-router-dom';
import { FaKey, FaRegUser, FaHouseUser, FaSistrix } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 

const Home = () => {
  return (
    <div className="m-0 p-0">
      {/* Carousel Section */}
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        className="h-[50vh] m-0 p-0"
      >
        <div className="relative h-[50vh] m-0 p-0"> 
          <img src={require('../../assets/1.jpg')} alt="Slide 1" className="h-full w-full object-cover" />
          {/* MARK: Title and rent hidden
           <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
            <h2 className="text-3xl font-bold">Aldershot</h2>
            <p className="text-lg">Rent from: £800</p>
          </div> */}
        </div>
        <div className="relative h-[50vh] m-0 p-0"> 
          <img src={require('../../assets/2.jpg')} alt="Slide 2" className="h-full w-full object-cover" />
        </div>
        <div className="relative h-[50vh] m-0 p-0"> 
          <img src={require('../../assets/4.jpg')} alt="Slide 3" className="h-full w-full object-cover" />
        </div>
      </Carousel>

      {/* Our Services Section */}
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Service 1 */}
          <div className="flex items-center bg-gray-100 p-12 rounded-lg shadow-md">
            <FaSistrix className="w-16 h-16 mr-4 object-cover rounded" />
            <div>
              <h3 className="text-xl font-bold">House Findings</h3>
              <p className="text-sm">We help you find your dream house.</p>
              <Link to="/services/housefindings" className="text-blue-500 flex items-center">
                Learn More <span className="ml-1">➡️</span>
              </Link>
            </div>
          </div>
          {/* Service 2 */}
          <div className="flex items-center bg-gray-100 p-4 rounded-lg shadow-md">
            <FaHouseUser className="w-16 h-16 mr-4 object-cover rounded" />
            <div>
              <h3 className="text-xl font-bold">Lettings</h3>
              <p className="text-sm">We manage your property lettings.</p>
              <Link to="/services/lettings" className="text-blue-500 flex items-center">
                Learn More <span className="ml-1">➡️</span>
              </Link>
            </div>
          </div>
          {/* Service 3 */}
          <div className="flex items-center bg-gray-100 p-4 rounded-lg shadow-md">
            <FaRegUser className="w-16 h-16 mr-4 object-cover rounded" />
            <div>
              <h3 className="text-xl font-bold">Mortgages</h3>
              <p className="text-sm">Get the best mortgage deals.</p>
              <Link to="/services/mortgages" className="text-blue-500 flex items-center">
                Learn More <span className="ml-1">➡️</span>
              </Link>
            </div>
          </div>
          {/* Service 4 */}
          <div className="flex items-center bg-gray-100 p-4 rounded-lg shadow-md">
            <FaKey className="w-16 h-16 mr-4 object-cover rounded" />
            <div>
              <h3 className="text-xl font-bold">Solicitor</h3>
              <p className="text-sm">Professional legal services.</p>
              <Link to="/services/solicitor" className="text-blue-500 flex items-center">
                Learn More <span className="ml-1">➡️</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
