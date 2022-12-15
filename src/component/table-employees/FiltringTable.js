import React from "react";
import "./table.css";

const FiltringTable = ({ filter, setFilter }) => {
  return (
    <div className="search">
      <span>
        Search: {""}
        <input
          value={filter || ""}
          onChange={(e) => setFilter(e.target.value)}
        />
      </span>
    </div>
  );
};

export default FiltringTable;
