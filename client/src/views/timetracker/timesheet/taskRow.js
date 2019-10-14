import React, { Component } from "react";

export default class TaskRow extends Component {
  render() {
    const task = this.props.task;
    return (
      <>
        <tr>
          <td>{task.projectName}</td>
          <td>{task.taskName}</td>
          <td>{task.description}</td>
          <td>{task.duration}</td>
          <td>
            <button 
             type="submit"
              class="btn btn-info " 
              onClick={this.props.handleEdit}>Edit</button>
          </td>
        </tr>
      </>
    );
  }
}
