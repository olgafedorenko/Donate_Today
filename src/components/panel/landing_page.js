import React, { Component } from 'react'
import { Form, Col, FormControl, FormGroup, ControlLabel, Button } from "react-bootstrap"
import { connect } from 'react-redux'

import { getUser } from "../../actions/user/get_user_all"


import  SignUpForm  from "../login/signUpForm"

 class Landing_Page extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userDetails:null,
            name_value:"",
            errorMessage:"Looks like you don't have an account, please sign up",
            new_account: false,
            my_account:true,
            userDetails:null
        }

        this.handleClick = this.handleClick.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this)
    }
    handleClick() {
        this.props.getUser(this.state.name_value)
            .then((response) => {
                if(response.payload.users[0] === undefined){
                    this.setState({
                        new_account:true,
                        my_account:false
                    })
                }else{
                    this.setState({
                        userDetails:response.payload.users[0]
                    })
                    this.props.router.push({pathname:"my_page", state:{detail: response.payload.users[0]}})
                }
            })
            this.setState({name_value: ''});
    }
    handleChange(event) {
        this.setState({name_value: event.target.value});  
    }
    onKeyDown(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            event.stopPropagation();
            this.handleClick();
        }
    }
    render () {
        return (
            <div className = "form-wrapper">
                <div className = "form-container">
                    {this.state.my_account &&
                        <Form horizontal>
                            <FormGroup controlId="formHorizontalEmail">
                                <Col className = "form-name landing" componentClass={ControlLabel} sm={2}>
                                    Full Name
                                </Col>
                                <Col sm={10}>
                                    <FormControl className = "form-input" type="text" value = {this.state.name_value} 
                                        onChange={this.handleChange.bind(this)} onKeyDown={this.onKeyDown} />
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Col smOffset={2} sm={10}>
                                    <Button  className = "form-button" onClick = {this.handleClick}>Sign in</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    }
                    </div>
                    {this.state.new_account &&
                        <div>
                            <SignUpForm />
                        </div>
                    }
            </div>  
        )
    }
}
function mapStateToProps(state) {
    return {
      userDetails: state.userDetails,
     };
  }

  export default connect(mapStateToProps, { getUser })(Landing_Page);

