import React from "react";
import Button from "components/CustomButton/CustomButton.jsx";
import { Modal} from "react-bootstrap";

function VolunteerCard() { 
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div>
            <Button bsStyle="neutral" pullRight fill onClick={handleShow} >
                    Sign Up
            </Button>
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title style={{ color: 'black' }}>Volunteer</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ color: 'black' }}>
                    "Volunteer"
                    </Modal.Body>
                    <Modal.Footer >
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>

                </Modal>
                <br/>
            <p style={{ textAlign: "center" }}>
                <br />
                Sign up as a volunteer and help make a difference. 
                You can either volunteer with us directly (in resolving cases,
                 tech management of the portal, social media management etc.), 
                 or we can get you in touch with any of our partner organisations 
                 if they need a volunteer.
                </p>
            </div>
    );
}

export default VolunteerCard;