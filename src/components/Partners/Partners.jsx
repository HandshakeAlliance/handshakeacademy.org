import React, { Component } from 'react';
import * as Partners from './styled-components';

import Amentum from '../Logos/Amentum';
import Namebase from '../Logos/Namebase';
import Provide from '../Logos/Provide';
import { ReactComponent as UrkelLabs } from '../../img/UrkelLabs.svg';
import { ReactComponent as Connext } from '../../img/connext.svg';
import { ReactComponent as HNSimple } from '../../img/HNSimple.svg';
import { ReactComponent as Kyokan } from '../../img/kyokan.svg';
export default class PartnersComponent extends Component {
  render() {
    return (
      <Partners.Wrapper>

        <Partners.Header>Collaborators</Partners.Header>
        <Partners.Hr />

        <Partners.Logos>
          <Partners.LogoWrapper href="https://amentum.org/" target="_target" rel="noopener noreferrer">
            <Amentum height="75px" />
          </Partners.LogoWrapper>
          <Partners.LogoWrapper href="https://urkel.io/" target="_blank" rel="noopener noreferrer">
            <UrkelLabs height="80px" />
          </Partners.LogoWrapper>
          <Partners.LogoWrapper href="" target="_target" rel="noopener noreferrer">
            <HNSimple />
          </Partners.LogoWrapper>
          <Partners.LogoWrapper href="https://provide.services/" target="_blank" rel="noopener noreferrer">
            <Provide height="70px" />
          </Partners.LogoWrapper>
          <Partners.LogoWrapper href="https://connext.network/" target="_blank" rel="noopener noreferrer">
            <Connext height="65px" />
          </Partners.LogoWrapper>
          <Partners.LogoWrapper href="https://apexhns.com/" target="_blank" rel="noopener noreferrer">
            <Kyokan />
          </Partners.LogoWrapper>
          <Partners.LogoWrapper href="https://namebase.io/" target="_blank" rel="noopener noreferrer">
            <Namebase height="35px" />
          </Partners.LogoWrapper>
        </Partners.Logos>
      </Partners.Wrapper>
    )
  }
}
