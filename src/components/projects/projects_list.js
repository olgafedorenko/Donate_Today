import React, { Component } from 'react'
import { connect } from 'react-redux'

import ProjectComponent from "./projectComponent"

import { getAllProjects } from "../../actions/projects/get_all_projects"

class ProjectsList extends Component {
    constructor (props) {
        super(props)

        this.state ={
            projectDetails:[]
        }
    }
    componentWillMount() { 
        getAllProjects()
            .then(response => 
                this.setState ({
                    projectDetails: response
                })
            )
    }

    render(){
        return(
            <div className='my-profile'>
                <div className = "my-projects-wrapper">
                    {this.state.projectDetails.map((item, index) => 
                        <ProjectComponent
                            key={index}
                            image = {item.image}
                            about = {item.about}
                            ammount = {item.amount}
                            total_ammount ={item.total_amount}
                            name = {item.name}
                            participants = {item.participants}
                            id = {item.id}
                            userDetails = {this.props.userDetails}
                            node_id = {item.node_id}
                            node={this.props.node} 
                            oauth_key = {this.props.oauth_key}
                            projectId = {item.user_id}
                            city = {item.city}
                            user_name = {item.participants}
                        />
                    )
                    }
                </div>
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

export default connect(mapStateToProps)(ProjectsList);