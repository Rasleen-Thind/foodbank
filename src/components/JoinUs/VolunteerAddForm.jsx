/* src/App.js */
import React, { useState } from 'react'
import { FormGroup, Form, ControlLabel, FormControl, Button } from 'react-bootstrap';
import Select from 'react-select';
import { API, graphqlOperation } from 'aws-amplify'
import {createAddress, createContactDetails, createVolunteer} from 'graphql/mutations';

const skillOptions = [
    { value: 'Marketing', label: 'Marketing and Promotion' },
    { value: 'Online Volunteer', label: 'Online volunteer - Connect help seekers to NGOs and donors' },
    { value: 'Digital Volunteer', label: 'Digital volunteer - share our message - once per week' },
    { value: 'Product management', label: 'Product management' },
    { value: 'Social media management', label: 'Social media management' },
    { value: 'Web Development', label: 'Web Development' },
    { value: 'Others', label: 'Others' }
];

const languageOptions = [
    { value: 'Bengali', label: 'Bengali' },
    { value: 'English', label: 'English' },
    { value: 'Hindi', label: 'Hindi' },
    { value: 'Marathi', label: 'Marathi' },
    { value: 'Punjabi', label: 'Punjabi' },
    { value: 'Gujrati', label: 'Gujrati' },
    { value: 'Telugu', label: 'Telugu' },
    
];

var addressState = {};
var contactDetailState = {};
var volunteerState = {};

const VolunteerAddForm = () => {

    const [formState, setFormState] = useState({})
    function setInput(key, value) {
        setFormState({ ...formState, [key]: value })
    }

    async function addVolunteer() {
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
            console.log(contactDetail);
            volunteerState = {
                name: formState['name'],
                skill_type: formState['skill_type']['value'],
                language: formState['language']['value'],
                volunteerContact_detailsId: contactDetail['data']['createContactDetails']['id'],
                num_of_hrs_per_week: formState['num_of_hrs_per_week'],
                note: formState['note'],
            }
            console.log(volunteerState);
            var abc = await API.graphql(graphqlOperation(createVolunteer, { input: volunteerState }));
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
                <ControlLabel>Availability per week</ControlLabel>
                <FormControl onChange={event => setInput('num_of_hrs_per_week', event.target.value)} placeholder="num_of_hrs_per_week" />
            </FormGroup>
            <FormGroup controlId="caseAddForm.ControlSelect1">
                <ControlLabel>Skills</ControlLabel>
                <Select
                    onChange={selectedOption => setInput('skill_type', selectedOption)}
                    options={skillOptions}
                />
            </FormGroup>
            <FormGroup>
                <ControlLabel>Language</ControlLabel>
                <Select
                    onChange={selectedOption => setInput('language', selectedOption)}
                    options={languageOptions}
                />
            </FormGroup>
            <FormGroup>
                <ControlLabel>Note</ControlLabel>
                <FormControl onChange={event => setInput('note', event.target.value)} placeholder="note" />
            </FormGroup>
            <Button variant="primary" onClick={addVolunteer}>Create</Button>
        </Form>
    )
}

export default VolunteerAddForm;