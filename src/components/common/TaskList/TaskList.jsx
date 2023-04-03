import React from "react";
import Task from "../Task/Task.jsx";
import "./TaskList.css";

function TaskList(props) {
  const {task} = props
  return (
    <div className="tasklist-container">
      <div className="tasklist-conatiner_tasklist">
        {task.map((eachTask, index) => (
          
          <Task
            index={index}
            task={eachTask}
            key={eachTask.key}
            text={eachTask.text}
            id={eachTask.id}
            isDone={eachTask.isDone}
            handleCheck={props.handleCheck}
            deleteTask={props.deleteTask}
            checkClass={props.checkClass}
            toggleClass={props.toggleClass}
          />
        ))}
      </div>
    </div>
  );
}

export default TaskList;
