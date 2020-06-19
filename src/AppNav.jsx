import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse} from "mdbreact";
import { Route, Router, Switch } from 'react-router-dom';
import history from './history';
import LeaderBoard from './containers/leaderboard';
import Landing from './containers/Landing';
import How from './containers/how';
import Particles from "react-particles-js";
import MinerSwitch from "./components/MinerSwitch"
import './App.css'

const schema = {
  "particles": {
      "number": {
          "value": 260,
          "density": {
              "enable": false
          }
      },
      "size": {
          "value": 5,
          "random": true,
          "anim": {
              "speed": 4,
              "size_min": 0.3
          }
      },
      "line_linked": {
          "enable": false
      },
      "move": {
          "random": true,
          "speed": 1,
          "direction": "top",
          "out_mode": "out"
      }
  },
  "interactivity": {
      "events": {
          "onhover": {
              "enable": true,
              "mode": "bubble"
          },
          "onclick": {
              "enable": true,
              "mode": "repulse"
          }
      },
      "modes": {
          "bubble": {
              "distance": 250,
              "duration": 2,
              "size": 0,
              "opacity": 0
          },
          "repulse": {
              "distance": 400,
              "duration": 4
          }
      }
  }
  }

class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

resize = () => this.forceUpdate()

componentDidMount() {
  window.addEventListener('resize', this.resize)
}

componentWillUnmount() {
  window.removeEventListener('resize', this.resize)
}

render() {
  return (
    <div className="height">
    <Router history={history} className=""> 
    <div>
    <MDBNavbar className="background" dark expand="md">
      <MDBNavbarBrand>
      <MDBNavLink className="waves-effect waves-light font-nav" to="/"><strong className="white-text">BURN MONEY</strong></MDBNavLink>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={this.toggleCollapse} />
      <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
        <MDBNavbarNav right>
        <MDBNavItem>
            <MDBNavLink className="waves-effect waves-light font-nav" to="/how">HOW</MDBNavLink>
          </MDBNavItem>
        <MDBNavItem>
            <MDBNavLink className="waves-effect waves-light font-nav" to="/leaders">LEADERBOARD</MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MinerSwitch></MinerSwitch>
        </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
    </div>
    <Switch>
      <div>
      <Route
          exact={true}
          path="/"
          component={Landing}
          key="landingRoute"
      />
      <Route
          exact={true}
          path="/leaders"
          component={LeaderBoard}
          key="leaderRoute"
      />
      <Route
          exact={true}
          path="/how"
          component={How}
          key="howRoute"
      />
      </div> 
      </Switch>
    </Router>
    <div
    style={{
      position: "fixed",
      top: 50,
      left: 0,
      width: "100%",
      height: "90%",
    }
  }
  >
    <Particles
      params ={schema}
    />
    </div>
    </div>
    );
  }
}

export default NavbarPage;
