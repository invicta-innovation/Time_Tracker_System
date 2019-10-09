import React, { Component } from 'react'
import RequestLieuLeaveData from '../components/lieu-request-data';
import { connect } from 'react-redux';
import { getLieuLeave } from '../../../_actions/lieuLeaveRequest-action';
import{formatDate}from'../../../_function/index'
class EmployeeLieuLeaveHistory extends Component {
    componentWillMount() {
        this.props.getLieuLeave();
    }
    render() {
        const lieuLeaveRequests = this.props.lieuLeaveRequests.map(lieuLeaveRequest =>
            <RequestLieuLeaveData key={lieuLeaveRequest.id} startDate={formatDate(lieuLeaveRequest.startDate)} 
            endDate={formatDate(lieuLeaveRequest.endDate)}
             noOfDays={lieuLeaveRequest.workedHours} 
             approvedBy={lieuLeaveRequest.userName} 
             reason={lieuLeaveRequest.reason} />)
        return (

            <div>
                <section class="py-3">

                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          
          <div class="col-lg-12 mt-2 mb-2">
                        {lieuLeaveRequests}
                        {/* <RequestLieuLeaveData startDate="2019-05-29" endDate="2019-05-30" noOfDays="04" approvedBy="Betsy" reason="Requirement Gathering yuihiioj ughijh ugihi gui guhij"/>
                <RequestLieuLeaveData startDate="2019-05-29" endDate="2019-05-30" noOfDays="03" approvedBy="Betsy" reason="Over Time"/> */}
                    </div>
                </section>

            </div>
        )

    }
}
const mapStateToProps = state => ({
    lieuLeaveRequests: state.lieuLeaveRequestStore.lieuLeaveRequests

});
const mapDispatchToProps = dispatch => ({
    getLieuLeave: () => dispatch(getLieuLeave())
})
export default connect(mapStateToProps, mapDispatchToProps)(EmployeeLieuLeaveHistory);
