import React, { Component } from "react";
import TaskForm from "./taskForm";
import { connect } from 'react-redux';
import { updateTask } from "../../../_actions/time-tracker/task-action";

class TaskRow extends Component {
  state={
    edit:false
  }
  handleSubmit = taskObj => {
    this.props.updateTask(taskObj)
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
            <td>{task.duration} hour</td>
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
const mapStateToProps = state =>({
  taskList:state.taskStore.tasks
})
const mapDispatchToProps=dispatch=>({
  updateTask:(obj) => dispatch(updateTask(obj))
})
export default connect(mapStateToProps,mapDispatchToProps)(TaskRow)