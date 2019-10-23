import React, { Component } from "react";
import {  Table } from "react-bootstrap";
import TaskForm from "./taskForm";
import TaskRow from "./taskRow";
import { connect } from 'react-redux';
import { fetchTasks, createTask } from "../../../_actions/time-tracker/task-action";
class DailyTask extends Component {
  state = {
    isAdd: false
  };
  handlePush = taskObj => {
    console.log(taskObj)
    this.setState({ isAdd: false });
    this.props.createTask(taskObj)
  };
  componentWillMount(){
    this.props.getTasks()
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
            {this.props.taskList.map(task =>(
                <TaskRow
                  tasks={this.props.taskList}
                  key={task.id}
                  task={task}
                />
              )
            )}
            {!this.state.isAdd ? (
              <button
                type="submit"
                class="btn btn-info "
                onClick={() => this.setState({ isAdd: true })}
              >
                Add
              </button>
            ) : (
              <TaskForm task={{}} handleSubmit={obj => this.handlePush(obj)} />
            )}
          </tbody>
        </Table>
      </div>
    );
  }
}
const mapStateToProps = state =>({
  taskList:state.taskStore.tasks
})
const mapDispatchToProps=dispatch=>({
 getTasks:()=>dispatch(fetchTasks()),
 createTask:(obj)=>dispatch(createTask(obj))
})
export default connect (mapStateToProps,mapDispatchToProps)(DailyTask);
