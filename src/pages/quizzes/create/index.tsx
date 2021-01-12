import React from 'react';
import { makeStyles, Paper, Divider, TextField, Button as MUButton } from '@material-ui/core';
import { Button } from '../../../components';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const useStyles = makeStyles({
  titleContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 23,
    marginBottom: 23
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: "28px"
  },
  quizContainer: {
    padding: "18px 16px 18px 22px"
  },
  quizNameLabel: {
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: "21px",
    marginBottom: 18
  },
  divider: {
    margin: "26px 0"
  },
  addTaskContainer: {
    display: "flex",
    justifyContent: "flex-end"
  },
  taskLabel: {
    marginTop: 18,
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: "21px",
    marginBottom: 13
  },
  taskNumber: {
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: "28px"
  }
});

const QuizzesCreate = () => {
  const classes = useStyles();

  return (
    <div>
      <Paper elevation={0} className={classes.titleContainer}>
        <div className={classes.title}>
          Quiz / Create
        </div>
        <Button>Save</Button>
      </Paper>
      <Paper elevation={0} className={classes.quizContainer}>
        <div className={classes.quizNameLabel}>
          Name
        </div>
        <TextField
          fullWidth
          variant="outlined"
        />
        <Divider className={classes.divider} />
        <div className={classes.taskNumber}>
          Task #1
        </div>
        <div className={classes.taskLabel}>
          Name
        </div>
        <TextField
          fullWidth
          variant="outlined"
        />
        <div className={classes.taskLabel}>
          Description
        </div>
        <TextField
          multiline
          rows={5}
          fullWidth
          variant="outlined"
        />
        <div className={classes.taskLabel}>
          SQL query
        </div>
        <TextField
          fullWidth
          variant="outlined"
        />
        <Divider className={classes.divider} />
        <div className={classes.addTaskContainer}>
          <MUButton
            startIcon={<AddCircleIcon />}
          >
            Add Task
          </MUButton>
        </div>
      </Paper>
    </div>
  );
}

export default QuizzesCreate;
