import React, { Component } from 'react'
import {Link} from 'react-router-dom';
// import logo from '../logo.svg';
import logo from '../logo.png';
import styled from 'styled-components';
import {ButtonContainer} from './Button';


export default class NavBar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                {/* 
                https://www.iconfinder.com/icons/1243689/call_phone_icon
                Creative Commons (Attribution 3.0 Unported);
                https://www.iconfinder.com/Makoto_msk */}
                <Link to='/'>
                    <img src={logo} alt="store" className="navbar-brand"/>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            Products
                        </Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                       <span className="mr-2">   
                        <i className="fas fa-cart-plus"></i> My Cart
                       </span>
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
    background: #fff;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    
    .nav-link {
        color: var(--mainDark) !important;
        font-size: 1.5rem;
        font-weight: 700;
        text-transform: capitalize;
    }
`;
