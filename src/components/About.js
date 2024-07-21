import React from "react";
import { Link } from "react-router-dom";
import {Logo} from './Icons.js'

const About = () => {
  return (
    <div>
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img
          src="https://wallpaperaccess.com/full/3937949.jpg"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clippath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clippath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Our mission
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Our mission at [Salon Name] is to empower our clients by enhancing their natural beauty through expert hair, skincare, and nail services, provided in a welcoming and luxurious environment. We strive to exceed expectations by delivering personalized treatments, professional advice, and a commitment to customer satisfaction, ensuring every visit leaves our clients feeling confident and rejuvenated.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-gray-300">
                  Download
                </dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                  1K
                </dd>
              </div>
              <div className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-gray-300">New user annually </dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                  300+
                </dd>
              </div>
              <div className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-gray-300">Hours per day</dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                  12
                </dd>
              </div>
              <div className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-gray-300"> Music</dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                  Unlimited
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              About 
              {/* <br className="hidden lg:inline-block">readymade gluten</br> */}
            </h1>
            <p className="mb-8 leading-relaxed">
              A salon is a place where beauty and grooming services are offered, typically specializing in hair care, skincare, and sometimes nail care. It provides a relaxing environment where trained professionals, such as hairstylists, estheticians, and nail technicians, offer services ranging from haircuts and coloring to facials, manicures, and pedicures. Salons often aim to enhance clients' appearance and well-being through personalized treatments and expert advice on beauty and grooming routines.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
          </div>
        </div>
      </section>
      <footer className="bg-gray-900 text-gray-300 body-font">
<div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
  <Link to="/" className="flex title-font font-medium items-center md:justify-start justify-center">
   <Logo/>
    <span className="ml-3 text-xl pt-3">Salon</span>
  </Link>
  <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-700 sm:py-2 sm:mt-0 mt-4">
    © 2024 Salon —
    <a
      href="https://twitter.com/knyttneve"
      className="text-gray-400 ml-1"
      rel="noopener noreferrer"
      target="_blank"
    >
      @CoolCuts
    </a>
  </p>
  <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
    <a
      href="https://www.facebook.com/"
      className="text-gray-400 hover:text-gray-100 ml-4"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg
        fill="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="w-5 h-5"
        viewBox="0 0 24 24"
      >
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
      </svg>
    </a>
    <a
      href="https://x.com/?lang=en-in"
      className="text-gray-400 hover:text-gray-100 ml-4"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg
        fill="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="w-5 h-5"
        viewBox="0 0 24 24"
      >
        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
      </svg>
    </a>
    <a
      href="https://www.instagram.com/?hl=en"
      className="text-gray-400 hover:text-gray-100 ml-4"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="w-5 h-5"
        viewBox="0 0 24 24"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
      </svg>
    </a>
    <a
      href="https://in.linkedin.com/"
      className="text-gray-400 hover:text-gray-100 ml-4"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0"
        className="w-5 h-5"
        viewBox="0 0 24 24"
      >
        <path
          stroke="none"
          d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
        ></path>
        <circle cx="4" cy="4" r="2" stroke="none"></circle>
      </svg>
    </a>
  </span>
</div>
  </footer>
    </div>
  );
};

export default About;
