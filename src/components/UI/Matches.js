import React from "react";
import home from "../../assets/home.png";
import away from "../../assets/away.png";
import './Matches.css'
const Matches = ({ data }) => {
  

  return (
    <div className="mx-5">
      <p className="text-xl font-semibold my-4 px-3">
        MatchWeek {data.filters?.matchday}
      </p>
      <div className="flex justify-center divide-x grid md:grid-cols-2">
        {data.matches?.map((match, index) => (
          <div key={match.id} className="flex justify-between divide-x w-full py-3 mx-3 border-b-2 px-2 matches-card">
            
              <div className="divide-x ">
              
                <div>
                  <div className="flex my-4">
                    <img src={home} alt="home team" className="w-4 h-4" />
                    <div className="flex justify-between w-60">
                      <p className="text-xs font-semibold ml-3">
                        {match.homeTeam.name}
                      </p>
                      <p className={`${match.score.fullTime.homeTeam === match.score.fullTime.awayTeam ? 'text-black' :  match.score.fullTime.homeTeam > match.score.fullTime.awayTeam ? 'text-green-700': ''} `}>{match.score.fullTime.homeTeam}</p>
                    </div>
                  </div>
                  <div className="flex">
                    <img src={away} alt='away team' className="w-4 h-4" />
                    <div className="flex justify-between w-60">

                    <p className="text-xs font-semibold ml-3">
                      {match.awayTeam.name}
                    </p>
                    <p className={`${match.score.fullTime.homeTeam === match.score.fullTime.awayTeam ? 'text-black' :  match.score.fullTime.awayTeam  > match.score.fullTime.homeTeam ? 'text-green-700': ''} `}>{match.score.fullTime.awayTeam}</p>
                  </div>
                  </div>
                </div>
              </div>

              <div className="ml-2 pt-4">
             
                <p className="ml-2 text-xs font-semibold">
                  {match.utcDate
                    .toString()
                    ?.split("-")
                    .join("/")
                    .substring(5, 10)}
                </p>{" "}
                <p className="ml-2 text-xs font-semibold">
                  {" "}
                  {match.utcDate
                    .toString()
                    ?.split("-")
                    .join("/")
                    .substring(11, 16)}
                </p>
              </div>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default Matches;
