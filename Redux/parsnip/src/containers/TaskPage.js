import React, { Component } from "react";
import TaskList from "../components/TaskList";
import "./TaskPage.css";

const TASK_STATUSES = ["Unstarted", "In Progress", "Completed"];

class TaskPage extends Component {
  state = {
    title: "",
    description: ""
  };

  onTitleChange = e => {
    this.setState({ title: e.target.value });
  };

  onDescriptionChange = e => {
    this.setState({ description: e.target.value });
  };

  resetForm() {
    this.setState({
      title: "",
      description: ""
    });
  }

  onCreateTask = e => {
    e.preventDefault();
    this.props.onCreateTask({
      title: this.state.title,
      description: this.state.description
    });
    this.resetForm();
  };

  statusChangeHandler = () => {

  }

  renderTaskLists() {
    const { tasks } = this.props;
    return TASK_STATUSES.map(status => {
      const statusTasks = tasks.filter(task => task.status === status);
      return <TaskList key={status} status={status} tasks={statusTasks} onStatusChange={this.props.onStatusChange}/>;
    });
  }

  render() {
    return (
      <div>
        <form className="task-list-form" onSubmit={this.onCreateTask}>
          <input
            className="full-width-input"
            onChange={this.onTitleChange}
            value={this.state.title}
            type="text"
            placeholder="title"
          />
          <input
            className="full-width-input"
            onChange={this.onDescriptionChange}
            value={this.state.description}
            type="text"
            placeholder="description"
          />
          <button className="button" type="submit">
            Save
          </button>
        </form>

        <div className="tasks">
          <div className="task-lists">{this.renderTaskLists()}</div>
        </div>
      </div>
    );
  }
}

export default TaskPage;
