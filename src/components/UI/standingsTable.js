import React, { useState, useEffect } from "react";
import TableHead from "./TableHead";
import "./StandingsTable.css";
const StandingsTable = (props) => {
  const { name, id } = props;
  const [StandingsData, setStandingsData] = useState({});

  useEffect(() => {
    const reqOptions = {
      method: "GET",
      headers: {
        "Content-Length": 0,
        "Content-Type": "text/plain",
        "X-Auth-Token": "c8e7e31d3f014e2bb8f5e0d783d4ee8b",
      },
    };

    fetch(
      `https://api.football-data.org/v2/competitions/${id}/standings?standingType=TOTAL`,
      reqOptions
    )
      .then((response) => response.json())
      .then((json) => {
        setStandingsData(json);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <>
      {name === "UEFA Champions League" ? (
        <div className=" shadow-xl md:ml-0 ml-60">
          {StandingsData.standings?.map((standing) => (
            <div key={standing.id} className="my-0 uefa-card rounded-lg">
              <p className="ml-5 pt-4 font-semibold">{standing.group}</p>
              <table className="my-5">
                <TableHead />
                <tbody className="bg-white divide-y divide-gray-200 ">
                  {standing?.table?.map((table) => (
                    <>
                      <tr key={table.id} className="">
                        <td className="pl-5 py-4 text-base font-semibold">
                          <p>{table.position}</p>
                        </td>
                        <div className="flex items-center">
                          <img
                            src={table.team.crestUrl}
                            alt="team badge"
                            className="w-4 h-4 md:h-8 md:w-8"
                          />
                          <td className="pl-5 py-4 text-sm md:text-base font-semibold">
                            <p>{table.team.name}</p>
                          </td>
                        </div>
                        <td className="pl-5 py-4 text-sm md:text-base font-semibold">
                          <p>{table.playedGames}</p>
                        </td>
                        <td className="pl-5 py-4 text-sm md:text-base font-semibold">
                          <p>{table.won}</p>
                        </td>
                        <td className="pl-5 py-4 text-sm md:text-base font-semibold">
                          <p>{table.draw}</p>
                        </td>
                        <td className="pl-5 py-4 text-sm md:text-base font-semibold">
                          <p>{table.lost}</p>
                        </td>
                        <td className="pl-5 py-4 text-sm md:text-base font-semibold">
                          <p>{table.goalsFor}</p>
                        </td>
                        <td className="pl-5 py-4 text-sm md:text-base font-semibold">
                          <p>{table.goalsAgainst}</p>
                        </td>
                        <td className="pl-5 py-4 text-sm md:text-base font-semibold">
                          <p>{table.points}</p>
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      ) : (
        <table className="md:ml-0 ml-64 divide-y divide-gray-200">
                      <TableHead />

          <tbody className="bg-white divide-y divide-gray-200 ">
            {StandingsData?.standings?.map((standing) => (
              <>
                {standing.table.map((table) => (
                  <tr key={table.id} className="">
                    <td className="pl-5 py-4 text-base font-semibold">
                      <p>{table.position}</p>
                    </td>
                    <div className="flex items-center">
                      <img
                        src={table.team.crestUrl}
                        alt="team badge"
                        className="w-4 h-4 md:h-8 md:w-8"
                      />
                      <td className="pl-5 py-4 text-sm md:text-base font-semibold">
                        <p>{table.team.name}</p>
                      </td>
                    </div>
                    <td className="pl-5 py-4 text-sm md:text-base font-semibold">
                      <p>{table.playedGames}</p>
                    </td>
                    <td className="pl-5 py-4 text-sm md:text-base font-semibold">
                      <p>{table.won}</p>
                    </td>
                    <td className="pl-5 py-4 text-sm md:text-base font-semibold">
                      <p>{table.draw}</p>
                    </td>
                    <td className="pl-5 py-4 text-sm md:text-base font-semibold">
                      <p>{table.lost}</p>
                    </td>
                    <td className="pl-5 py-4 text-sm md:text-base font-semibold">
                      <p>{table.goalsFor}</p>
                    </td>
                    <td className="pl-5 py-4 text-sm md:text-base font-semibold">
                      <p>{table.goalsAgainst}</p>
                    </td>
                    <td className="pl-5 py-4 text-sm md:text-base font-semibold">
                      <p>{table.points}</p>
                    </td>
                  </tr>
                ))}
              </>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default StandingsTable;
