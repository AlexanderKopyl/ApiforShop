import React from "react";
import {MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn} from "mdbreact";
import {Redirect, withRouter} from 'react-router-dom';

function CustomerInfo({isLoggedIn}) {

    if (!isLoggedIn) {
        return <Redirect to="/login"/>;
    }

    return (
            <MDBContainer>
            <form>
                <MDBRow>
                    <MDBCol md="4">
                        <MDBInput
                            name="fname"
                            type="text"
                            id="materialFormRegisterNameEx"
                            label="First name"
                            required
                        />
                    </MDBCol>
                    <MDBCol md="4">
                        <MDBInput
                            name="lname"
                            type="text"
                            id="materialFormRegisterEmailEx2"
                            label="Last name"
                            required
                        />
                    </MDBCol>
                    <MDBCol md="4">
                        <MDBInput
                            type="email"
                            id="materialFormRegisterConfirmEx3"
                            name="email"
                            label="Your Email address"
                        />
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol md="4">
                        <MDBInput
                            type="text"
                            id="materialFormRegisterPasswordEx4"
                            name="city"
                            label="City"
                            required
                        />
                    </MDBCol>
                    <MDBCol md="4">
                        <MDBInput
                            type="text"
                            id="materialFormRegisterPasswordEx4"
                            name="state"
                            label="State"
                            required
                        />
                    </MDBCol>
                    <MDBCol md="4">
                        <MDBInput
                            type="text"
                            id="materialFormRegisterPasswordEx4"
                            name="zip"
                            label="Zip"
                            required
                        />
                    </MDBCol>
                </MDBRow>
                <MDBBtn color="success" type="submit">
                    Submit Form
                </MDBBtn>
            </form>
            </MDBContainer>

    );
};

export default withRouter(CustomerInfo);

