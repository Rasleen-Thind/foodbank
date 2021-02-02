/* src/App.js */
import React, { useState } from 'react'
import { FormGroup, Form, ControlLabel, FormControl, Button } from 'react-bootstrap';
import { API, graphqlOperation } from 'aws-amplify'
import { createDonor, createAddress, createContactDetails} from 'graphql/mutations';

var donorState = {};
var addressState = {};
var contactDetailState= {};

const DonorAddForm = () => {

    const [formState, setFormState] = useState({});
    function setInput(key, value) {
        setFormState({ ...formState, [key]: value })
    }

    async function addDonor() {
        try {
            addressState = {
                state : formState['state'],
                city : formState['city'],
                pincode : formState['pincode'],
                building_detail : formState['building_detail'],
                landmark : formState['landmark']
            }
            var address = await API.graphql(graphqlOperation(createAddress, { input: addressState}));
            console.log(address);
            contactDetailState = {
                phone_number : formState['phone_number'],
                email_address : formState['email_address'],
                contactDetailsAddressId : address['data']['createAddress']['id']
            };
            var contactDetail = await API.graphql(graphqlOperation(createContactDetails, { input: contactDetailState}));
            donorState = {
                name: formState['name'],
                amount: formState['amount'],
                note : formState['note'],
                donorContact_detailsId: contactDetail['data']['createContactDetails']['id']
           
            }
            console.log(donorState);
            var abc = await API.graphql(graphqlOperation(createDonor, { input: donorState }));
            console.log(abc);
        } catch (err) {
            console.log('error creating donor:', err)
        }
    }

    return (
        <Form>
            <FormGroup>
                <ControlLabel>Name</ControlLabel>
                <FormControl onChange={event => setInput('name', event.target.value)} placeholder="Name" />
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
                <ControlLabel>Amount</ControlLabel>
                <FormControl onChange={event => setInput('amount', event.target.value)} placeholder="Amount" />
            </FormGroup>
            <FormGroup>
                <ControlLabel>Note</ControlLabel>
                <FormControl onChange={event => setInput('note', event.target.value)} placeholder="note" />
            </FormGroup>
            <Button variant="primary" onClick={addDonor}>Create</Button>
        </Form>
    )
}

export default DonorAddForm;