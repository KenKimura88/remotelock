import React, {Component} from 'react';
import { connect } from 'react-redux';
import Chip from '@material-ui/core/Chip';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import useStyles from './style';
import Header from '../../components/header';
import get from 'lodash.get';
import { format } from 'date-fns';

class ListFriends extends Component {
  convertDate = (originDate) => {
    let fulldate = format(new Date(originDate), 'MMM DD HH:mm');    
    return fulldate;
  }

  checkActive = (originDate) => {
    let fulldate = new Date(originDate);
    let today = new Date();

    return !originDate ? true : (today > fulldate);
  }
  
  displayDate = (user) => {
    const startAt = get(user, 'attributes.starts_at');
    const endAt = get(user, 'attributes.ends_at');

    if (startAt) {
      return (
        <span>
          {`${this.convertDate(startAt)} - ${this.convertDate(endAt)}`}
        </span>
      );
    }
    return null;
  }

  render() {
    const { classes, userList } = this.props
    return (
      <div>
        <Header page="users"></Header>
        <List className={classes.root}>
          {userList && userList.map((user) => (
            <ListItem key={get(user, 'id')} alignItems="flex-start">
              <ListItemAvatar>
                <Avatar className={classes.avatarClass}>{get(user, 'attributes.name').charAt(0)}</Avatar>
              </ListItemAvatar>
              <div className={classes.informContainer}>
                <ListItemText
                  primary={get(user, 'attributes.name')}
                  className={classes.userName}
                  secondary={
                    <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textSecondary"
                    >
                    {get(user, 'attributes.email')}
                    </Typography>
                    </React.Fragment>
                  }
                />
                { this.displayDate(user) }
                <div className={classes.buttonContainer}>
                  <Chip
                    size="medium"
                    label={this.checkActive(get(user, 'attributes.starts_at')) ? 'ACTIVE' : 'UPCOMING'}
                    className={classes.chip}
                    color={this.checkActive(get(user, 'attributes.starts_at')) ? 'primary' : 'secondary'}
                  />
                </div>
              </div>
          </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

ListFriends.propTypes = {
  userList: PropTypes.array,
  getUser: PropTypes.func
}

const mapStateToProps = state => ({
  userList: state.userList
})

export default connect(mapStateToProps, null)(withStyles(useStyles)(ListFriends));
