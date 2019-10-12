import React, { Component } from 'react';

class Project extends Component {
    render() {
        return (
            <section class="py-3">

            <div class="card">
              <div class="d-flex justify-content-between card-header">
                <h3 class="h6 text-uppercase mb-0">Project</h3>
    
                <button
                  type="submit"
                  class="btn btn-info btn"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="add project"
                  btn-align="right"
                  onClick={()=>this.props.showModal(true)}
                >
                  + Project
            </button>
            
                {/* <ProjectModal /> */}
              </div>
              <div class="card-body">
                {/* <ProjectList /> */}
              </div>
            </div>
          </section>
        );
    }
}

export default Project;