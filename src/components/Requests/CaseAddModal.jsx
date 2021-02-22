import { Image, Modal } from "react-bootstrap";
import homepage from "assets/img/blue-home-page.jpg";
import React, { Component } from "react";
import Button from "components/CustomButton/CustomButton.jsx";
import CaseAddForm from "./CaseAddForm";

var textStyle = {
    position: 'absolute',
    top: '20%',
    left: '5%'
};

function CaseAddModal() {

    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <>
                <Button bsStyle="info" pullRight fill onClick={handleShow}  >
                   New Case
            </Button>
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title style={{ color: 'black' }}>Create Case</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ color: 'black' }}>
                        <CaseAddForm />
                    </Modal.Body>
                    <Modal.Footer >
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>

                </Modal>
            </>
        </div>
            
    );
}

export default CaseAddModal;