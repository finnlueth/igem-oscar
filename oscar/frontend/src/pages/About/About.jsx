import React from 'react';
import Header from '../../containers/header/Header';
import Footer from '../../containers/footer/Footer';

import {Alert, Container, Row, Col, InputGroup, Form} from 'react-bootstrap';

const About = () => {
    return (
        <div className='About'>
            <Header/>
            <Container fluid>
                About Page
            </Container>
            <Footer/>
        </div>
    );
}

export default About