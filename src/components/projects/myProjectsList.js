import React, { Component } from 'react'
import { connect } from 'react-redux'

import ProjectComponent from "./projectComponent"
import { getAllProjects } from "../../actions/projects/get_all_projects"

class MyProjectsList extends Component {
    constructor (props) {
        super(props)

        this.state ={
            projectDetails:[],
            projects:[]
        }
    }
    componentDidMount () {
        const id = this.props.userDetails.data.users[0]._id
    }
    componentWillMount () { 
        getAllProjects()
        .then(results =>
            this.setState({
                projects:results
            })
        )   
    }

    render () {
        const id = this.props.userDetails.data.users[0]._id
        const my_projects = this.state.projects.filter((a) => a.user_id === id)
        return(
            <div className='my-profile'>
                <div className = "my-projects-wrapper">
                    {my_projects.map((item, index) => 
                        <ProjectComponent
                            key={index}
                            image = {item.image}
                            about = {item.about}
                            ammount = {item.ammount}
                            total_ammount ={item.total_ammount}
                            name = {item.name}
                            user_name = {item.participants}
                            id = {item.id}
                            userDetails = {this.props.route.userDetails}
                            node_id = {item.node_id}
                            node={this.props.route.node} 
                            oauth_key ={this.props.route.oauth_key}
                            projectId ={item.user_id}
                            city = {item.city}
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
  
export default connect(mapStateToProps)(MyProjectsList);