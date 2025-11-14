import React from "react";

const ShowItems = () => {
  return (
    <ul>
      <li
        className="pt-4 flex justify-center items-center my-4 border-2 border-gray-300 
          p-4 rounded-md shadow-md transform-3d gap-1 space-between width-50"
      >
        <div className="">ShowItems</div>
        <div>
          <button className="btn">Done</button>
          <button className="remove-button">Delete</button>
        </div>
      </li>
    </ul>
  );
};

export default ShowItems;
