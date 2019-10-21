import React from "react";
import {MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn} from "mdbreact";
import {withRouter} from 'react-router-dom';

class CustomerInfo extends React.Component {
    state = {
        fname: "Mark",
        lname: "Otto",
        email: "",
        city: "",
        state: "",
        zip: ""
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
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="12">
                        <h1>Ваша личная информация</h1>
                        <div className="customer-info-form">
                            <form
                                className="needs-validation"
                                onSubmit={this.submitHandler}
                                noValidate
                            >
                                <MDBRow>
                                    <MDBCol md="4">
                                        <MDBInput
                                            value={this.state.fname}
                                            name="fname"
                                            onChange={this.changeHandler}
                                            type="text"
                                            id="materialFormRegisterNameEx"
                                            label="First name"
                                            required
                                        >
                                            <div className="valid-feedback">Looks good!</div>
                                        </MDBInput>
                                    </MDBCol>
                                    <MDBCol md="4">
                                        <MDBInput
                                            value={this.state.lname}
                                            name="lname"
                                            onChange={this.changeHandler}
                                            type="text"
                                            id="materialFormRegisterEmailEx2"
                                            label="Last name"
                                            required
                                        >
                                            <div className="valid-feedback">Looks good!</div>
                                        </MDBInput>
                                    </MDBCol>
                                    <MDBCol md="4">
                                        <MDBInput
                                            value={this.state.email}
                                            onChange={this.changeHandler}
                                            type="email"
                                            id="materialFormRegisterConfirmEx3"
                                            name="email"
                                            label="Your Email address"
                                        >
                                            <small id="emailHelp" className="form-text text-muted">
                                                We'll never share your email with anyone else.
                                            </small>
                                        </MDBInput>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol md="4">
                                        <MDBInput
                                            value={this.state.city}
                                            onChange={this.changeHandler}
                                            type="text"
                                            id="materialFormRegisterPasswordEx4"
                                            name="city"
                                            label="City"
                                            required
                                        >
                                            <div className="invalid-feedback">
                                                Please provide a valid city.
                                            </div>
                                            <div className="valid-feedback">Looks good!</div>
                                        </MDBInput>
                                    </MDBCol>
                                    <MDBCol md="4">
                                        <MDBInput
                                            value={this.state.state}
                                            onChange={this.changeHandler}
                                            type="text"
                                            id="materialFormRegisterPasswordEx4"
                                            name="state"
                                            label="State"
                                            required
                                        >
                                            <div className="invalid-feedback">
                                                Please provide a valid state.
                                            </div>
                                            <div className="valid-feedback">Looks good!</div>
                                        </MDBInput>
                                    </MDBCol>
                                    <MDBCol md="4">
                                        <MDBInput
                                            value={this.state.zip}
                                            onChange={this.changeHandler}
                                            type="text"
                                            id="materialFormRegisterPasswordEx4"
                                            name="zip"
                                            label="Zip"
                                            required
                                        >
                                            <div className="invalid-feedback">
                                                Please provide a valid zip.
                                            </div>
                                            <div className="valid-feedback">Looks good!</div>
                                        </MDBInput>
                                    </MDBCol>
                                </MDBRow>
                                <MDBBtn color="success" type="submit">
                                    Submit Form
                                </MDBBtn>
                            </form>
                        </div>

                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    }
};

export default withRouter(CustomerInfo);

