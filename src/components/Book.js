import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import React, { useState } from 'react';
// import axios from 'axios';

const Book = () => {
  const navigate = useNavigate();
  return (
    <div>
      <ul className=" d-flex bg-gray-800">
        <button
                className=" d-flex border-0 btn btn-outline-light"
                onClick={() => navigate(-1)}
            >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M14.41 7.41L13 6l-6 6 6 6 1.41-1.41L9.83 12z" />
                </svg> Back
            </button>
        <li className="nav-item mx-5">
          <Link className="nav-link active text-white" aria-current="page" >
            Book Now
          </Link>
        </li> 
      </ul>

      <p>ccgvjhhjcbx</p>
    </div>
  );
};

export default Book;
