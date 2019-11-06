import React from 'react';
import {MDBIcon, MDBContainer, MDBRow, MDBCol} from 'mdbreact';
import {Redirect,withRouter} from 'react-router-dom';
import fun from "../../lib/function";

const DocumentPage = () => {

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
            <MDBRow>
                <MDBCol md="3" className="mb-3 mt-3">
                    <p>Файл откроется в новой вкладе. <br/>
                        Вы сможете его сохранить нажав правой клавишой мышки и выбрав пункт сохранить как .</p>
                    <a href="https://zoocomplex.com.ua/prom.xml" rel="noopener noreferrer" target="_blank"
                       download="http://zoocomplex.com.ua/prom.xml">
                        <button className="btn">Скачать файл <MDBIcon icon="download"/></button>
                    </a>


                </MDBCol>
            </MDBRow>

        </MDBContainer>
    );
};

export default withRouter(DocumentPage);

