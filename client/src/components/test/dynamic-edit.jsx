import React, { Component } from "react";

class DynamicEdit extends Component {
  state = { edit: false, value: "test" };
  render() {
    return (
      <>
        <label htmlFor="">name : </label>

        {!this.state.edit && this.state.value ? (
          <>
            <label
              style={{ cursor: "pointer" }}
              htmlFor=""
              onClick={() => {
                this.setState({ edit: true });
              }}
            >
              {this.state.value}
            </label>
          </>
        ) : (
          <>
            <input
              type="text"
              value={this.state.value}
              name=""
              id=""
              onChange={e => {
                this.setState({ value: e.currentTarget.value });
              }}
            />
            <button
              className="btn btn-sm btn-primary"
              onClick={() => {
                this.setState({ edit: false });
              }}
            >
              submit
            </button>
          </>
        )}
      </>
    );
  }
}

export default DynamicEdit;
