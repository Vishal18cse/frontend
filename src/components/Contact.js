import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative w-full">
            {/* Uncomment the below iframe if you want to use Google Maps iframe */}
            {/* <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameborder="0"
              title="map"
              marginheight="0"
              marginwidth="0"
              scrolling="no"
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
              style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
            ></iframe> */}
            <gmp-map
              center="28.3597458,77.2801468"
              zoom="10"
              map-id="DEMO_MAP_ID"
              style={{ height: "300px", width: "100%" }}
            >
              <gmp-advanced-marker
                position="28.3597458,77.2801468"
                title="Mountain View, CA"
              ></gmp-advanced-marker>
            </gmp-map>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Contact Us
            </h2>
            <div className="relative mb-4">
              <label htmlFor="address" className="leading-7 text-sm text-gray-600">
                Address
              </label>
              <p className="mt-1">Vishal house</p>
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <Link to="mailto:example@email.com" className="text-indigo-500 leading-relaxed">
                example@email.com
              </Link>
            </div>
            <div className="relative mb-4">
              <label htmlFor="phone" className="leading-7 text-sm text-gray-600">
                Phone
              </label>
              <p className="leading-relaxed">123-456-7890</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
