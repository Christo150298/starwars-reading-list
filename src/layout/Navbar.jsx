import React from "react";
import { Link } from 'react-router-dom';
import "../styles/layout/navbar.css"
import FavoritesItems from "../components/FavoritesItems";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const NavBar = () => {

    return (
        <Navbar className="navbar-style">
            <Container>
                <Navbar.Brand><Link to="/"><img src={"/media/Logo.png"}/></Link></Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <FavoritesItems />
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;