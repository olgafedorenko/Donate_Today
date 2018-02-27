import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import {  Button } from 'react-bootstrap';

class PersonalProfile extends Component {
    constructor (props) {
        super(props)

        this.state ={
            profileImage:"https://www.google.com/search?q=image&tbm=isch&source=iu&ictx=1&fir=TVEPc8yBbrThFM%253A%252Cvwlu5hEngpZDXM%252C_&usg=__Q_QyuMZbHld6yq5zzXhLF9L6RD0%3D&sa=X&ved=0ahUKEwjakdKJ5r_ZAhUY-GMKHTAzC8EQ9QEIOTAB#imgrc=TVEPc8yBbrThFM:",
            displayName:"Olga"
        }
    }

    render(){
        return(
            <div className='my-profile'>
                <div className = "my-count-wrapper">
                    <img className='my-profile-image' alt = "olg" src={this.state.profileImage} />
                    <span className='my-displayName'>{this.state.displayName}></span>
                    <Link to={{pathname:"/my_projects", state: { detail: this.props }}} key="my-projects" className="header-nav-link d-flex align-items-center">
                        <Button> Check projects</Button>
                    </Link>
                    <Link to={{pathname:"/my_page", state: { detail: this.props }}} key="all-projects" className="header-nav-link d-flex align-items-center">
                        <Button> Check all projects</Button>
                    </Link>
                    <Link to={{pathname:"/create", state: { detail: this.props }}} key="create-project" className="header-nav-link d-flex align-items-center">
                    <Button>Create a new goal</Button>
                    </Link>
                    
                </div>
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        userDetails: state.userDetails,
        oauthKeyDetails: state.oauthKeyDetails
    };
}
  
export default connect(mapStateToProps)(PersonalProfile);