import React, {Component} from 'react';
import { connect } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { lockChanged } from '../../actions';
import LockIcon from '@material-ui/icons/Lock';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import PropTypes from 'prop-types';
import useStyles from './styles';
import IOSSwitch from '../../components/IOSSwitch';
import Header from '../../components/header';
import get from 'lodash.get';

class ListDevice extends Component {

  handleChange = (index) => (e) => {
    this.props.lockChanged(index);
  }

  renderSwitch = (device, index) => {
    return (
      <FormControlLabel
        control={
          <IOSSwitch
            checked={get(device, 'attributes.state') === 'locked'}
            onChange={this.handleChange(index)}
          />
        }
      />
    )
  }

  renderLockStatus(device, classes) {
    if ( get(device, 'attributes.state') === 'locked' ) {
      return (
        <label className={classes.locked}>
          <LockIcon className={classes.lockedIcon}/> Locked
        </label>
      );
    } 
    return ( <label className={classes.unlocked}><LockOpenIcon /> Unlocked</label> );
  }
  render() {
    const { classes, deviceList } = this.props

    return (
      <div>
        <Header page="device"></Header>
        <List className={classes.root}>
          {deviceList && deviceList.map((device, index) => (
            <ListItem key={get(device, 'id')} alignItems="flex-start">
              <ListItemAvatar>
                <Avatar className={classes.avatarClass}>{get(device, 'attributes.name').charAt(0)}</Avatar>
              </ListItemAvatar>
              <div>
                <ListItemText
                  primary= {get(device, 'attributes.name')}
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                      {get(device, 'attributes.model_number')}
                      </Typography>
                    </React.Fragment>
                  }
                />
                { this.renderSwitch(device, index) }
                { this.renderLockStatus(device, classes) }
              </div>
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

ListDevice.propTypes = {
  deviceList: PropTypes.array,
  getDevice: PropTypes.func,
  lockChanged: PropTypes.func,
}

const mapStateToProps = state => ({
  deviceList: state.deviceList
})

const mapDispatchToProps = {
  lockChanged,
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(ListDevice));