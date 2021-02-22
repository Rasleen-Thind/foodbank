import React, { Component } from "react";
import {
    Button,
    Row,
    Col
} from "react-bootstrap";
import { UserCard } from "components/UserCard/UserCard.jsx";
import amritesh from "assets/img/teammembers/amritesh.jpg";
import priyanshu from "assets/img/teammembers/priyanshu.jpg";
import priya from "assets/img/teammembers/priya.jpg";
import aashitha from "assets/img/teammembers/Aashitha.jpg";
import pravesh from "assets/img/teammembers/pravesh.jpg";
import karan from "assets/img/teammembers/karan.jpg";
import bratsun from "assets/img/teammembers/bratsun.jpg";

export class TeamMembers extends Component {
    render() {
        var teams = [
            {
                image: amritesh,
                name: "AMRITESH SRIVASTAVA",
                desc: "Amritesh is the project lead for Indian chapter of Foodbank and collaboration with URHope.",
                linkedin_url: "http://linkedin.com/in/jaketrent",
                twiter_url: "http://twitter.com/jaketrent",

            },
            {
                image: priyanshu,
                name: "PRIYANSHU BAJPAI",
                desc: "Priyanshu oversees the management of the URHope-FoodBank's roadmap to grow it as a platform.",
                linkedin_url: "http://linkedin.com/in/jaketrent",
                twiter_url: "http://twitter.com/jaketrent"
            },
            {
                image: priya,
                name: "PRIYA SHARMA",
                desc: "Head of Operations and Outreach",
                linkedin_url: "http://linkedin.com/in/jaketrent",
                twiter_url: "http://twitter.com/jaketrent",
            },
            {
                image: aashitha,
                name: "AASHITHA SWAMI",
                desc: "Contributer",
                linkedin_url: "http://linkedin.com/in/jaketrent",
                twiter_url: "http://twitter.com/jaketrent",
            },
            {
                image: pravesh,
                name: "PRAVESH MEHTA",
                desc: "Contributer",
                linkedin_url: "http://linkedin.com/in/jaketrent",
                twiter_url: "http://twitter.com/jaketrent",
            },
            {
                image: karan,
                name: "KARANVEER SINGH",
                desc: "Designer / Animator",
                linkedin_url: "http://linkedin.com/in/jaketrent",
                twiter_url: "http://twitter.com/jaketrent",
            },
            {
                image: bratsun,
                name: "MAX BRATSUN",
                desc: "Founder of FoodBank.co Bali Chapter",
                linkedin_url: "http://linkedin.com/in/jaketrent",
                twiter_url: "http://twitter.com/jaketrent",
            }];
        var teams_img1 = []
        for (var i = 0; i < 7; i++) {
            teams_img1.push(
                <div>
                    <Col md={3}>
                        <UserCard
                            bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
                            avatar={teams[i].image}
                            name={teams[i].name}
                            description={teams[i].desc}
                            jobtitle={teams[i].job_title}
                            socials={
                                <div>
                                    <Button simple>
                                        <i className="fa fa-facebook-square" />
                                    </Button>
                                    <Button simple>
                                        <i className="fa fa-twitter" />
                                    </Button>
                                    <Button simple>
                                        <i className="fa fa-google-plus-square" />
                                    </Button>
                                </div>
                            }
                        />
                </Col>
                    <Col md={1}> <p /></Col>
                    </div>
            );
        }
        return (
            <div>
                <Row> {teams_img1}</Row>
                </div>
        );
    }
}

export default TeamMembers;
