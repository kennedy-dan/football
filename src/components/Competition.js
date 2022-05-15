import React, { useEffect, useState } from "react";
import StandingsTable from "./UI/standingsTable";
import BackgroundImage from "./UI/BackgroundImage";
import Loading from "./UI/Loading";
import { Link, useParams } from "react-router-dom";
import Matches from "./UI/Matches";
import "./Competition.css";
const Competition = ({ match }) => {
  const { id } = useParams();
  const [dat, setcompetition] = useState({});
  const [matches, setMatches] = useState([]);
  const [displayComponent, setdisplayComponent] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setactiveTab] = useState(true);

  const { name } = dat;
  const matchday = dat.currentSeason?.currentMatchday;
  const newd = Number(matchday);

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

    fetch(`https://api.football-data.org/v2/competitions/${id}`, reqOptions)
      .then((response) => response.json())
      .then((json) => setcompetition(json));
    setIsLoading(false);
  },[id, isLoading] );

  const handleMatches = () => {
    setIsLoading(true);
    setdisplayComponent(true);
    setactiveTab(false);
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
      `https://api.football-data.org/v2/competitions/${id}/matches?season=2021&matchday=${newd}`,
      reqOptions
    )
      .then((response) => response.json())
      .then((json) => setMatches(json));

    setIsLoading(false);

  };

  const handleStandings = () => {
    setdisplayComponent(false);
    setactiveTab(true);
  };

  return (
    <div>
      <BackgroundImage />
      <div className="flex justify-center ">
        <div className="shadow-lg overflow-x-hidden xl:w-6/12 h-full bg-white -mt-12">
          <div className="flex ml-3 mt-5 ">
            <div className="">
              <Link to="/" className="link">
                <p href="/" className="animate-link font-semibold">All Competitions</p>
              </Link>
            </div>

            <span className="mx-3 mt-1">/</span>
            <p className="mt-2">{name}</p>
          </div>
          <div className=" ml-3 my-5 text-blue-700 text-2xl font-semibold">
            <p>{name}</p>
          </div>
          <div className="flex w-full  justify-between bg-orange-600">
            <p
              className={`md:ml-20 p-5 text-white text-xl font-medium cursor-pointer ${
                activeTab
                  ? "underline underline-offset-[20px] decoration-white-700 decoration-[5px]"
                  : ""
              }`}
              onClick={handleStandings}
            >
              Standings
            </p>
            <p
              onClick={handleMatches}
              className={`md:mr-20 p-5 text-white text-xl font-medium cursor-pointer ${
                !activeTab
                  ? "underline underline-offset-[20px] decoration-white-700 decoration-[5px]"
                  : ""
              }`}
            >
              Matches
            </p>
          </div>
          {isLoading ? (
            <div className="flex h-96 justify-center items-center border">
              <Loading />
            </div>
          ) : (
            <>
              {displayComponent ? (
                <div>
                  <Matches data={matches} />
                </div>
              ) : (
                <div className="flex md:justify-center   mt-5 overflow-x-hidden">
                  <div className=" flex justify-center  h-42 shadow-xl overflow-x-auto  manage-width">
                    <StandingsTable name={name} id={id} />
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Competition;
