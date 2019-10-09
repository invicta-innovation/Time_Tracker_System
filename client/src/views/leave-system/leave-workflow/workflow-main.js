import React, { Component } from "react";
import WorkflowList from "./workflowlist";
import WorkflowModal from "./workflow-modal";

export default class Workflow extends Component {
  constructor(props, context) {
    super(props, context);
  
  }


  render() {
    return (
      <section className="py-3">
        <div className="row">
          <div className="col-md-9">
            <WorkflowList />
          </div>
          <div className="col-md-3">
            <WorkflowModal addTask={this.addTask}/>
          </div>
        </div>
      </section>
    );
  }
}
