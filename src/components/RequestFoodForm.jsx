/* src/App.js */
import React, {useState } from 'react'
import { FormGroup, Form, ControlLabel, FormControl} from 'react-bootstrap';

const initialState = { address: '', description: '', amazon_wishlist_url: '' };

const RequestFoodForm = () => {

    const [formState, setFormState] = useState(initialState)

    function setInput(key, value) {
        setFormState({ ...formState, [key]: value })
    }
    return (
        <Form>
            <FormGroup>
                <ControlLabel>Name</ControlLabel>
                <FormControl onChange={event => setInput('description', event.target.value)} placeholder= "Name"/>
            </FormGroup>
            <FormGroup>
                <ControlLabel>Help With</ControlLabel>
                <FormControl onChange={event => setInput('description', event.target.value)} placeholder="Name" />
            </FormGroup>
            <FormGroup>
                <ControlLabel>Request For</ControlLabel>
                <FormControl onChange={event => setInput('description', event.target.value)} placeholder="Name" />
            </FormGroup>
            <FormGroup>
                <ControlLabel>Contact Number</ControlLabel>
                <FormControl onChange={event => setInput('description', event.target.value)} placeholder="Name" />
            </FormGroup>
            <FormGroup>
                <ControlLabel>Address</ControlLabel>
                <FormControl onChange={event => setInput('description', event.target.value)} placeholder="Name" />
            </FormGroup>
            <FormGroup>
                <ControlLabel>No of Adults</ControlLabel>
                <FormControl onChange={event => setInput('description', event.target.value)} placeholder="Name" />
            </FormGroup>
            <FormGroup>
                <ControlLabel>No of Childrens</ControlLabel>
                <FormControl onChange={event => setInput('description', event.target.value)} placeholder="Name" />
            </FormGroup>
            <FormGroup>
                <ControlLabel>Detail</ControlLabel>
                <FormControl onChange={event => setInput('description', event.target.value)} placeholder="Name" />
            </FormGroup>

            
           {/* (/*) <Button variant="primary" onClick={addTodo}>Create</Button> */} 
        </Form>
    )
}

export default RequestFoodForm;