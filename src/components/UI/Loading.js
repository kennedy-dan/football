import React from "react";

const Loading = () => {
  return (
      <span className="flex h-24 w-24">
        <span className="animate-ping h-full w-full rounded-full bg-sky-400 opacity-75"></span>
        {/* <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span> */}
      </span>
  );
};

export default Loading;
