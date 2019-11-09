import React from 'react';
import './App.css';
import {
    ContactPage,
    LoginPage,
    Orders,
    CustomerPage,
    BalancePage,
    DocumentPage,
    ForgotPage,
    OrderPageInfo,
    MainPage
} from "../pages";

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

export default function App() {

    const forgotPass = () => {
        console.log('Send new password');
    };



    return (

        <Router>

            <div className="App">
                <Switch>
                    <Route path='/' exact render={() => (
                        <MainPage/>
                    )}/>
                    <Route path="/contact" render={() => (
                        <ContactPage/>
                    )}/>
                    <Route path="/orders" exact render={() => (
                        <Orders/>
                    )}/>
                    <Route path="/orders/:id" render={() => (
                        <OrderPageInfo />
                    )}/>
                    <Route path="/customer-info" render={() => (
                        <CustomerPage/>
                    )}/>
                    <Route path="/balance" render={() => (
                        <BalancePage/>
                    )}/>
                    <Route path="/document" render={() => (
                        <DocumentPage/>
                    )}/>
                    <Route path="/forgot" render={() => (
                        <ForgotPage forgotPass={forgotPass}/>
                    )}/>
                    <Route path="/login" component={LoginPage}/>
                    <Route render={() => <h2>Page not found</h2>}/>
                </Switch>
            </div>
        </Router>

    );


}

