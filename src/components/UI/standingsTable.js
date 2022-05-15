import React, { useState, useEffect } from "react";
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
              <table className="my-5">
                <thead className="">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider"
                    >
                      <div className="flex justify-between">
                        <p className="table-name"></p>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className=" py-3 text-left text-xs font-medium text-gray-500  tracking-wider"
                    >
                      <div className="flex justify-between">
                        <p className="text-base font-bold">Team</p>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      <div className="flex justify-between">
                        <p className="text-base font-bold">MP</p>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      <div className="flex justify-between">
                        <p className="text-base font-bold">W</p>
                      </div>
                    </th>{" "}
                    <th
                      scope="col"
                      className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      <div className="flex justify-between">
                        <p className="text-base font-bold">D</p>
                      </div>
                    </th>{" "}
                    <th
                      scope="col"
                      className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      <div className="flex justify-between">
                        <p className="text-base font-semibold">L</p>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      <div className="flex justify-between">
                        <p className="text-base font-bold">GF</p>
                      </div>
                    </th>{" "}
                    <th
                      scope="col"
                      className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      <div className="flex justify-between">
                        <p className="text-base font-bold">GA</p>
                      </div>
                    </th>{" "}
                    <th
                      scope="col"
                      className="px-5 py-3 text-left text-xs font-medium text-gray-500  tracking-wider"
                    >
                      <div className="flex justify-between">
                        <p className="text-base font-bold">Pts</p>
                      </div>
                    </th>
                  </tr>
                </thead>
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
          <thead className="">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider"
              >
                <div className="flex justify-between">
                  <p className="table-name"></p>
                </div>
              </th>
              <th
                scope="col"
                className=" py-3 text-left text-xs font-medium text-gray-500  tracking-wider"
              >
                <div className="flex justify-between">
                  <p className="text-base font-bold">Team</p>
                </div>
              </th>
              <th
                scope="col"
                className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                <div className="flex justify-between">
                  <p className="text-base font-bold">MP</p>
                </div>
              </th>
              <th
                scope="col"
                className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                <div className="flex justify-between">
                  <p className="text-base font-bold">W</p>
                </div>
              </th>{" "}
              <th
                scope="col"
                className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                <div className="flex justify-between">
                  <p className="text-base font-bold">D</p>
                </div>
              </th>{" "}
              <th
                scope="col"
                className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                <div className="flex justify-between">
                  <p className="text-base font-semibold">L</p>
                </div>
              </th>
              <th
                scope="col"
                className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                <div className="flex justify-between">
                  <p className="text-base font-bold">GF</p>
                </div>
              </th>{" "}
              <th
                scope="col"
                className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                <div className="flex justify-between">
                  <p className="text-base font-bold">GA</p>
                </div>
              </th>{" "}
              <th
                scope="col"
                className="px-5 py-3 text-left text-xs font-medium text-gray-500  tracking-wider"
              >
                <div className="flex justify-between">
                  <p className="text-base font-bold">Pts</p>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 ">
            {StandingsData?.standings?.map((standing) => (
              <>
                {standing.table.map(( table) => (
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
