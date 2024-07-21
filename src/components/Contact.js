import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="bg-gray-100 py-16">
      <section className="text-gray-600 body-font relative">
        {/* Map Section */}
        <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden p-0 mb-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3084.1315279698156!2d77.31266984556756!3d28.369812643000717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdc6ddc0701df%3A0x8d9acfc7d0d3f1f7!2sEscorts%20Mujesar!5e0!3m2!1sen!2sin!4v1721552964240!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map"
          ></iframe>
        </div>

        {/* Contact Details and Form */}
        <div className="container ">
          <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col lg:flex-row">
            {/* Contact Details */}
            <div className="lg:w-1/2 w-full lg:pr-6 mb-6 lg:mb-0">
              <h2 className="text-gray-900 text-3xl mb-4 font-bold title-font">
                Get in Touch
              </h2>
              <p className="leading-relaxed mb-6 text-gray-600 text-lg">
                We’d love to hear from you! Whether you have a question, comment, or just want to say hi, fill out the form below or use the contact information provided.
              </p>
              <div className="mb-6">
                <div className="relative mb-4">
                  <label htmlFor="address" className="leading-7 text-sm text-gray-700 font-medium">
                    Address
                  </label>
                  <p className="mt-1 text-gray-900 text-lg">Vishal House</p>
                </div>
                <div className="relative mb-4">
                  <label htmlFor="email-info" className="leading-7 text-sm text-gray-700 font-medium">
                    Email
                  </label>
                  <Link to="mailto:example@email.com" className="text-indigo-600 hover:underline text-lg">
                    example@email.com
                  </Link>
                </div>
                <div className="relative mb-4">
                  <label htmlFor="phone" className="leading-7 text-sm text-gray-700 font-medium">
                    Phone
                  </label>
                  <p className="leading-relaxed text-gray-900 text-lg">123-456-7890</p>
                </div>
                <div className="relative mb-4">
                  <label htmlFor="hours" className="leading-7 text-sm text-gray-700 font-medium">
                    Hours of Operation
                  </label>
                  <p className="leading-relaxed text-gray-900 text-lg">
                    Mon-Fri: 9 AM - 6 PM<br />
                    Sat-Sun: 10 AM - 4 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-1/2 w-full">
              <h2 className="text-gray-900 text-3xl mb-6 font-bold title-font">Contact Form</h2>
              <form>
                <div className="relative mb-4">
                  <label htmlFor="name" className="leading-7 text-md text-gray-700 font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-teal-500 focus:bg-white focus:ring-2 focus:ring-teal-200 h-12 text-base outline-none text-gray-700 py-3 px-4 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative mb-4">
                  <label htmlFor="email" className="leading-7 text-md text-gray-700 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-teal-500 focus:bg-white focus:ring-2 focus:ring-teal-200 h-12 text-base outline-none text-gray-700 py-3 px-4 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative mb-4">
                  <label htmlFor="subject" className="leading-7 text-md text-gray-700 font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-teal-500 focus:bg-white focus:ring-2 focus:ring-teal-200 h-12 text-base outline-none text-gray-700 py-3 px-4 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative mb-6">
                  <label htmlFor="message" className="leading-7 text-md text-gray-700 font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-teal-500 focus:bg-white focus:ring-2 focus:ring-teal-200 h-40 text-base outline-none text-gray-700 py-3 px-4 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
                <button className="text-white bg-teal-600 border-0 py-3 px-6 focus:outline-none hover:bg-teal-700 rounded text-lg font-semibold transition-colors duration-300 ease-in-out">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
