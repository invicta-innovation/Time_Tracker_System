import React, { Component } from "react";
import TaskForm from "./taskForm";

export default class TaskRow extends Component {
  state={
    edit:false
  }
  handleSubmit = taskObj => {
    this.props.tasks.map(task => {
      if (task.id === taskObj.id) {
        return taskObj;
      }else{
        return task;
      }
    });
    this.setState({ edit: false });
  };
  render() {
    const task = this.props.task;
    return (
      <>
        {!this.state.edit ? (
          <tr>
            <td>{task.projectName}</td>
            <td>{task.taskName}</td>
            <td>{task.description}</td>
            <td>{task.duration}</td>
            <td>
              <button
                type="submit"
                class="btn btn-info "
                onClick={() => this.setState({ edit: true })}
              >
                Edit
              </button>
            </td>
          </tr>
        ) : (
          <TaskForm
            key={task.id}
            task={task}
            handleSubmit={obj => this.handleSubmit(obj)}
          />
        )}
      </>
    );
  }
}
