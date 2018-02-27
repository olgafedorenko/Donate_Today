import React, {Component} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux'



class Header extends Component {
    constructor(props){
        super(props);

        this.state = {
            login: false,
            userDetails: []
        }
    }

    componentWillReceiveProps(nextProps) {
        if ( nextProps.userDetails !== []) {
            this.setState ({
                login:true
            })
        }
    }

    render() {
        
        return (
        <header >
            <div className="header-container">
                <Link to="/" className="header-logo">
                    <img alt = "logo" src = {'/img/logo.png'} />
                </Link>
                {this.state.login &&
                    <nav className="nav-container" >
                        <div className="nav-right ">
                            <div className="nav-links">
                                <Link to="/my_projects" className="header-nav-link d-flex align-items-center" id="header-login">
                                    <span>MY PROJECTS</span>
                                </Link>

                                <Link to="/my_page" className="header-nav-link d-flex align-items-center">
                                    <span>ALL PROJECTS</span>
                                </Link>
                                <Link  to="create" className="header-nav-link d-flex align-items-center">
                                    <span>CREATE A NEW</span>
                                </Link>
                            </div>
                            <div className = "my-picture">
                                <img className = "header-user-image" alt = " profile-image" src={ '/img/default-user-image.png'}/>
                            </div>

                        </div>
                    </nav>
                }
            </div>

        </header>
        )
    }
    }


function mapStateToProps(state) {
    return {
        userDetails: state.userDetails,
        oauthKeyDetails: state.oauthKeyDetails
    };
}
  
export default connect(mapStateToProps)(Header);

