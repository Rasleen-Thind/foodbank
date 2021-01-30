/* src/App.js */
import React, { useState } from 'react'
import { FormGroup, Form, ControlLabel, FormControl, Button } from 'react-bootstrap';
import Select from 'react-select';
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { createCase , createAddress, createContactDetails, createHelpSeeker, createRequirement} from 'graphql/mutations';

const initialState = { address: '', description: '', amazon_wishlist_url: '' };

const statusOptions = [
    { value: 'PENDING', label: 'PENDING' },
    { value: 'VERIFIED', label: 'VERIFIED' },
    { value: 'APPROVED', label: 'APPROVED' },
    { value: 'REJECTED', label: 'REJECTED' }
];

const priorityOptions = [
    { value: 'HIGH', label: 'HIGH' },
    { value: 'LOW', label: 'LOW' },
    { value: 'MEDIUM', label: 'MEDIUM' }
];

var addressState = {};
var contactDetailState = {};

const CaseAddForm = () => {

    const [formState, setFormState] = useState(initialState)
    const [cases, setCases] = useState([])
    function setInput(key, value) {
        setFormState({ ...formState, [key]: value })
    }

    async function addCase() {
        try {
            // setShow(false)
            // if (!formState.amazon_wishlist_url || !formState.description) return
            // const caseState = { ...formState }
            alert(formState["description"]);
            console.log(formState["description"]);
            // setCases([caseState])
            // setFormState(initialState)
            addressState = {
                state : formState['state'],
                city : formState['city'],
                pincode : formState['pincode'],
                building_detail : formState['building_detail'],
                landmark : formState['landmark']
            }
           
            console.log(formState['landmark']);
            var address = await API.graphql(graphqlOperation(createAddress, { input: addressState}));
            contactDetailState = {
                phone_number : formState['phone_number'],
                email_address : formState['email_address'],
                address : address
            };
            var contactDetail = await API.graphql(graphqlOperation(createContactDetails, { input: contactDetailState}));
            // create address
            // create contact address
            // serach and create helseerker id
            // cvreate requirement
            // await API.graphql(graphqlOperation(createCase, { input: caseState }))
        } catch (err) {
            console.log('error creating case:', err)
        }
    }

    return (
        <Form>
            <FormGroup>
                <ControlLabel>Case Description</ControlLabel>
                <FormControl onChange={event => setInput('description', event.target.value)} placeholder="Description" />
            </FormGroup>
            <FormGroup>
                <ControlLabel>HelpSeeker Id</ControlLabel>
                <FormControl onChange={event => setInput('helpseeker', event.target.value)} placeholder="HelpSeeker" />
            </FormGroup>
            <FormGroup>
                <ControlLabel>Buildling/Flat no</ControlLabel>
                <FormControl onChange={event => setInput('building_detail', event.target.value)} placeholder="Building detail" />
            </FormGroup>
            <FormGroup>
                <ControlLabel>Landmark</ControlLabel>
                <FormControl onChange={event => setInput('landmark', event.target.value)} placeholder="LandMark" />
            </FormGroup>
            <FormGroup>
                <ControlLabel>State</ControlLabel>
                <FormControl onChange={event => setInput('state', event.target.value)} placeholder="state" />
            </FormGroup>
            <FormGroup>
                <ControlLabel>City</ControlLabel>
                <FormControl onChange={event => setInput('city', event.target.value)} placeholder="city" />
            </FormGroup>
            <FormGroup>
                <ControlLabel>PinCode</ControlLabel>
                <FormControl onChange={event => setInput('pincode', event.target.value)} placeholder="pincode" />
            </FormGroup>
            <FormGroup>
                <ControlLabel>Phone Number</ControlLabel>
                <FormControl onChange={event => setInput('phone_number', event.target.value)} placeholder="phone_number" />
            </FormGroup>
            <FormGroup>
                <ControlLabel>Email Address</ControlLabel>
                <FormControl onChange={event => setInput('email_address', event.target.value)} placeholder="email_address" />
            </FormGroup>
            <FormGroup>
                <ControlLabel>No of Adults</ControlLabel>
                <FormControl onChange={event => setInput('num_of_adults', event.target.value)} placeholder="Number of Adults" />
            </FormGroup>
            <FormGroup>
                <ControlLabel>No of Childrens</ControlLabel>
                <FormControl onChange={event => setInput('num_of_children', event.target.value)} placeholder="Number of children" />
            </FormGroup>
            <FormGroup>
                <ControlLabel>Wishlist url</ControlLabel>
                <FormControl onChange={event => setInput('whishlist_url', event.target.value)} placeholder="Amazon wishlist url" />
            </FormGroup>
            <FormGroup controlId="caseAddForm.ControlSelect1">
                <ControlLabel>Status</ControlLabel>
                <Select
                    onChange={selectedOption => setInput('status', selectedOption)}
                    options={statusOptions}
                />
            </FormGroup>
            <FormGroup controlId="caseAddForm.ControlSelect1">
                <ControlLabel>Priority</ControlLabel>
                <Select
                    onChange={selectedOption => setInput('priority', selectedOption)}
                    options={priorityOptions}
                />
            </FormGroup>
            <Button variant="primary" onClick={addCase}>Create</Button>
        </Form>
    )
}

export default CaseAddForm;