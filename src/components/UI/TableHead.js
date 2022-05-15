import React from "react";

const TableHead = () => {
  return (
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
  );
};

export default TableHead;
