import React, { Component } from 'react'

export default class CardButton extends Component {
    render() {
        return (
            <div class="card">
            <div class="card-header">
              <h3 class="h6 text-uppercase mb-0">{this.props.title}
              <div className="text-right">
              <button type="submit" class="btn btn-primary" data-toggle="tooltip" data-placement="bottom" title="Accept" onClick={this.handleShow}>Add Role</button>
              </div></h3>

            </div>
            <div class="card-body">
              {this.props.children}
            </div>
          </div>
        )
    }
}
