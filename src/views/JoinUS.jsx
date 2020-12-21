import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";

import  {JCard } from "components/Card/JoinCardUI";

class JoinUS extends Component {
  render() {
    return (
      <div className="content">
      <Grid fluid>
        <h2><b>
            How we can help you?
        </b></h2>
        <p>URHope-Foodbank is a unified platform which connects volunteers, donors, help seekers & food distribution initiatives all over India</p>

        <Row>
            <Col lg={5} sm={7}>
            <JCard 
                icon={<i className="pe-7s-mail" />}
                title="Request for food"
                description="Fill a short form and our volunteers will do their best to help you."
            />
            </Col>

            <Col lg={5} sm={7}>
            <JCard 
                icon={<i className="pe-7s-add-user" />}
                title="Sign up as a donor"
                description="We will contact you if someone needs help & no other NGO or food distribution initiative is able to provide support."
            />
            </Col>    

        </Row>

        <Row>
            <Col lg={5} sm={7}>
            <JCard 
                icon={<i className="pe-7s-users" />}
                title="Volunteer"
                description="Sign up as volunteer and help them make a difference."
            />
            </Col>

            <Col lg={5} sm={7}>
            <JCard 
                icon={<i className="pe-7s-user-female" />}
                title="Food distribution initiative"
                description="Sign up with URHope-FoodBank.We connect you to donors, volunteers and help seekers."
            />
            </Col>

        </Row>

        </Grid>

        </div>


    );
  }
}

export default JoinUS;