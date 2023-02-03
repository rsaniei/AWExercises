import { useContext } from "react";
type TaskProps = {
  task: {
    text: string;
  };
};

const Task = ({ task }: TaskProps) => {
  return (
    <div className="task">
      <h3>buy {task.text}</h3>
    </div>
  );
};

export default Task;
