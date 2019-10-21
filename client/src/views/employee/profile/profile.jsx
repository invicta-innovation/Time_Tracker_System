import React, { Component } from 'react';
import ProfileModal from './profile-modal';
import ProfileList from './profile-list';


class Profile extends Component {
  render() {
    return (
      <section class="py-3">

        <div class="card">
          <div class="d-flex justify-content-between card-header">
            <h3 class="h6 text-uppercase mb-0">Profile</h3>

            <button
              type="submit"
              class="btn btn-info btn"
              data-toggle="tooltip"
              data-placement="bottom"
              title="add designation"
              onClick={() => this.props.showModal(true)}
            > Add Profile
            </button>

            <ProfileModal />
          </div>
          <div class="card-body">
            <ProfileList />
          </div>
        </div>
      </section>
    );
  }
}

export default Profile;