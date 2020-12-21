import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

export class JCard extends Component {
    render() {
    return(
        <div className="card card-stats">
            <div className="content">
            <Row>
                <Col xs={100}>
                    <div className="icon-big text-center icon-warning">
                        {this.props.icon}
                    </div>
                </Col>

                <Col xs={15}>
                    <div className="text-center">
                        <h3><b>{this.props.title}</b></h3>
                    </div>
                </Col>  

            </Row>

            <Row>
                <Col xs={12}>
                <div className="text-center">
                        <p>{this.props.description}</p>
                        <a href="#" className="btn btn-outline-success">Go to form</a>
                </div>
                </Col>

            </Row>
            </div>
        </div>

    );
}
}

export default JCard;