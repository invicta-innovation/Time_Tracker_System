import React, { Component } from "react";
import Card from "../../commons/card";
import Designation from "./manage-designation/designation";
export default class ManageDesignation extends Component {
  render() {
    return (
      <div>
        <section class="py-3">
          {/* <Card title="Designations"> */}
            <div className="row">
              <div className="col-md-12">
                <Designation />
              </div>
            </div>
          {/* </Card> */}
        </section>
      </div>
    );
  }
}
