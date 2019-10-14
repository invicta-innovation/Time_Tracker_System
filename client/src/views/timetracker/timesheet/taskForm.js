import React, { Component } from 'react'
import { Form, Table } from "react-bootstrap";

export default class TaskForm extends Component {
    state={
        projectName:null,
        taskName:null,
        description:null,
        duration:null
    }
    componentWillMount(){
        this.setState({
        projectName:this.props.task.projectName,
        taskName:this.props.task.taskName,
        description:this.props.task.description,
        duration:this.props.task.duration
        })
    }
    render() {
        return (
            <>
                <tr>
                  <td>
                    <Form.Control
                      type="text"
                      name="projectName"
                      value={this.state.projectName}
                    />
                  </td>
                  <td>
                    <Form.Control
                      type="text"
                      name="taskName"
                      value={this.state.taskName}
                    />
                  </td>
                  <td>
                    <Form.Control
                      type="text"
                      name="description"
                      value={this.state.description}
                    />
                  </td>
                  <td>
                    <Form.Control
                      type="number"
                      name="duration"
                      value={this.state.duration}
                      step={0.5}
                      min={0.5}
                      max={3.5}
                    />
                  </td>
                  <td>
                    <button onClick={this.props.handleSubmit}>
                      Save
                    </button>
                  </td>
                </tr>
            </>
        )
    }
}
