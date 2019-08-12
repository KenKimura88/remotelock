import React, { Component } from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { withStyles } from '@material-ui/styles';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import useStyles from './style';
import { headerSwitch } from '../../actions';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  handleChange = (event, newValue) => {
    const { history } = this.props;
    history.push(newValue === 0? 'device' : 'users' );
  }

  componentDidMount() {
    const { headerSwitch, page} = this.props;
    headerSwitch(page === 'device' ? 0 : 1);
  }
  
  render() {
    const { classes } = this.props;
    return (
      <BottomNavigation
        value={this.props.headerValue}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
      >
      <BottomNavigationAction label="Devices" />
      <BottomNavigationAction label="Users"  />
      </BottomNavigation>
    );
  }
}

const mapStateToProps = state => ({
  headerValue: state.headerValue
})

const mapDispatchToProps = {
  headerSwitch
}
export default connect(mapStateToProps, mapDispatchToProps)(compose(withRouter, withStyles(useStyles))(Header))