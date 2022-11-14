import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";

interface ItemListProps {
  task: string;
  display: boolean;
  deleteIcon: React.ReactNode;
  func: (event: React.MouseEvent<HTMLButtonElement>) => void;
  toggleCheck: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const ItemList = (props: ItemListProps) => {
  const { task, display, deleteIcon, func, toggleCheck } = props;
  return (
    <div className="bg-blue-50 w-full p-2 rounded-lg text-indigo-400 font-medium flex items-center justify-between">
      <span className={`${display && "text-"}`}>{task}</span>
      <div className="flex items-center">
        <button onClick={(event) => toggleCheck(event)}>
          {display ? (
            <AiFillCheckCircle className="text-emerald-400 text-xl" />
          ) : (
            <AiFillCloseCircle className="text-rose-400 text-xl" />
          )}
        </button>
        <button
          onClick={(event) => func(event)}
          className="p-2 text-lg text-indigo-300 hover:text-rose-400"
        >
          {deleteIcon}
        </button>
      </div>
    </div>
  );
};
