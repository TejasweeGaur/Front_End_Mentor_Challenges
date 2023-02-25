/** @format */

import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className='homepage'>
      <Link to={"/Challenge_1"}>
        <button>Challenge 1</button>
      </Link>
    </div>
  );
};

export default HomePage;
