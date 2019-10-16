import React, { Component } from 'react';
import { connect } from 'react-redux';
import {showModal,fetchProject} from '../../../_actions/company/project-action';

class ProjectList extends Component {
    componentWillMount(){
        this.props.getProjects();
      }
    render() {
        return (
            <div>
                <table className="table table-striped table-hover card-text">
            <thead>
              <tr>
                <th>Id</th>
                <th>Project Name</th>
                <th>Started Date</th>
                <th>Finished Date</th>
                <th>Description</th>
                <th>Project Status</th>
              </tr>
            </thead>
            <tbody>
              {this.props.projects.map(project => (
                <tr key={project.id}>
                  <td>{project.id}</td>
                  <td>{project.projectName}</td>
                  <td>{project.startedDate}</td>
                  <td>{project.finishedDate}</td>
                  <td>{project.description}</td>
                  <td>{project.projectStatus}</td>

                  <td><button className="btn btn-info btn" onClick={()=>this.props.showModal(project)}>edit</button></td>
                </tr>
              ))}
              
            </tbody>
          </table>
            </div>
        );
    }
}

const mapStateToProps = state =>({
    projects:state.projectStore.projects
  })
  const mapDispatchToProps=dispatch=>({
    getProjects:()=>dispatch(fetchProject()),
    showModal: (project)=> dispatch(showModal({action:'EDIT',show:true,title:'Update Project'},project))
  })
export default connect(mapStateToProps,mapDispatchToProps)(ProjectList)