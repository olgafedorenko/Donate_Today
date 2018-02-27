import React, {Component} from 'react';
import {Router, Route, IndexRoute } from 'react-router';
import {connect} from 'react-redux'

// components
import App from './App'
import Home_Page from './components/panel/home_page';
import Landing_Page from './components/panel/landing_page';
import ProjectDetails from './components/projects/projectDetails';
import MyProjectsList from './components/projects/myProjectsList';
import NewProject from './components/projects/create_new_project';


class RouterComponent extends Component {
    constructor(props){
        super(props);
    }


    render() {
        console.log("real props", this.props)
        return (
        <Router history={this.props.history} >
                <Route path="/" component={App} >
                <IndexRoute component={Landing_Page} />
                <Route path="/my_page" component={Home_Page} />
                <Route path="project/:id" component={ProjectDetails} />
                <Route path="my_projects" component ={ MyProjectsList} />
                <Route path="create" component={NewProject} />
            </Route>
        </Router>
        )
    }
    }

function mapStateToProps(state) {
    return {
        todos: state.todos
    };
}
    
export default connect(mapStateToProps)(RouterComponent);
