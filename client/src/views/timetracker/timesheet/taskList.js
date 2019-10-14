import React, { Component } from "react";
import { Form, Table } from "react-bootstrap";
import TaskForm from "./taskForm";
import TaskRow from "./taskRow";
const tasks = [
  {
    projectName: "leave system",
    taskName: "request leave",
    description: "apply for a leave",
    duration: 3.0
  }
];
class DailyTask extends Component {
  state = {
    edit: false,
    isAdd: false

  };
  handleEdit=()=>{
     this.setState({ edit: true })
  }
  render() {
    return (
      <div>
        <Table className="table table-striped table-hover card-text">
          <thead>
            <tr>
              <th>Project Name</th>
              <th>Task Name</th>
              <th>Description</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map(task =>
              !this.state.edit ? (
               <TaskRow task={task} handleEdit={()=>this.setState({ edit: true })}/>
              ) : (
                <TaskForm task={task}  handleSubmit={()=>this.setState({ edit: false })}/>
              )
            )}
            {!this.state.isAdd ? (
              <tr>
                <button onClick={() => this.setState({ isAdd: true })}>
                  Add
                </button>
              </tr>
            ) : (
              <TaskForm task={{}}  handleSubmit={()=>this.setState({ isAdd: false })}/>              
            )}
          </tbody>
        </Table>
        <a>{this.props.selectedDate}</a>
        <button onClick={this.props.handleClose}>close</button>
      </div>
    );
  }
}

export default DailyTask;
