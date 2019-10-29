import React, {Component} from "react";
import LoginForm from './login-form'
import {withRouter} from 'react-router-dom';
import config from '../../../app.config'
import fun from '../../../lib/function'

export default withRouter(class LoginPage extends Component{

    state = {
        email: "",
        password:"",
        isLoggedIn: false,
        auth_token:fun.getItem('auth_token')
    };



    onLogin = () => {
        const fetchItem = async (login, password) => {
            const fetchItem = await fetch(`${config.url}customers/${login}/${password}`);
            return await fetchItem.json();
        };

        fetchItem(this.state.email, this.state.password)
            .then((r) =>
            {

                if (r[0].token !== null){
                    this.setState({
                        isLoggedIn: true
                    });

                    fun.setItem('auth_token',r[0].token);
                    fun.setItem('user_id',r[0].user.customer_id);
                }else{
                    fun.setItem('auth_token',r[0].token);

                }
            }
            );

    };


    submitHandler = event => {
        event.preventDefault();
        event.target.className += " was-validated";
    };

    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {

        return (
            <LoginForm isLoggedIn={this.state.isLoggedIn} onLogin={this.onLogin} changeHandler={this.changeHandler} submitHandler={this.submitHandler}/>
        );
    }


});



