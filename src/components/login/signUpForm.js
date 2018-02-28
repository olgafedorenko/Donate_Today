import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Form, Col, FormControl, FormGroup, ControlLabel, Button } from "react-bootstrap"

import {postUser} from "../../actions/user/post_user"

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state ={
            userDetails:null,
            name_value:"",
            new_account: false,
            ssn_value:"",
            phone_value:"",
            email_value:"",
            message:"Looks like you don't have an account, please sign up",
            sign_up:true
        }

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.postUser(this.state.name_value, this.state.email_value, this.state.phone_value, this.state.ssn_value.slice(this.state.ssn_value.length-4, 4))
            .then((response) => {
                console.log(response)
                    this.setState({
                        userDetails:response.payload
                    })
            })
            this.setState({
                name_value: '',
                ssn_value:"",
                phone_value:"",
                email_value:"",
                message:"Successful",
                sign_up: false
            });
    }
    handleChangeName(event){
        this.setState({
            name_value: event.target.value,
        })
    }
    handleChangeEmail(event){
        this.setState({
            email_value: event.target.value
        }); 
    }
    handleChangeSSN(event){
        this.setState({
            ssn_value: (event.target.value)
        }); 
    }
    handleChangePhone(event){
        this.setState({
            phone_value: event.target.value
        }); 
    }
    
    render () {
        return (
            <div>
                <Form horizontal>
                    <p className = "error-message-new-acount"> {this.state.message} </p>
                    <FormGroup controlId="formControlsTextarea">
                        <Col className = "form-name" componentClass={ControlLabel} sm={2}>
                            Full Name
                        </Col>
                        <Col sm={10}>
                            <FormControl  className = "form-input-signup"  type =" text" placeholder="full name" value = {this.state.name_value} 
                                onChange={this.handleChangeName.bind(this)} />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formControlsEmail">
                        <Col className = "form-name" componentClass={ControlLabel} sm={2}>
                            Email
                        </Col>
                        <Col sm={10}>
                            <FormControl  className = "form-input-signup"  type ="email" placeholder="email" value = {this.state.email_value} 
                                onChange={this.handleChangeEmail.bind(this)} />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formControlsTPhone">
                        <Col className = "form-name" componentClass={ControlLabel} sm={2}>
                            Phone number
                        </Col>
                        <Col sm={10}>
                            <FormControl  className = "form-input-signup" type ="number" placeholder="Phone number" value = {this.state.phone_value} 
                                onChange={this.handleChangePhone.bind(this)} />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formControlsAddress">
                        <Col className = "form-name" componentClass={ControlLabel} sm={2}>
                            Street Address
                        </Col>
                        <Col sm={10}>
                            <FormControl  className = "form-input-signup"  type ="text" placeholder="Street Address" />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formControlsCity">
                        <Col className = "form-name" componentClass={ControlLabel} sm={2}>
                            City 
                        </Col>
                        <Col sm={10}>
                            <FormControl  className = "form-input-signup" type ="text" placeholder="City" />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formControlsState">
                        <Col className = "form-name" componentClass={ControlLabel} sm={2}>
                            State 
                        </Col>
                        <Col sm={10}>
                            <FormControl  className = "form-input-signup" type ="text" placeholder="State" />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formControlsCountry">
                        <Col className = "form-name" componentClass={ControlLabel} sm={2}>
                            Country
                        </Col>
                        <Col sm={10}>
                            <FormControl  className = "form-input-signup"  type ="text" placeholder="Country" />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formControlsZipcode">
                        <Col className = "form-name" componentClass={ControlLabel} sm={2}>
                            ZipCode
                        </Col>
                        <Col sm={10}>
                            <FormControl  className = "form-input-signup" type ="number" placeholder="Zipcode" />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formControlsSSN">
                        <Col className = "form-name" componentClass={ControlLabel} sm={2}>
                            SSN
                        </Col>
                        <Col sm={10}>
                            <FormControl   className = "form-input-signup" type ="number" placeholder="SSN" value = {this.state.ssn_value} 
                                onChange={this.handleChangeSSN.bind(this)} />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formControlsBirthDate">
                        <Col className = "form-name" componentClass={ControlLabel} sm={2}>
                            Date of Birth
                        </Col>
                        <Col sm={10}>
                            <FormControl className = "form-input-signup" type ="date" />
                        </Col>
                    </FormGroup>
                    
                    <FormGroup controlId="formControlsPassword">
                        <Col className = "form-name" componentClass={ControlLabel} sm={2}>
                            Password
                        </Col>
                        <Col sm={10}>
                            <FormControl  className = "form-input-signup" type ="password" placeholder="Password" />
                        </Col>
                    </FormGroup>

                    <FormGroup>
                    {this.state.sign_up &&
                        <Col smOffset={2} sm={10}>
                            <Button  className = "form-button signup" onClick = {this.handleClick}>Sign up</Button>
                        </Col>
                    }
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
  
export default connect(mapStateToProps, {postUser})(SignUpForm);