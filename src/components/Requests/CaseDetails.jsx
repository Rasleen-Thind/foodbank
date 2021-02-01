import React, { Component } from "react";
import { API, graphqlOperation } from 'aws-amplify';
import { listCases} from 'graphql/queries';
import { Table } from "react-bootstrap";
import { isThisTypeNode } from "typescript";

class CaseDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
         caseList: []
        };
      }

    componentDidMount() {
        this.loadCases();
    }

    async loadCases() {
        try{
        var cases =  await API.graphql(graphqlOperation(listCases, { limit: 25}));
        console.log(cases);
        this.modifyCasedata(cases['data']['listCases']['items']);
    }catch(err){
        console.log('error fetching cases:', err)
     }
    }

    modifyCasedata(cases){
        var caseList = [];
        for(var i=0;i< cases.length; i++){
            caseList.push(
                <tr>
                    <td>{cases[i]['description']}</td>
                    <td>{cases[i]['num_of_adults']}</td>
                    <td>{cases[i]['num_of_children']}</td>
                    <td>{cases[i]['priority'][0]}</td>
                    <td>{cases[i]['status'][0]}</td>
                    <td>{cases[i]['requirement_type']['whishlist_url']}</td>
                    </tr>)
        }
        this.setState({
            caseList : caseList
        })     
    }

    render(){
    return (
        <div>
           <Table striped hover>
                    <thead>
                      <tr>
                          <th>Description</th>
                          <th>No of Adults</th>
                          <th>No of Children</th>
                          <th>Priority</th>
                          <th>Status</th>
                          <th>Whishlist Url</th>
                      </tr>
                    </thead>
                    <tbody>
                        {this.state.caseList}
                    </tbody>
                    </Table>
        </div>
            
    );
    }
}

export default CaseDetails;