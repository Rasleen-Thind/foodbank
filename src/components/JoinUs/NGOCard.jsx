import React from "react";
import Button from "components/CustomButton/CustomButton.jsx";
import { Modal} from "react-bootstrap";
import DistributorAddForm from "./DistributorAddForm";

function NGOCard() { 

    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
             <Button bsStyle="neutral" pullRight fill onClick={handleShow} >
                    Distributor Form
            </Button>
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title style={{ color: 'black' }}>Distributor</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ color: 'black' }}>
                    <DistributorAddForm/>
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
                If you are an NGO, a citizen group or even an individual
                 who is helping people with food, join hands with us. 
                 We will connect you to donors, volunteers and help seekers.
                </p>
            </div>
    );
}

export default NGOCard;