import React, { Component } from "react";
import { Link } from 'react-router-dom';
import authService from '../_utils/auth-service';

const linkArray = [
  {
    menuName: "Dashboard",
    menuLink: "#",
    icon: null,
    subMenu: null,
    permission: ['ADMIN', 'HR', 'EMPLOYEE']
  },
  {
    menuName: "Manage Employee",
    menuLink: "#",
    icon: "fas fa-user-tie mr-3 text-gray",
    permission: ['HR'],
    subMenu: [
      { subMenuLink: "/recuitmentType", subMenuName: "Recuitment Type" },
      { subMenuLink: "/designation", subMenuName: "Designation" },
    ]
  },
  {
    menuName: "Leave",
    menuLink: "#",
    icon: "fas fa-file-alt mr-3 text-gray",
    permission: ['HR', 'EMPLOYEE'],
    subMenu: [
      { subMenuLink: "/leaveDashboard", subMenuName: "Leave Dashboard" },
      { subMenuLink: "/requestLeave/calender", subMenuName: "Request Leave" },
      { subMenuLink: "/lieuLeave", subMenuName: "Lieu Leave" },
      { subMenuLink: "/leaveHistory", subMenuName: "Leave History" },
      { subMenuLink: "/carryforward", subMenuName: "Carry Forward" },
    ]
  },
  {
    menuName: "Manage Leave",
    menuLink: "#",
    icon: "fas fa-list mr-3 text-gray",
    permission: ['HR'],
    subMenu: [
      { subMenuLink: "/manageLeaveDashboard", subMenuName: "Leave Dashboard" },
      { subMenuLink: "/configleave", subMenuName: "Leave Types & Policies" },
      { subMenuLink: "/leaveAllocation", subMenuName: "Leave Allocation" },
      { subMenuLink: "/manageLeaveRequests", subMenuName: "Process Leave" },
      { subMenuLink: "/manageLeaveLeiuLeave", subMenuName: "Lieu Leave" },
      { subMenuLink: "/manageCarryForward", subMenuName: "Carry Forward" },
    ]
  },
  {
    menuName: "Manage User",
    menuLink: "#",
    icon: "fas fa-users-cog mr-3 text-gray",
    permission: ['ADMIN', 'HR'],
    subMenu: [
      { subMenuLink: "/manageRole", subMenuName: "Role" },
      { subMenuLink: "/manageUser", subMenuName: "User List" },
    ]
  },
  {
    menuName: "Settings",
    menuLink: "#",
    icon: "fas fa-cogs  mr-3 text-gray",
    permission: ['ADMIN', 'HR'],
    subMenu: [
      { subMenuLink: "/configurecalendar", subMenuName: "Configure Calendar" },
    ]
  },
]

class SideBar extends Component {
  state = {
    // role: '',
    role: 'HR',

  }
  componentDidMount() {
    let token = authService.getToken();
    let decodeToken = authService.decode(token);
    if (decodeToken !== null) {
      this.setState({
        role: decodeToken.role
      })
    }
  }

  renderList = (role) => {
    const renderlist = linkArray.map((linkData, index) => {
      if (linkData.permission.indexOf(role) > -1) {
        let pageid = "page" + index;
        let hashpage = "#" + pageid;

        if (linkData.subMenu == null) {
          return (<li className="sidebar-list-item"><a href={linkData.menuLink} className="sidebar-link text-muted"><i className="fas fa-home mr-3 text-gray"></i><span>{linkData.menuName}</span></a></li>)
        } else {
          return (
            //"fas fa-th-large mr-3 text-gray"
            <li className="sidebar-list-item"><a href="#" data-toggle="collapse" data-target={hashpage} aria-expanded="false" aria-controls={pageid} className="sidebar-link text-muted"><i className={linkData.icon}></i><span>{linkData.menuName}</span></a>
              <div id={pageid} className="collapse">
                <ul className="sidebar-menu list-unstyled border-left border-primary border-thick">
                  {
                    linkData.subMenu.map(submenu => (
                      <li className="sidebar-list-item"><Link to={submenu.subMenuLink} className="sidebar-link text-muted pl-lg-5">{submenu.subMenuName}</Link></li>
                    ))
                  }
                </ul>
              </div>
            </li>
          )
        }
      }
    })
    return renderlist;
  }
  render() {
    return (
      <div id="sidebar" className="sidebar py-3">
        <ul className="sidebar-menu list-unstyled">
          {this.renderList(this.state.role)}
        </ul>
      </div>
    )
  }
}
export default SideBar;