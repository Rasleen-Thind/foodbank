/* src/App.js */
import React, { useState } from 'react'
import { FormGroup, Form, ControlLabel, FormControl, Button } from 'react-bootstrap';
import Select from 'react-select';
import { API, graphqlOperation } from 'aws-amplify'
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

var requirementState = {};
var caseState = {};

const CaseAddForm = () => {

    const [formState, setFormState] = useState(initialState)
    function setInput(key, value) {
        setFormState({ ...formState, [key]: value })
    }

    async function addCase() {
        try {
            requirementState = {
                whishlist_url : formState['whishlist_url'],
                name : formState['description'],
                description: formState['description']
            };
            var requirement = await API.graphql(graphqlOperation(createRequirement, {input : requirementState}))
            caseState = {
                description: formState['description'],
                priority: formState['priority']['value'],
                status: formState['status']['value'],
                caseRequestId: formState['request_id'],
                caseRequirement_typeId : requirement['data']['createRequirement']['id']
            }
            console.log(caseState);
            var abc = await API.graphql(graphqlOperation(createCase, { input: caseState }));
            console.log(abc);
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
                <ControlLabel>Request ID</ControlLabel>
                <FormControl onChange={event => setInput('request_id', event.target.value)} placeholder="Enter the request for which you want to craete the case." />
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