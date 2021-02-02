import React, { Component } from "react";
import {
  Grid,
  Row,
  Col
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import VolunteerCard from "components/JoinUs/VolunteerCard";
import NGOCard from "components/JoinUs/NGOCard";
import ProcessCard from "components/JoinUs/ProcessCard";

class JoinUs extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={6}>
              <Card
                style={{textAlign : "center", }}
                title="Volunteer"
                content={
                  <VolunteerCard />
                }
              />
            </Col>
            <Col md={6}>
              <Card
                title="Food distribution initiative"
                content={
                  <NGOCard />
                }
              />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
            <Card
            title="Our Process"
                content={
              <ProcessCard />
            }
              />
            </Col>
            </Row>
        </Grid>
      </div>
    );
  }
}

export default JoinUs;
