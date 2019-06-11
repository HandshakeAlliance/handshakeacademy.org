import React, { Component } from 'react';
import * as Hero from './styled-components';
import Handshake from '../Logos/Handshake';

export default class HeroComponent extends Component {

  render() {
    return (
      <Hero.Wrapper>
        <Hero.Body>
          <Hero.Header>Handshake</Hero.Header>
          <Hero.Description>
            A decentralized naming protocol as an alternative to existing Certificate Authorities. The protocol maintains the root zone file in a decentralized manner, making the root zone uncensorable, permissionless and free of gatekeepers.
          </Hero.Description>
          {/* TODO this should go to the faq page */}
          <Hero.Button href="https://handshake.org/" target="_blank" rel="noopener noreferrer">GET STARTED</Hero.Button>
        </Hero.Body>
        <Hero.Logo>
          <Handshake />
        </Hero.Logo>
      </Hero.Wrapper>
    )
  }
}
