import React from 'react';
import { connect } from 'react-redux';

//auth-form.scss

export const AuthForm = () => {
    return (
        <div className="auth-form">
            <div className="auth-form__header">
                <h2>Criticker</h2>
                <p>Join and Explore</p>
            </div>

            <div className='auth-form__container'>
                <div className="auth-form__name">
                    <label htmlFor="name" className="auth-form__email-label">Name</label>
                    <input name='name' type="text" className="auth-form__email-input" />
                </div>
                <div className="auth-form__email">
                    <label htmlFor="email" className="auth-form__email-label">Email</label>
                    <input name='email' type="email" className="auth-form__email-input" />
                </div>
                <div className="auth-form__password">
                    <label htmlFor="password" className="auth-form__password-label">Password</label>
                    <input type="password" name='password' className="auth-form__password-input" />
                </div>
                <div className="auth-form__register">

                    <button>Register</button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm)
