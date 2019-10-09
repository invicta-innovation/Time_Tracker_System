import React, { Component } from "react";
import ManageRequestLieuLeave from "./components/manage-request-lieu-leave";
import ManageLieuLeaveRequestHistory from "./components/manage-lieu-leave-request-history";

export default class LieuLeave extends Component {
  render() {
    return (
      <div>
        <section class="py-5">
          <nav>
            <div
              class="nav nav-pills flex-column flex-sm-row"
              id="nav-tab"
              role="tablist"
            >
              <a
                class="flex-sm-fill text-sm-center nav-link active"
                id="nav-home-tab"
                data-toggle="tab"
                href="#nav-home"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
              >
                Lieu Leave Request
              </a>
              <a
                class="flex-sm-fill text-sm-center nav-link"
                id="nav-profile-tab"
                data-toggle="tab"
                href="#nav-profile"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
                Lieu Leave Request History
              </a>
            </div>
          </nav>

          <div class="tab-content" id="nav-tabContent">
            <div
              class="tab-pane fade show active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <ManageRequestLieuLeave />
            </div>
            <div
              class="tab-pane fade"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              <ManageLieuLeaveRequestHistory />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
