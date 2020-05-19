import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { ReactComponent as  Logo} from '../../svg/logo.svg';

// style sass = navbar.scss

export class navbar extends Component {

    state={
        currentUser:null,
        mood:null
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
                        <NavLink to='/auth'><div className="navbar-large__links-auth">Sign in</div></NavLink>
                        <NavLink to='/profile/:id'><div className="navbar-large__links-profile">Profile</div></NavLink>
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
