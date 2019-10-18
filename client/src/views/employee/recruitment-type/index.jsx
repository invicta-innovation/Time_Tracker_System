import React, { Component } from 'react'
import RecruitmentTypeModal from './recruitment-type-modal';
import RecruitmentTypeList from './recruitment-type-list';
import { connect } from 'react-redux';
import { showModal } from '../../../_actions/employee/recruitment-type-action';

class RecruitmentType extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<section class="py-3">

<div class="card">
  <div class="d-flex justify-content-between card-header">
	<h3 class="h6 text-uppercase mb-0">Recruitment Type</h3>

	<button
	  type="submit"
	  class="btn btn-info btn"
	  data-toggle="tooltip"
	  data-placement="bottom"
	  title="addRecuitmentType"
	  btn-align="right"
	  onClick={()=>this.props.onModalShow(true)}
	  >
	  + Recruitment Type
</button>

<RecruitmentTypeModal/>
  </div>
  <div class="card-body">
	<RecruitmentTypeList/>
  </div>
</div>
</section>
);
}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onModalShow:(showstatus)=>dispatch(showModal({action:'ADD',show:showstatus,title:'Add Recruitment Type',buttonName:'Save'}))
	}
}

export default connect(null, mapDispatchToProps)(RecruitmentType);
