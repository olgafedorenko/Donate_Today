import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'




class ProjectComponent extends Component {
    constructor (props) {
        super(props)

        this.state = {
            projectDetails: []
        }
    }

    render () {
        return(
            <Link to={{pathname:`/project/${this.props.id}`, state: { detail: this.props }}} className='project-profile'>
            <div className = "project-container">
                <div className = "project-image">
                <img alt = {"donation"}  className = "donation" src = {this.props.image} />
                </div>
                <div className = "project-name">
                    <span >{this.props.name}</span>
                </div>
                <div className = "project-name-user">
                    <span>by {this.props.user_name}</span>
                </div>
                <div className = "project-city">
                    <img alt = "maker" className= "marker" src = {'/img/marker.png'}/>
                    <span className = "city-name">{this.props.city}</span>
                </div>
                <div className = "project-about">
                    <span>{this.props.about}</span>
                </div>
                <div className ="amount-container">
                    <div className = "amount-wrapper">
                        <span className = "project-total_amount">{this.props.total_ammount} $</span>
                        <span className = "project-amount">{this.props.ammount} $ raised</span>
                    </div>
                </div>
                
            </div>
            </Link>
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
  
export default connect(mapStateToProps)(ProjectComponent);