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
  isAddUpdate=(status)=>{
    this.setState({ isAdd: status });
  }
  handlePush = (taskObj)=> {
    console.log(taskObj)
    this.isAddUpdate(false)
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
                class="btn btn-success btn-circle"
                onClick={() => this.setState({ isAdd: true })}
              >
                <i class="fa fa-plus" aria-hidden="true"/>
              </button>
            ) : (
              <TaskForm task={{}} handleSubmit={(obj) => this.handlePush(obj)}  isAddUpdate={(s)=>this.isAddUpdate(s)} isAdd={this.state.isAdd}/>
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
