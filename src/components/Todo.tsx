import { FaCheck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

type TodoType = {
  id: string;
  title: string;
  completed: boolean;
};

type TodoProps = {
  todo: TodoType;
  deleteTodo: (id: string) => boolean;
  toggleComplete: (id: string) => boolean;
};
const Todo = ({ todo, deleteTodo, toggleComplete }: TodoProps) => {
  return (
    <li>
      <span>{todo.title}</span>
      <div>
        <IoClose className="close_btn" onClick={deleteTodo} />
        <FaCheck />
      </div>
    </li>
  );
};

export default Todo;
