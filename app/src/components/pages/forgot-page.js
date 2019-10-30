import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput } from 'mdbreact';
import {Redirect,withRouter} from 'react-router-dom';
import fun from "../../lib/function";


const ForgotPage = ({forgotPass}) => {

    const auth_token = fun.getItem('auth_token');
    const time_token  = fun.getItem('time_token');
    const now = new Date().getTime();

    if(now > time_token){
        fun.removeItem('auth_token');
        fun.removeItem('time_token');
        fun.removeItem('user_id');
    }

    if(auth_token === 'null' || auth_token === null){
        return (
            <Redirect to="/login"/>
        )
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
                                       Forgot password
                                    </h3>
                                </MDBRow>
                            </div>
                            <MDBCardBody className="mx-4 mt-4">
                                <MDBInput label="Your email" group type="text" validate />
                                <p className="font-small grey-text d-flex justify-content-end">
                                    <a  href="/Login"   className="dark-grey-text font-weight-bold ml-1">
                                        You have account?
                                    </a>
                                </p>
                                <div className="text-center mb-4 mt-5">
                                    <MDBBtn
                                        color="danger"
                                        type="button"
                                        onClick={forgotPass}
                                        className="btn-block z-depth-2"
                                    >
                                        Send
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

export default withRouter(ForgotPage);