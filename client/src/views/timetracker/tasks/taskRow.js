import React, { Component } from "react";
import TaskForm from "./taskForm";
import { connect } from 'react-redux';
import { updateTask } from "../../../_actions/time-tracker/task-action";
import { formatDate } from "@fullcalendar/core";

class TaskRow extends Component {
  state={
    edit:false
  }
  handleSubmit = taskObj => {
    this.props.updateTask(taskObj)
    this.setState({ edit: false });
  };
  render() {
    const today = formatDate(new Date())
    console.log(today)
    console.log(formatDate(this.props.selectedDate))
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
             {
               (formatDate(today) < formatDate(this.props.selectedDate)) ?
             (<button
                type="submit"
                class="btn btn-success btn-circle"
                onClick={() => this.setState({ edit: true })}
              >
               <i class="fas fa-pen-fancy" />
              </button>):(<></>)
            }
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