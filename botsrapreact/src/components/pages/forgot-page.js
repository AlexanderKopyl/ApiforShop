import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput } from 'mdbreact';
import {withRouter} from 'react-router-dom';


const ForgotPage = ({forgotPass}) => {
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