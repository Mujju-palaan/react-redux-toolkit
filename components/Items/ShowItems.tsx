'use client';
import { useSelector, useDispatch } from "react-redux";
import { toggleTask, deleteTask } from "@/app/redux-toolkit/TaskSlice";

const ShowItems = () => {
  const dispatch = useDispatch();
  const { items, filters } = useSelector((state:any) => state.task);

  return (
    <ul>
      {items.map((item: any) => (
        <li
          key={item.id}
          className="pt-4 flex justify-between items-center my-4 border-2
            border-gray-300 p-4 rounded-md shadow-md gap-4"
        >
          <div className={item.completed ? "line-through text-gray-400 italic" : ""}>
            {item.text}
          </div>

          <div className="flex gap-2">
            <button
              className="btn"
              onClick={() => dispatch(toggleTask(item.id))}
            >
              {item.completed ? "Undo" : "Done"}
            </button>

            <button
              className="remove-button"
              onClick={() => dispatch(deleteTask(item.id))}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ShowItems;
