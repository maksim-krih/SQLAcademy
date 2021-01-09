import React from 'react';
import { makeStyles } from '@material-ui/core';
import SchoolIcon from '@material-ui/icons/School';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import { OutlinedInput, Button } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#3D5AFE',
    display: "flex",
    position: "fixed",
    height: "100%",
    width: "100%"
  },
  container: {
    backgroundColor: "#304FFE",
    borderRadius: 10,
    margin: "auto",
    width: 411,
    color: "#FFFFFF",
    padding: "22px 18px 8px 18px"
  },
  titleText: {
    fontSize: 24,
    lineHeight: "28px",
    fontWeight: "bold"
  },
  titleIcon: {
    marginRight: 8,
    width: 38,
    height: 31
  },
  title: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18
  },
  inputLabel: {
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: "21px",
    marginBottom: 7
  },
  inputContainer: {
    backgroundColor: "#FFFFFF",
    border: "1px solid #E2E2E2",
    boxSizing: "border-box",
    borderRadius: 5,
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: "21px",
  },
  input: {
    padding: "6px 3px"
  },
  submit: {
    color: "#FFFFFF"
  },
  submitContainer: {
    display: "flex",
    justifyContent: "flex-end"
  }
});

const Login = () => {
  const classes = useStyles();

  //TODO: add grey hint
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.title}>
          <SchoolIcon className={classes.titleIcon} />
          <div className={classes.titleText}>
            SQL Academy
            </div>
        </div>
        <div style={{ marginBottom: 20 }}>
          <div className={classes.inputLabel}>Email</div>
          <OutlinedInput
            placeholder="Email"
            fullWidth
            classes={{
              root: classes.inputContainer,
              input: classes.input
            }}
          />
        </div>
        <div style={{ marginBottom: 8 }}>
          <div className={classes.inputLabel}>Password</div>
          <OutlinedInput
            placeholder="Password"
            fullWidth
            classes={{
              root: classes.inputContainer,
              input: classes.input
            }}
          />
        </div>
        <div className={classes.submitContainer}>
          <Button
            startIcon={<VpnKeyIcon />}
            className={classes.submit}
          >
            Log In
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
