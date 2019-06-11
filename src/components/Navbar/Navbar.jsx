import React, { Component } from 'react';
import * as Navbar from './styled-components';
import HNSAcademy from '../Logos/HNSAcademy';

export default class NavbarComponent extends Component {
  render() {
    return (
      <Navbar.Wrapper>
        <Navbar.LogoLeft>
          <HNSAcademy />
        </Navbar.LogoLeft>
        <Navbar.Item href="faq">FAQ</Navbar.Item>
        <Navbar.Item href="resources">RESOURCES</Navbar.Item>
        <Navbar.Item href="howto">HOW TO</Navbar.Item>
        <Navbar.Contribute href="https://github.com/HandshakeAlliance" target="_blank" rel="noopener noreferrer">CONTRIBUTE</Navbar.Contribute>
      </Navbar.Wrapper>
    )
  }
}
