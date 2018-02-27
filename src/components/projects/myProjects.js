import React, { Component } from 'react'
//import { connect } from 'react-redux'
import { connect } from 'react-redux'

import { Button } from "react-bootstrap"
import { Link } from 'react-router'

import ProgressBar from "../panel/progressBar"


import Projectinform from '../../data.json'

import { getUser } from "../../actions/user/get_user_all"
import { postTransactions } from "../../actions/transactions/post_transaction"
import {getAllNodesTransactions}  from "../../actions/transactions/get_all_node_transactions"
import { getOauthKey } from "../../actions/oauth/get_oauth_key"
import { getAllNodes } from "../../actions/node/get_all_nodes"


export default class MyProject extends Component {
    constructor (props) {
        super(props)

        this.state ={
            projectInfo:null,
            add_money:"Add money",
            trans:[],
            oauth_key:"oauth_U60fX1MgJE0wiPno38GqyrY4hzFWV72vZKQAapRT",
            userId:"",
            refresh_tocken:"",
            node:[],
            node_id:undefined,
            receive_amount_sum:0,
            project_id:""
        }
        this.getObjects = this.getObjects.bind(this)
        this.addMoney = this.addMoney.bind(this)
    }
    componentWillMount() {
        const userDetails = this.props.location.state.detail.userDetail
        const projectDetails = this.props.location.state.detail
        this.setState({
            refresh_tocken: userDetails.refresh_token,
            userId: userDetails._id,
            node_id:projectDetails.node_id,
            node:projectDetails.node,
            //oauth_key:projectDetails.oauth_key,
            project_id:projectDetails.projectId

        })
        console.log("props",this.props.location.state.detail.userDetail)
        const userId = this.props.params.id;
        console.log(userId)
        let data = this.getObjects(Projectinform,'id',`${this.props.params.id}`)
        this.setState({
            projectInfo:data[0]
        })
        // if(this.state.oauth_key == undefined){
        //     getOauthKey(userDetails._id, userDetails.refresh_token)
        //     .then((response) => {
        //     console.log("oauth inside", response)
        //         this.setState({
        //             oauth_key:response.oauth_key
                
        //         })
        //     })
        // }
        
    }
    componentDidMount(){
        
        getAllNodes(this.state.userId, this.state.oauth_key)
        .then((response) => {
            console.log("node", response)  
            this.setState({
                node:response
            })
            
        })
        getAllNodesTransactions(this.state.project_id, this.state.node_id, this.state.oauth_key)
        .then((response) => {
            console.log("trans", response)  
            
            const receive_money = response.trans.filter((a) => a.from.id != "5a923cf64fc163004902f4ee")
            const receive_amount = (receive_money.map(item => item.amount.amount))
            const receive_amount_sum = receive_amount.reduce((a,b) => a+b, 0)
            console.log(receive_amount_sum)

            this.setState({
                trans:response.trans,
                receive_amount_sum:receive_amount_sum
            })
        })
        

        let userInGroup = this.state.projectInfo.participants.includes(this.state.projectInfo.name)
        if(userInGroup){
            this.setState({
                add_money: "Added"
            })
        } 
        
    }
    getObjects(obj, key, val) {
        var objects = [];
        for (var i in obj) {
            if (!obj.hasOwnProperty(i)) continue;
            if (typeof obj[i] == 'object') {
                objects = objects.concat(this.getObjects(obj[i], key, val));    
            } else 
            //if key matches and value matches or if key matches and value is not passed (eliminating the case where key matches but passed value does not)
            if (i == key && obj[i] == val || i == key && val == '') { //
                objects.push(obj);
            } else if (obj[i] == val && key == ''){
                //only add if the object is not already in the array
                if (objects.lastIndexOf(obj) == -1){
                    objects.push(obj);
                }
            }
        }
        return objects;
    }
    addMoney(){
        postTransactions()
        this.setState({
            add_money: "Added"
        })


    }
    
    
    render(){
        //console.log(this.props.location.state.detail)
        //console.log(getAllNodesTransactions())
        // console.log("id", this.state.userId)
        // console.log("tocken", this.state.refresh_tocken)
        // console.log("this.oau", this.state.oauth_key)
        console.log("node", this.state.node)
        console.log("props hhh",this.props.location.state.detail)
        
        console.log(this.state.receive_amount_sum)
        const total = this.state.projectInfo.total_ammount
        const have = this.state.projectInfo.ammount
        const bar_complete = have*100/total
        console.log(bar_complete)
        //const bar_complete = parseInt((this.state.projectInfo.total_ammount).substring(0, str.length - 1)/(this.state.projectInfo.ammount).substring(0, str.length - 1))*100
        return(
            <div className='project-profile'>
                <div className = "image">
                    <img src={this.state.projectInfo.image} />
                </div>
                <div className = "name">
                    <span>{this.state.projectInfo.name}</span>
                </div>
                <Link to={`/project/${this.props.id}/inform`} key="my-profile" className="header-nav-link d-flex align-items-center">
                <div className = "ammount">
                    <span>{this.state.projectInfo.total_ammount}</span>
                    <ProgressBar complete ={bar_complete}/>
                </div>
                </Link>
                <div className = "about">
                    <span>{this.state.projectInfo.about}</span>
                </div>
                <div className = "participants">
                    <Link to="/my-profile" key="my-profile" className="header-nav-link d-flex align-items-center">
                        {this.state.projectInfo.participants.map((user, index) =>
                        <div>
                            <img className = "header-user-image" style ={{height: 38, width: 38, borderRadius: 21}} src={ '/img/default-user-image.png'}/>
                            <span>{user}</span>
                            </div>
                        )}
                    
                    </Link>
                </div>
                <Button  onClick = {this.addMoney}>{this.state.add_money}</Button>
            </div>
        )
    }

}
