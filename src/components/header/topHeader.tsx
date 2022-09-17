import { API_ENDPOINT } from "config/optional.cfg";
import React, { PureComponent } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { StyleSheet, Text, View } from "react-native";



export class TopHeader extends React.PureComponent {

    render(): React.ReactNode {
        return(
            <>
                <Navbar bg="black" variant="dark">
                    <Container>
                    <Navbar.Brand href="#home" style={styles.color1}>
                        <img src={`${API_ENDPOINT}/logo/brinks-logo-white.png`} alt="" />
                    </Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Contact</Nav.Link>
                            <Nav.Link href="#features">Login</Nav.Link>
                            <Nav.Link href="#features">Register</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </>
        );
    }
}

const styles = StyleSheet.create({
    color1: {
      color: "white"
    },
});
