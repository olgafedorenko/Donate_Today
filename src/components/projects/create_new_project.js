import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Form, Col, FormControl, FormGroup, ControlLabel, Button} from "react-bootstrap"

import {postProject} from "../../actions/projects/post_project"

class NewProject extends Component {
    constructor(props) {
        super(props);
        this.state ={
            userDetails:null,
            name_value:"",
            new_account: false,
            about_value:"",
            total_amount_value:"",
            amount_value:"",
            node_id:"",
            user_id:"",
            user_name:""
        }

        this.handleClick = this.handleClick.bind(this);
    }
    componentWillMount() {
        const detatils = this.props
        this.setState({
            user_id: detatils.userDetails.data.users[0]._id,
            node_id: detatils.nodeDetails.data.nodes[0]._id,
            user_name: detatils.userDetails.data.users[0].legal_names[0]
        })
    }
    handleClick() {
        postProject(this.state.name_value, this.state.amount_value, 
            this.state.total_amount_value, this.state.node_id, this.state.user_id, 
            this.state.about_value, this.state.city_value, this.state.url, this.state.user_name)
        
    }
    handleChangeName(event) {
        this.setState({
            name_value: event.target.value,
        })
    }
    handleChangeAbout(event) {
        this.setState({
            about_value: event.target.value
        }); 
    }
    handleChangeTotal(event) {
        this.setState({
            total_amount_value: parseFloat(event.target.value)
        }); 
    }
    handleChangeAmount(event) {
        this.setState({
            amount_value: event.target.value
        }); 
    }
    handleChangeCity(event) {
        this.setState({
            city_value: event.target.value
        }); 
    }
    
    render () {
        return (
            <div>
                <Form horizontal>
                    <FormGroup controlId="formControlsTextarea">
                        <Col className = "form-name" componentClass={ControlLabel} sm={2}>
                            Project Name
                        </Col>
                        <Col sm={10}>
                            <FormControl  className = "form-input-signup"  type =" text"  value = {this.state.name_value} 
                                onChange={this.handleChangeName.bind(this)} />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formControlsCity">
                        <Col className = "form-name" componentClass={ControlLabel} sm={2}>
                            Location
                        </Col>
                        <Col sm={10}>
                            <FormControl  className = "form-input-signup"  type =" text"  value = {this.state.city_value} 
                                onChange={this.handleChangeCity.bind(this)} />
                        </Col>
                    </FormGroup>
                    
                    <FormGroup controlId="formControlsTotal">
                        <Col className = "form-name" componentClass={ControlLabel} sm={2}>
                            How much money do you need?
                        </Col>
                        <Col sm={10}>
                            <FormControl   className = "form-input-signup" type ="number" value = {this.state.total_amount_value} 
                                onChange={this.handleChangeTotal.bind(this)} />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formControlsTotal">
                        <Col className = "form-name" componentClass={ControlLabel} sm={2}>
                            How much money do you already have?
                        </Col>
                        <Col sm={10}>
                            <FormControl   className = "form-input-signup" type ="number" value = {this.state.amount_value} 
                                onChange={this.handleChangeAmount.bind(this)} />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formControlsAbout">
                        <Col className = "form-name" componentClass={ControlLabel} sm={2}>
                            About
                        </Col>
                        <Col sm={10}>
                            <FormControl  className = "form-input-signup"  type ="textarea" value = {this.state.about_value} 
                                onChange={this.handleChangeAbout.bind(this)} />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button  className = "form-button signup" onClick = {this.handleClick}>Create</Button>
                        </Col>
                    </FormGroup>
                        
                </Form>;
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userDetails: state.userDetails,
        oauthKeyDetails: state.oauthKeyDetails,
        nodeDetails: state.nodeDetails
    };
}
  
export default connect(mapStateToProps)(NewProject);