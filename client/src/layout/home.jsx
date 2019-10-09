import React, { Component } from 'react'
import Card from '../components/commons/card';
import { Link } from 'react-router-dom';
export default class Home extends Component {
    render() {
        return (
        <div className="d-flex align-items-stretch">
          <div className="page-holder w-100 d-flex flex-wrap">
            <div className="container-fluid px-xl-5">
               <div className="d-flex justify-content-around">
               <Card>
                <Link to="/leave" className="sidebar-link text-muted pl-lg-5">Leave Management</Link>
            </Card>
            <Card>
            <Link to="/leave" className="sidebar-link text-muted pl-lg-5">Time Tracker Management</Link>
            </Card>
            <Card>
            <Link to="/leave" className="sidebar-link text-muted pl-lg-5">Employee Management</Link>
            </Card>
               </div>
            </div>
            
        </div>
      </div>
        )
    }
}