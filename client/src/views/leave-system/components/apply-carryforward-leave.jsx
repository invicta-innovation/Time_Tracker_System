import React, { Component } from 'react'
import MetricPill from '../../../commons/metric-pill';
import Card from "../../../commons/card";

import {Form,Col,Button} from 'react-bootstrap'
export default class ApplyCarryforwardLeave extends Component {
    render() {
        return (
            <section class="py-5">
            <div class="row">
                    
                    <div class="col-lg-12 mb-4">
                        <Card title="Carryforward Leave Apply">
                        
                 <div>
                   <Form>
                   <Form.Row>
                    <Form.Group as={Col} controlId="days">
                        <Form.Label>Avilable Days :</Form.Label>
                        <Form.Control readOnly/>
                        </Form.Group>
                      
                        
                        <Form.Group as={Col} controlId="days">
                        <Form.Label>Requested Days :</Form.Label>
                        <Form.Control type="Number"/>
                        </Form.Group>
                        
                        
                        <Form.Group as={Col} controlId="enddate">
                        <Form.Label>Start Date : </Form.Label>
                        <Form.Control type="date" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="enddate">
                        <Form.Label>End Date : </Form.Label>
                        <Form.Control type="date" />
                        </Form.Group>
                  

                    </Form.Row>
                    <Form.Row>
                        <div class="d-flex justify-content-center">
                        <Button variant="primary" type="submit">
                        Submit
                        </Button> 
                        </div>
                        </Form.Row>
                        
                    </Form> 
                    </div>
                    </Card>
                    </div>
               
                    </div>
                    </section>
        )
    }
}
