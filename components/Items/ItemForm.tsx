"use client";
import { AddTask } from "@/app/redux-toolkit/TaskSlice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const ItemForm = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const handelSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    dispatch(AddTask(text));
    // console.log("Dispatching AddTask with text:", dispatch(AddTask(text)));
    // console.log("Submitted text:", text);
    setText("");
  };
  return (
    <div className="pt-8 justify-center items-center flex flex-col my-4">
      <form onSubmit={handelSubmit}>
        <input
          className="border-2 border-gray-300 p-2 rounded-l-md focus:outline-none"
          onChange={(e) => setText(e.target.value)}
          value={text}
          type="text"
          placeholder="Add a Task"
        />
        <button className="btn" type="submit">
          Add Item
        </button>
      </form>
    </div>
  );
};

export default ItemForm;
