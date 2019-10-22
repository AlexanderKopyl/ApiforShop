import React, { Component }from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput } from 'mdbreact';
import {Redirect, withRouter} from 'react-router-dom';

const LoginPage = ({isLoggedIn, onLogin}) => {

    if (isLoggedIn) {
        return <Redirect to="/"/>;
    }

    return (
            <MDBContainer>
                <div className="login-form">
                <MDBRow>
                    <MDBCol md="6">
                        <MDBCard>
                            <div className="header pt-3 grey lighten-2">
                                <MDBRow className="d-flex justify-content-start">
                                    <h3 className="deep-grey-text mt-3 mb-4 pb-1 mx-5">
                                        Log in
                                    </h3>
                                </MDBRow>
                            </div>
                            <MDBCardBody className="mx-4 mt-4">
                                <MDBInput label="Your email" id="form_email" name="email" group type="text" validate />
                                <MDBInput
                                    label="Your password"
                                    group
                                    name="password"
                                    id="form_password"
                                    type="password"
                                    validate
                                    containerClass="mb-0"
                                />
                                <p className="font-small grey-text d-flex justify-content-end">
                                    Forgot
                                    <a  href="/forgot"   className="dark-grey-text font-weight-bold ml-1">
                                        Password?
                                    </a>
                                </p>
                                <div className="text-center mb-4 mt-5">
                                    <MDBBtn
                                        color="danger"
                                        type="button"
                                        onClick={onLogin()}
                                        className="btn-block z-depth-2"
                                    >
                                        Log in
                                    </MDBBtn>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
                </div>
            </MDBContainer>
    );
};

export default withRouter(LoginPage);

