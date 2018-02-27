import React, { Component } from 'react'
import { connect } from 'react-redux'

import ProgressBar from "../panel/progressBar"
import { Button } from "react-bootstrap"

import { postTransactions } from "../../actions/transactions/post_transaction"
import { getAllNodesTransactions }  from "../../actions/transactions/get_all_node_transactions"
import { UpdateProject } from "../../actions/projects/update_project"
import { getProject } from "../../actions/projects/get_project"


class ProjectDetails extends Component {
    constructor (props) {
        super(props)

        this.state = {
            projectInfo:[],
            add_money:"Add money",
            trans:[],
            oauth_key:"",
            userId:"",
            refresh_tocken:"",
            node:[],
            node_id:undefined,
            receive_amount_sum:0,
            project_id:"",
            my_node_id:undefined,
            new_amount:0,
            button:true
        }
        this.addMoney = this.addMoney.bind(this)
    }
    componentWillMount() {
        const userDetails = this.props.userDetails.data.users[0]
        const projectDetails = this.props.location.state.detail
        
        this.setState ({
            refresh_tocken: userDetails.refresh_token,
            userId: userDetails._id,
            node_id: projectDetails.node_id,
            node: this.props.nodeDetails.data.nodes,
            oauth_key: this.props.oauthKeyDetails.data.oauth_key,            
            project_id: projectDetails.projectId,
            my_node_id:  this.props.nodeDetails.data.nodes[0]._id

        })
        if(userDetails._id === undefined){
            this.setState ({
                userId:userDetails.userDetails._id
            })
        }
        const userId = this.props.params.id;
        getProject(userId)
            .then(response =>
                this.setState({
                    projectInfo:response
                })
            )
    }
    componentDidMount() {
        if ( this.state.project_id === this.state.userId ) {
            getAllNodesTransactions(this.state.userId, this.state.node_id, this.state.oauth_key)
            .then((response) => {
                
                const receive_money = response.trans.filter((a) => a.from.user._id !== this.state.userId)
                const receive_amount = (receive_money.map(item => item.amount.amount))
                const receive_amount_sum = receive_amount.reduce((a,b) => a+b, 0)

                this.setState({
                    trans:receive_money,
                    receive_amount_sum:receive_amount_sum,
                    button:false
                })
            })
        }
    }
    handleChange(e) {
        this.setState ({
            send_money:e.target.value,
        })
    }
    addMoney() {
        postTransactions(this.state.userId, this.state.send_money, this.state.my_node_id, this.state.node_id, this.state.oauth_key)
        this.setState ({
            add_money: "Add more",
            new_amount:this.state.send_money,
            send_money:""
        })
        const new_amount = parseFloat(this.state.projectInfo.amount)+parseFloat(this.state.send_money)
        UpdateProject(new_amount,this.props.params.id )
    }
    
    
    render() {

        console.log("user name", this.props.user_name)
        console.log("props", this.props)

        const total = this.state.projectInfo.total_amount
        const have = parseFloat(this.state.projectInfo.amount)+parseFloat(this.state.new_amount)
        const bar_complete = have*100/total

        return (
            <div className = "project-container center">
                <div className = "project-image">
                <img alt ="donation"  className = "donation-details" src = {'/img/donations.jpg'} />
                </div>
                <div className = "project-name">
                    <span>{this.state.projectInfo.name}</span>
                </div>
                <div className = "project-name-user">
                    <span>by {this.state.projectInfo.participants}</span>
                </div>
                <div className = "project-city">
                    <img alt = "maker" className= "marker" src = {'/img/marker.png'}/>
                    <span className = "city-name">{this.state.projectInfo.city}</span>
                </div>
                
                <div className = "ammount">
                    <ProgressBar className = "progressBar" complete ={bar_complete}/>
                    <span className = "project-total_amount">{this.state.projectInfo.total_amount} $</span>
                </div>
                
                <div className = "project-about">
                    <span>{this.state.projectInfo.about}</span>
                </div>
                <p className = "participants-list">Participants</p>
                <div className = "participants">
                        {this.state.trans.map((user, index) =>
                            <div>
                                <span className = "participants-name" >{user.from.user.legal_names[0]}</span>
                                <span className = "participants-amount">{user.amount.amount} $</span>
                            </div>
                        )}
                    
                </div>
                {this.state.button &&
                    <div className = "donate-button">
                    <input type="number" value = {this.state.send_money} onChange={this.handleChange.bind(this)} />
                    <Button  className = "button-d" onClick = {this.addMoney}>{this.state.add_money}</Button>
                </div>
                }
                
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
  
export default connect(mapStateToProps)(ProjectDetails);