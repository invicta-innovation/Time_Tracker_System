import React, { Component } from "react";
import { Form } from "react-bootstrap";

export default class TaskForm extends Component {
  state = {
    id: null,
    projectName: null,
    taskName: null,
    description: null,
    duration: 0.5
  };
  componentWillMount() {
    this.setState({
      id: this.props.task.id,
      projectName: this.props.task.projectName,
      taskName: this.props.task.taskName,
      description: this.props.task.description,
      duration: this.props.task.duration
    });
  }
  handleSubmit = obj => {
    this.props.handleSubmit(obj);
    this.setState({
      id: null,
      projectName: "",
      taskName: "",
      description: "",
      duration: 0.5
    });
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <>
        <tr>
          <td>
            <Form.Control
              type="text"
              name="projectName"
              value={this.state.projectName}
              onChange={this.handleChange}
            />
          </td>
          <td>
            <Form.Control
              type="text"
              name="taskName"
              value={this.state.taskName}
              onChange={this.handleChange}
            />
          </td>
          <td>
            <Form.Control
              type="text"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </td>
          <td>
            <Form.Control
              type="number"
              name="duration"
              value={this.state.duration}
              onChange={this.handleChange}
              step={0.5}
              min={0.5}
              max={3.5}
            />
          </td>
          <td>
            <button
              type="submit"
              class="btn btn-info btn-circle"
              onClick={() => this.handleSubmit(this.state)}
            >
              <i class="fas fa-check" />
            </button>
            {this.props.isAdd ? (
              <>
                <button
                  type="submit"
                  class="btn btn-danger btn-circle"
                  onClick={() => this.props.isAddUpdate(false)}
                >
                  <i class="fas fa-times" />
                </button>
              </>
            ) : (
              <></>
            )}
          </td>
        </tr>
      </>
    );
  }
}
