import React from 'react';
import Task from './Task/Task';
import "./TaskList.css";

const TaskList = (props) => {
    return (
        <div className="task-list">
          <div className="task-list-title">
            <strong>{props.status}</strong>
          </div>
          {props.tasks.map(task => (
            <Task key={task.id} task={task} onStatusChange={props.onStatusChange}/>
          ))}
        </div>
      );
}
 
export default TaskList;