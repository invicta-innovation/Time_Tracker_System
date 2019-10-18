import React, { Component } from "react";
import {  Table } from "react-bootstrap";
import TaskForm from "./taskForm";
import TaskRow from "./taskRow";
const tasks = [
  {
    id: 1,
    projectName: "leave system",
    taskName: "request leave",
    description: "apply for a leave",
    duration: 3.0
  },
  {
    id: 2,
    projectName: "leave",
    taskName: "request leave",
    description: "apply leave",
    duration: 2.5
  }
];
const c = 1;
class DailyTask extends Component {
  state = {
    isAdd: false
  };
  handlePush = taskObj => {
    tasks.push(taskObj);
    this.setState({ isAdd: false });
  };
  
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
            {tasks.map(task =>(
                <TaskRow
                  tasks={tasks}
                  key={task.id}
                  task={task}
                />
              )
            )}
            {!this.state.isAdd ? (
              // <tr>
              <button
                type="submit"
                class="btn btn-info "
                onClick={() => this.setState({ isAdd: true })}
              >
                Add
              </button>
            ) : (
              // </tr>
              <TaskForm task={{}} handleSubmit={obj => this.handlePush(obj)} />
            )}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default DailyTask;
