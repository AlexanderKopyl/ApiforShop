import React, {Component} from "react";
import LoginForm from './login-form'
import {withRouter} from 'react-router-dom';
import config from '../../../app.config'
import fun from '../../../lib/function'

export default withRouter(class LoginPage extends Component {

    state = {
        email: "",
        password: "",
        isLoggedIn: false,
        auth_token: fun.getItem('auth_token')
    };


    onLogin = () => {

        const fetchItem = async (login, password) => {
            let data = {
                login,
                password
            };
            const fetchItem = await fetch(`${config.url}customers/login`, {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, cors, *same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            return await fetchItem.json();
        };

        fetchItem(this.state.email, this.state.password)
            .then((r) => {
                    if (r[0].token !== null) {
                        this.setState({
                            isLoggedIn: true
                        });

                        fun.setItem('auth_token', r[0].tokens.access.token);
                        fun.setItem('time_auth_token', r[0].tokens.access.expiredIn);
                        fun.setItem('refresh_token', r[0].tokens.refresh.token);
                        fun.setItem('time_token', r[0].tokens.refresh.expiredIn);
                        fun.setItem('user_id', r[0].user.customer_id);
                    } else {
                        fun.setItem('auth_token', null);

                    }
                }
            );

    };


    submitHandler = event => {
        event.preventDefault();
        event.target.className += " was-validated";
    };

    changeHandler = event => {
        this.setState({[event.target.name]: event.target.value});
    };

    render() {

        return (
            <LoginForm isLoggedIn={this.state.isLoggedIn} onLogin={this.onLogin} changeHandler={this.changeHandler}
                       submitHandler={this.submitHandler}/>
        );
    }


});



