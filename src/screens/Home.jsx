import React, { Component } from 'react';

import HeroComponent from '../components/Hero/Hero.jsx';
import ObjectiveComponent from '../components/Objective/Objective.jsx';
import ProjectsComponent from '../components/Projects/Projects.jsx';
import PartnersComponent from '../components/Partners/Partners.jsx';
import DonationsComponent from '../components/Donations/Donations.jsx';

export default class Home extends Component {
  render() {
    return (
      <div>
        <HeroComponent />
        <ObjectiveComponent />
        <ProjectsComponent />
        <PartnersComponent />
        <DonationsComponent />
      </div>
    )
  }
}