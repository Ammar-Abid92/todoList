import React from "react";
import DeleteIcon from "../../../assets/delete-icon.png";
import "./Task.css";

function Task(props) {
  const [specState, setSpecState] = React.useState(false)
  const reverseState = (spec) => {
    setSpecState(!spec.isCheck)
    spec.isCheck = !spec.isCheck
  }

  return (
    <div className="task-container">
      <div className="task-container_check">
        <input
          type="checkbox"
          id={props.id}
          checked={props.checkClass}
          onChange={props.handleCheck}
          onClick={()=>reverseState(props.task)}
        />
        <label
          htmlFor={props.id}
          className={specState ? "checked-item" : "unchecked-item"}
        >
        <span>{props.text}</span>
          
        </label>
      </div>
      <img src={DeleteIcon} alt="delete-icon" className="delete-icon" onClick={()=>props.deleteTask(props.id)} />
    </div>
  );
}

export default Task;
