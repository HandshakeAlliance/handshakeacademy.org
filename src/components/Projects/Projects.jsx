import React, { Component } from 'react';
import * as Projects from './styled-components';
import HNScan from '../Logos/HNScan';
import HNSAcademy from '../Logos/HNSAcademy';
import HNSPool from '../Logos/HNSPool';
import Nameian from '../Logos/Nameian';
import HandshakeCommunity from '../Logos/HandshakeCommunity';
import HandshakeDocs from '../Logos/HandshakeDocs';

// TODO consider adding roadmap or progress notes to each card

export default class ProjectsComponent extends Component {
  render() {
    return (
      <Projects.Wrapper>
        <Projects.Header>Projects</Projects.Header>
        <Projects.Hr />
        <Projects.CardContainer>
          <Projects.Card href="https://www.reddit.com/r/handshake/" target="_blank">
            <Projects.Brand><i class="fab fa-reddit fa-3x"></i></Projects.Brand>
            Reddit
          </Projects.Card>

          <Projects.Card href="https://twitter.com/HNSAlliance" target="_blank">
            <Projects.Brand><i class="fab fa-twitter fa-3x"></i></Projects.Brand>
            Reddit
          </Projects.Card>

          <Projects.Card href="https://github.com/HandshakeAlliance" target="_blank">
            <Projects.Brand><i class="fab fa-github fa-3x"></i></Projects.Brand>
            Reddit
          </Projects.Card>

          <Projects.Card href="https://hnscan.com" target="_blank">
            <Projects.Brand><HNScan /></Projects.Brand>
            HNScan
          </Projects.Card>

          <Projects.Card href="https://handshakehash.com/" target="_blank">
            <Projects.Brand><HNSPool /></Projects.Brand>
            Handshake Pool
          </Projects.Card>

          <Projects.Card href="https://handshakeacademy.org" target="_blank">
            <Projects.Brand><HNSAcademy /></Projects.Brand>
            Handshake Alliance
          </Projects.Card>

          <Projects.Card href="https://nameian.com" target="_blank">
            <Projects.Brand><Nameian /></Projects.Brand>
            Nameian
          </Projects.Card>

          <Projects.Card href="https://handshake.community/categories" target="_blank">
            <Projects.Brand><HandshakeCommunity /></Projects.Brand>
            Handshake Community
          </Projects.Card>

          <Projects.Card href="https://handshake.org/" target="_blank">
            <Projects.Brand><HandshakeDocs /></Projects.Brand>
            Handshake Docs
          </Projects.Card>
        </Projects.CardContainer>
      </Projects.Wrapper>
    )
  }
}
