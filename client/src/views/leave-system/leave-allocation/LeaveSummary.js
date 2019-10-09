import React, { Component } from 'react';
import { Card } from "react-bootstrap";

export default class LeaveSummary extends Component {
    render() {
        return (
            <Card
            class="flex-item"
            bg="secondary"
            text="white"
            style={{
              width: "14rem",
              height: "8rem",
              marginLeft: "4rem",
              marginTop: "1rem"
            }}
          >
            <Card.Body>
              <Card.Title>Annual </Card.Title>
              Earning:10
              <br />
              Allocation:10
              <br />
            </Card.Body>
          </Card>
        )
    }
}
