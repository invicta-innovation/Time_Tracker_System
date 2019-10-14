import React, { Component } from "react";
import { Form, Table } from "react-bootstrap";
import TaskForm from "./taskForm";
import TaskRow from "./taskRow";
const tasks = [
  {
    id:1,
    projectName: "leave system",
    taskName: "request leave",
    description: "apply for a leave",
    duration: 3.0
  }
];
const c = 1;
class DailyTask extends Component {
  state = {
    edit: false,
    isAdd: false

  };
  handleSubmit=(taskObj)=>{
    tasks.push(taskObj);
    this.setState({ edit: false })
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
                <TaskForm task={task}  handleSubmit={this.handleSubmit}/>
              )
            )}
            {!this.state.isAdd ? (
              <tr>
                <button 
                 type="submit"
                 class="btn btn-info "
                onClick={() => this.setState({ isAdd: true })}>
                  Add
                </button>
              </tr>
            ) : (
              <TaskForm task={{}}  handleSubmit={(obj)=>this.handleSubmit(obj)}/>              
            )}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default DailyTask;
