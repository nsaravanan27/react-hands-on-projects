import React from "react";
import "./Task.css";

const TASK_STATUSES = ["Unstarted", "In Progress", "Completed"];

const Task = props => {
  return (
    <div className="task">
      <div className="task-title">
        <div> {props.task.title} </div>
        <select value={props.task.status} onChange={onStatusChange}>
          {TASK_STATUSES.map(status => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>
      <hr />
      <div className="task-desc"> {props.task.description} </div>
    </div>
  );
  function onStatusChange(e) {
    console.log(props.task.id, e.target.value);
    props.onStatusChange(props.task.id, e.target.value);
  }
};

export default Task;
