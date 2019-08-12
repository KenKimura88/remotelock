import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Devices from './containers/devices';
import Users from './containers/users';
import { getDevice, getUser } from './actions';

class App extends Component {
  componentDidMount() {
    this.props.getDevice();
    this.props.getUser();
  }
  render() {
    return (
      <div className="mainContainer">
        <Router>
          <Route exact path="/" component={Devices}></Route>
          <Route exact path="/device" component={Devices}></Route>
          <Route exact path="/users" component={Users}></Route>
        </Router>
      </div>
    );
  }
}
App.propTypes = {
  getDevice: PropTypes.func,
  getUser: PropTypes.func
};

const mapDispatchToProps = {
  getDevice,
  getUser
};

export default connect(
  null,
  mapDispatchToProps
)(App);
