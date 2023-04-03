import React from "react";
import "./All.css";
import Form from "../../common/Form/Form.jsx";
import TaskList from "../../common/TaskList/TaskList";

function All(props) {

  return (
    <div className="All-container">
      <Form task={props.task} addTask={props.addTask} addItem={props.addItem} />
        <TaskList
          isDone={props.isDone}
          task={props.task}
          handleCheck={props.handleCheck}
          deleteTask={props.deleteTask}
          checkClass={props.task.isCheck}
          toggleClass={props.toggleClass}
        />
    </div>
  );
}
export default All;
