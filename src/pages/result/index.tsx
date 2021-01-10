import React from 'react';
import { makeStyles, Paper, Divider, TextField } from '@material-ui/core';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';

const useStyles = makeStyles({
  quizTitle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 23,
    marginBottom: 23,
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: "28px"
  },
  taskTitle: {
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: "28px"
  },
  taskTitleContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 9
  },
  taskContainer: {
    padding: "18px 16px 18px 22px"
  },
  taskDescription: {
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: "26px",
    marginBottom: 18
  },
  taskCompletion: {
    width: "100%",
    display: "flex"
  },
  taskCompletionText: {
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: "21px",
    whiteSpace: "nowrap",
    marginRight: 18,
    marginTop: 17
  },
  taskDivider: {
    marginBottom: 29,
    marginTop: 26,
  },
  taskResultContainer: {
    display: "flex"
  },
  taskResult: {
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: "21px",
    marginRight: 9,
  }
});

const Result = () => {
  const classes = useStyles();
  const tasks = [1, 2];

  return (
    <div>
      <Paper elevation={0} className={classes.quizTitle}>
        <div>
          Quiz: Lorem ipsum dolor
        </div>
        <div>
          8 / 10
        </div>
      </Paper>
      <Paper elevation={0} className={classes.taskContainer}>
        {tasks.map((x, i) => (
          <div>
            <div className={classes.taskTitleContainer}>
              <div className={classes.taskTitle}>
                {x}. Lorem ipsun dolor
              </div>
              <div className={classes.taskResultContainer}>
                <div className={classes.taskResult}>
                  Correct
                </div>
                <CheckBoxIcon />
                {/* <IndeterminateCheckBoxIcon /> */}
              </div>
            </div>
            <div className={classes.taskDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec eros erat, feugiat sed scelerisque vel, feugiat et lorem.
              Curabitur mattis blandit augue. Aliquam in libero id justo
              rutrum lobortis sed id nisi. Praesent scelerisque nisi nisl,
              ac porttitor justo scelerisque vitae. Vestibulum ante ipsum
              primis in faucibus orci luctus et ultrices posuere cubilia
              curae; In sed interdum erat, nec porta sapien. Nunc maximus
              erat non risus tempus varius. Praesent et volutpat odio.
              </div>
            <div className={classes.taskCompletion}>
              <div className={classes.taskCompletionText}>
                Your answer:
            </div>
              <TextField
                multiline
                fullWidth
                variant="outlined"
              />
            </div>
            <Divider
              className={classes.taskDivider}
              hidden={tasks.length - 1 === i}
            />
          </div>
        ))}
      </Paper>
    </div>
  );
}

export default Result;
