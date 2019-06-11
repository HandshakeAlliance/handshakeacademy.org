import React, { Component } from 'react';
import * as Hero from './styled-components';

export default class HeroComponent extends Component {

  render() {
    return (
      <Hero.Wrapper>
        <Hero.Description>
          Working together to save the future of the internet
          <Hero.LearnButton href="https://handshake.org/" target="_blank" rel="noopener noreferrer">Learn More</Hero.LearnButton>
        </Hero.Description>
      </Hero.Wrapper>
    )
  }
}
