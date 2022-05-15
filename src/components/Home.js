import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import BackgroundImage from "./UI/BackgroundImage";

import "./Home.css";
import Loading from "./UI/Loading";
const Home = () => {
  const [competitions, setcompetitions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const reqOptions = {
      method: "GET",
      headers: {
        "Content-Length": 0,
        "Content-Type": "text/plain",
        "X-Auth-Token": "c8e7e31d3f014e2bb8f5e0d783d4ee8b",
      },
    };
    setIsLoading(true);

    fetch(
      "https://api.football-data.org/v2/competitions?areas=2077&plan=TIER_ONE",
      reqOptions
    )
      .then((response) => response.json())
      .then((json) => setcompetitions(json));

    setIsLoading(false);
  }, []);

  console.log(isLoading);

  return (
    <div className="">
      <BackgroundImage />
      <div className="flex justify-center  ">
        <div className=" xl:w-6/12 border   border-slate-200 rounded bg-white -mt-12 popyy">
          <p className="text-left font-semibold text-2xl mx-3 pt-5">
            All Competitions
          </p>
          {isLoading ? (
              <div className="flex h-96 justify-center items-center border">
              <Loading />
              </div>
            ) : (
              <div className="flex justify-center grid md:grid-cols-2">
            {competitions.competitions &&
              competitions.competitions.map((competition) => (
                <Link key={competition.id} to={`/competition/${competition.id}`}>
                  <div className="flex justify-center items-center ">
                    <div className="flex items-center w-full h-36 py-3 mx-3 my-5 px-2 comoetition-card">
                      <img src={competition.emblemUrl } alt='club badge'  className="w-24 h-24" />
                      <div className="inline-block align-middle ml-3">
                        <p className="font-semibold text-gray-600 text-xl  break-words  text-left">
                          {competition.name}
                        </p>
                        <p className="text-left text-sm mt-2">{competition.area.name}</p>
                      </div>
                      <div></div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
            )}
          
        </div>
      </div>
    </div>
  );
};

export default Home;
