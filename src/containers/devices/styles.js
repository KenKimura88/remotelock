const useStyles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: 'inline'
  },
  avatarClass: {
    width: '100px',
    height: '100px',
    marginRight: '20px'
  },
  eachCard: {
    flexDirection: 'column'
  },
  locked: {
    color: 'green',
    fontSize: '1.5em'
  },
  unlocked: {
    color: 'red',
    fontSize: '1.5em'
  }
});

export default useStyles;
