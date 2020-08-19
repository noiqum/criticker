import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { ReactComponent as  Logo} from '../../svg/logo.svg';
import NavbarItem from './navbar-item';

// style sass = navbar.scss

export class navbar extends Component {

    state={
        currentUser:true,
        mood:null
    }

    authHandle=()=>{
        if(this.state.currentUser !== null){
            this.setState({
                currentUser:null
            })
        }
    }


    render() {
        return (
            <div>
                <div className="navbar-mobile">
                    <NavLink to='/'><div className="navbar-mobile__logo"><Logo/></div></NavLink>
                    <div className="navbar-mobile__mood"></div>
                    <div className="navbar-mobile__hamburger"></div>
                    <div className="navbar-mobile__links">
                        <NavLink to='/movies'><div className="navbar-mobile__links-movies">Movies</div></NavLink>
                        <NavLink to='/allies'><div className="navbar-mobile__links-ally">Allies</div></NavLink>
                        <NavLink to='/auth'><div className="navbar-mobile__links-auth">Sign in</div></NavLink>
                        <NavLink to='/profile/:id'><div className="navbar-mobile__links-profile">Profile</div></NavLink>
                    </div>
                </div>
                <div className="navbar-large">
                    <NavLink to='/'><div className="navbar-large__logo"><Logo/></div></NavLink>
                    <div className="navbar-large__links">
                        <NavLink to='/movies'><div className="navbar-large__links-movies">Movies</div></NavLink>
                        <NavLink to='/allies'><div className="navbar-large__links-ally">Allies</div></NavLink>
                        
                        <NavbarItem
                        path='/auth'
                        classProp="navbar-large__links-auth"
                        check={this.state.currentUser}
                        content='log out'
                        defaultContent='sign in'
                        onclick={this.authHandle}

                        />
                        
                        {this.state.currentUser && <NavbarItem
                        path='/profile/:id'
                        classProp="navbar-large__links-profile"
                        check={this.state.currentUser}
                        content='profile'
                        />}
                    </div>
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(navbar)
