import { Image , Modal} from "react-bootstrap";
import homepage from "assets/img/blue-home-page.jpg";
import React, { Component } from "react";
import Button from "components/CustomButton/CustomButton.jsx";
import CaseAddForm from "./Requests/CaseAddForm";
import DonorAddForm from "./Donor/DonorAddForm";
import RequestFoodForm from "./RequestFoodForm";

var textStyle = {
    position: 'absolute',
    top: '20%',
    left: '5%'
};

function DashboardImage() { 

    const [show, setShow] = React.useState(false);
    const [help_show, setHelpShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleHelpClose = () => setHelpShow(false);
    const handleHelpShow = () => setHelpShow(true);

    return (
        <div style={{ width: 'auto' }}>
            <Image
                style={{ backgroundSize: 'cover', width: "100%", height: "400px", marginTop: "-10px" }} responsive
                src={homepage}>
            </Image>
            <div style={textStyle}>
                <div >
                    <div style={{ fontSize: "25px"}}>
                            URHope-Foodbank is a unified platform which connects food distribution <br/>initiatives,
                            volunteers, donors and help seekers all over India
                        </div>
                    <div style={{ marginTop: "60px" }}>
                        <>
                            <Button bsStyle="warning" pullLeft fill onClick={handleShow} >
                                Request Food
                        </Button>
                            <Modal
                                show={show}
                                onHide={handleClose}
                                backdrop="static"
                                keyboard={false}
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title style={{ color: 'black' }}> Request for Food</Modal.Title>
                                </Modal.Header>
                                <Modal.Body style={{ color: 'black' }}>
                                    <RequestFoodForm />
                                </Modal.Body>
                                <Modal.Footer >
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                            </>
                        &emsp;
                        <>
                            <Button bsStyle="neutral" pullLeft fill onClick={handleHelpShow} >
                                I want to help
                        </Button>
                            <Modal
                                show={help_show}
                                onHide={handleHelpClose}
                                backdrop="static"
                                keyboard={false}
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title style={{ color: 'black' }}>Donor</Modal.Title>
                                </Modal.Header>
                                <Modal.Body style={{ color: 'black' }}>
                                <DonorAddForm />
                                </Modal.Body>
                                <Modal.Footer >
                                    <Button variant="secondary" onClick={handleHelpClose}>
                                        Close
                                    </Button>
                                </Modal.Footer>

                            </Modal>
                            </>
                        </div>
                    </div>
                </div>
        </div>
                
    );
}

export default DashboardImage;