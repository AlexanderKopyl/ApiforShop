import React from 'react';
import {MDBIcon, MDBContainer, MDBRow, MDBCol} from 'mdbreact';
import {withRouter} from 'react-router-dom';

const DocumentPage = () => {
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

