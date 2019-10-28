import React from "react";
import {
    MDBRow, MDBCol, MDBBtn, MDBContainer, MDBInput, MDBCard,
    MDBCardBody,
    MDBModalFooter,
    MDBIcon,
    MDBCardHeader
} from "mdbreact";
import {Redirect} from 'react-router-dom';

const LoginForm = ({isLoggedIn, onLogin, changeHandler, submitHandler}) => {

    if (isLoggedIn) {
        return <Redirect to="/"/>;
    }

    return (
        <MDBContainer>
            <div className="login-form">
                <MDBRow>
                    <MDBCol md="12">
                        <MDBCard>
                            <MDBCardBody>
                                <MDBCardHeader className="form-header deep-blue-gradient rounded">
                                    <h3 className="my-3">
                                        <MDBIcon icon="lock"/> Login:
                                    </h3>
                                </MDBCardHeader>
                                <form className="needs-validation" onSubmit={submitHandler} noValidate>
                                    <div className="grey-text">
                                        <MDBInput
                                            label="Type your email"
                                            icon="envelope"
                                            onChange={changeHandler}
                                            type="email"
                                            name="email"
                                            id="email"
                                            group
                                            validate
                                            error="wrong"
                                            success="right"
                                        />
                                        <MDBInput
                                            label="Type your password"
                                            icon="lock"
                                            onChange={changeHandler}
                                            type="password"
                                            name="password"
                                            id="password"
                                            group
                                            validate
                                        />
                                    </div>

                                    <div className="text-center mt-4">
                                        <MDBBtn
                                            color="light-blue"
                                            className="mb-3"
                                            onClick={onLogin}
                                            type="submit"
                                        >
                                            Login
                                        </MDBBtn>
                                    </div>
                                </form>
                                <MDBModalFooter>
                                    <div className="font-weight-light">
                                        <p>Not a member? Sign Up</p>
                                        <p>Forgot Password?</p>
                                    </div>
                                </MDBModalFooter>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </div>
        </MDBContainer>
    );
};

export default LoginForm;
