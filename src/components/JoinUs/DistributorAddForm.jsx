/* src/App.js */
import React, { useState } from 'react'
import { FormGroup, Form, ControlLabel, FormControl, Button } from 'react-bootstrap';
import Select from 'react-select';
import { API, graphqlOperation } from 'aws-amplify'
import {createAddress, createContactDetails, createDistributor} from 'graphql/mutations';

const requestOptions = [
    { value: 'cooked_meal', label: 'Cooked Meal' },
    { value: 'dry_ration', label: 'Dry Ration' }
];

var addressState = {};
var contactDetailState = {};
var distributorState = {};

const DistributorAddForm = () => {

    const [formState, setFormState] = useState({})
    function setInput(key, value) {
        setFormState({ ...formState, [key]: value })
    }

    async function addDistributor() {
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
            distributorState = {
                name: formState['name'],
                request_type: formState['request_type']['value'],
                caseContact_detailsId: contactDetail['data']['createContactDetails']['id'],
                num_of_hrs_per_week: formState['num_of_hrs_per_week'],
                note: formState['note'],
                cases_per_week: formState['cases_per_week'],
                num_of_volunteers : formState['num_of_volunteers'],
                link : formState['link']

            }
            console.log(volunteerState);
            var abc = await API.graphql(graphqlOperation(createDistributor, { input: distributorState }));
            console.log(abc);
        } catch (err) {
            console.log('error creating volunteer:', err)
        }
    }

    return (
        <Form>
            <FormGroup>
                <ControlLabel>Name</ControlLabel>
                <FormControl onChange={event => setInput('name', event.target.value)} placeholder="Description" />
            </FormGroup>
            <FormGroup>
                <ControlLabel>Tell Us about yourself</ControlLabel>
                <FormControl onChange={event => setInput('note', event.target.value)} placeholder="note" />
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
            <FormGroup controlId="caseAddForm.ControlSelect1">
                <ControlLabel>Request Type</ControlLabel>
                <Select
                    onChange={selectedOption => setInput('request_type', selectedOption)}
                    options={requestOptions}
                />
            </FormGroup>
            <FormGroup>
                <ControlLabel>Num of cases per week</ControlLabel>
                <FormControl onChange={event => setInput('cases_per_week', event.target.value)} placeholder="Num of cases per week" />
            </FormGroup>
            <FormGroup>
                <ControlLabel>Num of Volunteers</ControlLabel>
                <FormControl onChange={event => setInput('num_of_volunteers', event.target.value)} placeholder="Num of Volunteers in your organisation" />
            </FormGroup>
            <FormGroup>
                <ControlLabel>Donation Link</ControlLabel>
                <FormControl onChange={event => setInput('link', event.target.value)} placeholder="Please add link to your donation page." />
            </FormGroup>
            <Button variant="primary" onClick={addDistributor}>Create</Button>
        </Form>
    )
}

export default DistributorAddForm;