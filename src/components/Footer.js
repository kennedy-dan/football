import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center my-16">
      <div>
        <div className="flex justify-evenly ">
          <p className="text-base font-semibold text-gray-500 mt-2 text-center">Built by</p>
          <a href="https://twitter.com/Khennoxx?t=eOrLQ76Pq28JgRF3Cd4MZw&s=09">
            <p className="text-base font-semibold ml-3 animate-link">
              Daniel Kennedy
            </p>
          </a>
        </div>
        <div className="flex mt-2">
          <p className="text-sm font-semibold ml-3 mt-2">Credit:</p>
          <a href="https://www.football-data.org/">
            <p className="text-sm font-semibold ml-3 animate-link text-center">Football data API</p>
          </a>
        </div> 
      </div>
    </div>
  );
};

export default Footer;
