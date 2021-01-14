import React, { useState, Fragment } from 'react';
import { makeStyles, Paper, Divider, TextField, Button as MUButton } from '@material-ui/core';
import { Button } from '../../../components';
import Api, { AuthService } from '../../../services';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { useHistory } from 'react-router-dom';

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
  const history = useHistory();
  const [quiz, setQuiz] = useState({
    name: "",
    description: ""
  });
  const [tasks, setTasks] = useState([{
    title: "",
    description: "",
    query: "",
    mark: 0
  }]);

  const save = () => {
    Api.Quiz.save({
      tasks,
      userId: Number(AuthService.User.id),
      name: quiz.name,
      description: quiz.description
    })
      .then(response => {
        history.push("/quizzes");
      })
  }

  return (
    <div>
      <Paper elevation={0} className={classes.titleContainer}>
        <div className={classes.title}>
          Quiz / Create
        </div>
        <Button onClick={save}>Save</Button>
      </Paper>
      <Paper elevation={0} className={classes.quizContainer}>
        <div className={classes.quizNameLabel}>
          Name
        </div>
        <TextField
          value={quiz.name}
          onChange={(e) => setQuiz((prev) => ({ ...prev, name: e.target.value }))}
          fullWidth
          variant="outlined"
        />
        <div className={classes.quizNameLabel} style={{ marginTop: 18 }}>
          Description
        </div>
        <TextField
          value={quiz.description}
          onChange={(e) => setQuiz((prev) => ({ ...prev, description: e.target.value }))}
          fullWidth
          variant="outlined"
        />
        <Divider className={classes.divider} />
        {tasks.map((x, i) => (
          <Fragment>
            <div className={classes.taskNumber}>
              Task #{i + 1}
            </div>
            <div className={classes.taskLabel}>
              Name
            </div>
            <TextField
              fullWidth
              onChange={(e) => setTasks((prev) => {
                prev[i] = { ...prev[i], title: e.target.value };
                return [...prev];
              })}
              value={x.title}
              variant="outlined"
            />
            <div className={classes.taskLabel}>
              Description
            </div>
            <TextField
              multiline
              onChange={(e) => setTasks((prev) => {
                prev[i] = { ...prev[i], description: e.target.value };
                return [...prev];
              })}
              value={x.description}
              rows={5}
              fullWidth
              variant="outlined"
            />
            <div className={classes.taskLabel}>
              SQL query
            </div>
            <TextField
              value={x.query}
              onChange={(e) => setTasks((prev) => {
                prev[i] = { ...prev[i], query: e.target.value };
                return [...prev];
              })}
              fullWidth
              variant="outlined"
            />
            <div className={classes.taskLabel}>
              Mark
            </div>
            <TextField
              fullWidth
              onChange={(e) => setTasks((prev) => {
                prev[i] = { ...prev[i], mark: Number(e.target.value) };
                return [...prev];
              })}
              value={x.mark}
              variant="outlined"
              type="number"
            />
            <Divider className={classes.divider} />
          </Fragment>
        ))}
        <div className={classes.addTaskContainer}>
          <MUButton
            startIcon={<AddCircleIcon />}
            onClick={() => {
              setTasks(prev => [...prev, {
                title: "",
                description: "",
                query: "",
                mark: 0
              }])
            }}
          >
            Add Task
          </MUButton>
        </div>
      </Paper>
    </div>
  );
}

export default QuizzesCreate;
