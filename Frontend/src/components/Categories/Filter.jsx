import React from "react";

const Filter = () => {
  return (
    <div className="mb-6">
      <h4 className="text-xl font-semibold mb-2">Filter by Price</h4>
      <ul className="space-y-2">
        <li>
          <input type="checkbox" className="mr-2" /> $100 - $250
        </li>
        <li>
          <input type="checkbox" className="mr-2" /> $250 - $500
        </li>
        <li>
          <input type="checkbox" className="mr-2" /> $750 - $1,000
        </li>
        <li>
          <input type="checkbox" className="mr-2" /> $1,000 - $1,500
        </li>
      </ul>
      <br />
      <div className="mb-6">
        <h4 className="text-xl font-semibold mb-2">Filter by Rating</h4>
        <ul className="space-y-2">
          <li>
            <input type="checkbox" className="mr-2" />{" "}
            <span className="text-yellow-500">⭐</span>
          </li>
          <li>
            <input type="checkbox" className="mr-2" />{" "}
            <span className="text-yellow-500">⭐⭐</span>
          </li>
          <li>
            <input type="checkbox" className="mr-2" />{" "}
            <span className="text-yellow-500">⭐⭐⭐</span>
          </li>
          <li>
            <input type="checkbox" className="mr-2" />{" "}
            <span className="text-yellow-500">⭐⭐⭐⭐</span>
          </li>
          <li>
            <input type="checkbox" className="mr-2" />{" "}
            <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Filter;
