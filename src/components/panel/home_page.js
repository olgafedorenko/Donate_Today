import React, { Component } from 'react'
import { connect } from 'react-redux'

import PersonalProfile from "../profile/my_profile"
import ProjectsList from "../projects/projects_list"

import { postNode} from "../../actions/node/post_node"
import { getAllNodes } from "../../actions/node/get_all_nodes"
import { getOauthKey } from "../../actions/oauth/get_oauth_key"

 class Home_Page extends Component {
    constructor(props ) {
        super(props );
        this.state = {
            node:null,
            oauth_key:"",
            userId:"",
            userDetails:null,
            oauthKeyDetails:null
        }
    }
    componentWillMount () {
        const userDetails = this.props.userDetails.data.users[0]
            this.setState ({
                userId: userDetails._id
            })
            this.props.getOauthKey(userDetails._id, userDetails.refresh_token)
            .then((response) => {
                this.setState({
                    oauth_key:response.payload.oauth_key
                })
                Storage.prototype.setObject = function(key, value) {
                    this.setItem(key, JSON.stringify(value));
                }
                sessionStorage.setItem(`${userDetails._id}/oauth_key`, response.payload.oauth_key) 
            })
    }
    componentWillReceiveProps (nextProps) {
        const oauth_key = nextProps.oauthKeyDetails.data.oauth_key
        if ( this.state.oauth_key !== oauth_key){
            this.props.getAllNodes(this.props.userDetails.data.users[0]._id, oauth_key)
            .then((response) => {
                if(response.payload.node_count === 0){
                    postNode(this.state.userId, oauth_key)
                    .then((response) => {
                        this.setState({
                            node: response,
                            oauth_key: oauth_key
                        })
                    })
                }else{
                    this.setState({
                        node: response.payload.nodes,
                        oauth_key: oauth_key
                    })
                }
            })
        }
    }

    render () {
        console.log("neeeeeee",  this.props)
        return (
            <div>
                <ProjectsList />
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
  
export default connect(mapStateToProps, {getAllNodes, getOauthKey})(Home_Page);