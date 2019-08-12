const useStyles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper
  },
  userName: {
    fontWeight: 'bold',
    fontSize: '1.5em'
  },
  avatarClass: {
    width: '100px',
    height: '100px',
    marginRight: '20px'
  },
  informContainer: {
    width: '80%'
  },
  buttonContainer: {
    textAlign: 'right',
    marginTop: '10px'
  },
  chip: {
    width: '150px !important',
    margin: theme.spacing(1)
  }
});

export default useStyles;
