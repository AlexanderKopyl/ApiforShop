import React from "react";
import {MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput, MDBContainer} from "mdbreact";
import { Redirect,withRouter } from 'react-router-dom';
import fun from "../../lib/function";

const ContactPage = () => {

    const auth_token = fun.getItem('auth_token');

    if(auth_token === 'null' || auth_token === null){
        return (
            <Redirect to="/login"/>
        )
    }

    return (
        <MDBContainer>
            <section className="my-5">
                <h2 className="h1-responsive font-weight-bold text-center my-5">
                    Contact us
                </h2>
                <p className="text-center w-responsive mx-auto pb-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                    error amet numquam iure provident voluptate esse quasi, veritatis
                    totam voluptas nostrum quisquam eum porro a pariatur veniam.
                </p>
                <MDBRow>
                    <MDBCol lg="5" className="lg-0 mb-4">
                        <MDBCard>
                            <MDBCardBody>
                                <div className="form-header blue accent-1">
                                    <h3 className="mt-2">
                                        <MDBIcon icon="envelope"/> Write to us:
                                    </h3>
                                </div>
                                <p className="dark-grey-text">
                                    We'll write rarely, but only the best content.
                                </p>
                                <div className="md-form">
                                    <MDBInput
                                        icon="user"
                                        label="Your name"
                                        iconClass="grey-text"
                                        type="text"
                                        id="form-name"
                                    />
                                </div>
                                <div className="md-form">
                                    <MDBInput
                                        icon="envelope"
                                        label="Your email"
                                        iconClass="grey-text"
                                        type="text"
                                        id="form-email"
                                    />
                                </div>
                                <div className="md-form">
                                    <MDBInput
                                        icon="tag"
                                        label="Subject"
                                        iconClass="grey-text"
                                        type="text"
                                        id="form-subject"
                                    />
                                </div>
                                <div className="md-form">
                                    <MDBInput
                                        icon="pencil-alt"
                                        label="Icon Prefix"
                                        iconClass="grey-text"
                                        type="textarea"
                                        id="form-text"
                                    />
                                </div>
                                <div className="text-center">
                                    <MDBBtn color="light-blue">Submit</MDBBtn>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol lg="7">
                        <div
                            id="map-container"
                            className="rounded z-depth-1-half map-container"
                            style={{height: "400px"}}
                        >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2646.3357044662826!2d35.05973264212404!3d48.450088084100415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe32a0fee9731%3A0x5e3b644a320aca86!2z0JfQvtC-0LvQvtCz0LjRjw!5e0!3m2!1sru!2sua!4v1571387978987!5m2!1sru!2sua"
                                title="This is a unique title"
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                style={{border: 0}}
                            />
                        </div>
                        <br/>
                        <MDBRow className="text-center">
                            <MDBCol md="4">
                                <MDBBtn tag="a" floating color="blue" className="accent-1">
                                    <MDBIcon icon="map-marker-alt"/>
                                </MDBBtn>
                                <p>New York, 94126</p>
                                <p className="mb-md-0">United States</p>
                            </MDBCol>
                            <MDBCol md="4">
                                <MDBBtn tag="a" floating color="blue" className="accent-1">
                                    <MDBIcon icon="phone"/>
                                </MDBBtn>
                                <p>+ 01 234 567 89</p>
                                <p className="mb-md-0">Mon - Fri, 8:00-22:00</p>
                            </MDBCol>
                            <MDBCol md="4">
                                <MDBBtn tag="a" floating color="blue" className="accent-1">
                                    <MDBIcon icon="envelope"/>
                                </MDBBtn>
                                <p>info@gmail.com</p>
                                <p className="mb-md-0">sale@gmail.com</p>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
            </section>
        </MDBContainer>
    );
};

export default withRouter(ContactPage);