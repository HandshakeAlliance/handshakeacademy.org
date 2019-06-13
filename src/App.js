import React from 'react';
import './App.scss';

import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomeScreen from './screens/Home.jsx';
import FaqScreen from './screens/Faq.jsx';
import ResourcesScreen from './screens/Resources.jsx';
import HowToScreen from './screens/HowTo.jsx';

import NavbarComponent from './components/Navbar/Navbar.jsx';
import FooterComponent from './components/Footer/Footer.jsx';

import themes from './theme-variables.js';
import { breakpoints } from './breakpoint-variables.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const theme = {
  breakpoint: breakpoints,
  ...themes
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavbarComponent />
        <ToastContainer
          autoClose={3000}
          hideProgressBar={true}
        />
        <Router>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/faq" component={FaqScreen} />
          <Route exact path="/resources" component={ResourcesScreen} />
          <Route exact path="/howto" component={HowToScreen} />
        </Router>
        <FooterComponent />
      </div>
    </ThemeProvider>
  );
}

export default App;
