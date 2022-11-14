import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { taskSchemaProps } from "../../schema/taskSchema";
import { TitleBlock } from "../ui/TitleBlock";
import { ItemList } from "../ui/ItemList";
import { AddTask } from "./AddTask";

import { BsFillTrashFill } from "react-icons/bs";

export const BlockTodoList = () => {
  const { tasks, setTasks } = useContext(AppContext);

  const deleteTask = (index: number) => {
    const newArray = [...tasks];
    newArray.splice(index, 1);
    setTasks(newArray);
  };

  const toggleCheck = (index: number, state: boolean) => {
    const newArray = [...tasks];
    newArray[index].display = !state;
    setTasks(newArray);
  };

  return (
    <div className="w-1/3 bg-blue-500 p-3 rounded-lg flex flex-col space-y-4 shadow-xl">
      <TitleBlock title="Manage your task !" />
      <AddTask />
      <div className="w-full border p-4 rounded-lg flex flex-col space-y-1">
        {tasks.length === 0 && (
          <p className="text-sm text-center text-blue-50 italic font-medium">
            No task yet
          </p>
        )}
        {tasks.length > 0 &&
          tasks.map((task: taskSchemaProps, index: number) => (
            <ItemList
              key={index}
              task={task.task}
              display={task.display}
              deleteIcon={<BsFillTrashFill />}
              func={() => deleteTask(index)}
              toggleCheck={() => toggleCheck(index, task.display)}
            />
          ))}
      </div>
    </div>
  );
};
