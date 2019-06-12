import React, { Component } from 'react';
import * as Objective from './styled-components';

export default class ObjectiveComponent extends Component {
  render() {
    return (
      <Objective.Wrapper>
        <Objective.Header>Booyah</Objective.Header>

        <Objective.CardContainer>
          <Objective.Card href="https://handshake.org/files/handshake.txt">
            <Objective.CardIcon>
              <i className="fa fa-book-open"></i>
            </Objective.CardIcon>
            <Objective.CardHeader>White Paper</Objective.CardHeader>
            <Objective.CardBody>Get started by reading the Handshake white paper</Objective.CardBody>
          </Objective.Card>
          <Objective.Card href="faq/">
            <Objective.CardIcon>
              <i className="fa fa-question"></i>
            </Objective.CardIcon>
            <Objective.CardHeader>FAQs</Objective.CardHeader>
            <Objective.CardBody>Check out some frequently asked questions</Objective.CardBody>
          </Objective.Card>
          <Objective.Card href="howto/">
            <Objective.CardIcon>
              <i className="fa fa-chalkboard-teacher"></i>
            </Objective.CardIcon>
            <Objective.CardHeader>Learn</Objective.CardHeader>
            {/* TODO - this needs to be linked on revamp release */}
            <Objective.CardBody>Coming Soon</Objective.CardBody>
          </Objective.Card>

        </Objective.CardContainer>
      </Objective.Wrapper>
    )
  }
}
