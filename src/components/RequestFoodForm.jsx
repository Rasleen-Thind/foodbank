/* src/App.js */
import React, {useState } from 'react'
import { FormGroup, Form, ControlLabel, FormControl, Button} from 'react-bootstrap';
import { API, graphqlOperation } from 'aws-amplify'
import Select from 'react-select';
import {createAddress, createContactDetails, createRequest} from 'graphql/mutations';

const requestOptions = [
    { value: 'cooked_meal', label: 'Cooked Meal' },
    { value: 'dry_ration', label: 'Dry Ration' }
];

const requestForOptions = [
    { value: 'self', label: 'For Self' },
    { value: 'someone_else', label: 'For Someone Else' }
];

var addressState = {};
var contactDetailState = {};
var requestState = {};

const RequestFoodForm = () => {

    const [formState, setFormState] = useState({})

    function setInput(key, value) {
        setFormState({ ...formState, [key]: value })
    }

    async function addRequest() {
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
            requestState = {
                name: formState['name'],
                num_of_adults: formState['num_of_adults'],
                num_of_children: formState['num_of_children'],
                details : formState['details'],
                request_type: formState['request_type']['value'],
                help_with: formState['help_with']['value'],
                requestContact_detailsId: contactDetail['data']['createContactDetails']['id']
           
            }
            console.log(requestState);
            var abc = await API.graphql(graphqlOperation( createRequest, { input: requestState }));
            console.log(abc);
        } catch (err) {
            console.log('error creating donor:', err)
        }
    }

    return (
        <Form>
            <FormGroup>
                <ControlLabel>Name</ControlLabel>
                <FormControl onChange={event => setInput('name', event.target.value)} placeholder= "Name"/>
            </FormGroup>
            <FormGroup>
                <ControlLabel>Detail</ControlLabel>
                <FormControl onChange={event => setInput('details', event.target.value)} placeholder="Any additional information regarding your case" />
            </FormGroup>
            <FormGroup controlId="caseAddForm.ControlSelect1">
                <ControlLabel>Help With</ControlLabel>
                <Select
                    onChange={selectedOption => setInput('help_with', selectedOption)}
                    options={requestOptions}
                />
            </FormGroup>
            <FormGroup>
                <ControlLabel>Request For</ControlLabel>
                <Select
                    onChange={selectedOption => setInput('request_type', selectedOption)}
                    options={requestForOptions}
                />
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
                <FormControl onChange={event => setInput('num_of_adults', event.target.value)} placeholder="Number of adults" />
            </FormGroup>
            <FormGroup>
                <ControlLabel>No of Childrens</ControlLabel>
                <FormControl onChange={event => setInput('num_of_children', event.target.value)} placeholder="Number of children" />
            </FormGroup>
            <Button variant="primary" onClick={addRequest}>Create</Button> 
        </Form>
    )
}

export default RequestFoodForm;