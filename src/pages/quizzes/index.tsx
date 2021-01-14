import React, { useEffect, useState } from 'react';
import { makeStyles, Paper, Grid, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Button } from '../../components';
import Api from '../../services';
import { QuizDto } from '../../services/quiz/types';
import {Service} from "../../services/auth";

const useStyles = makeStyles({
  titleContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 23,
    marginBottom: 20
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: "28px"
  },
  paper: {
    padding: 14
  },
  quizTitle: {
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: "28px"
  },
  divider: {
    marginTop: 12,
    marginBottom: 14
  },
  button: {
    display: "flex",
    justifyContent: "flex-end"
  }
});

const Quizzes = () => {
  const classes = useStyles();
  const [quizzes, setQuizzes] = useState<Array<QuizDto>>([]);

  useEffect(() => {
    (async () => {
      Api.Quiz.getAll().then(response => {
        setQuizzes(response);
      })
    })()
  }, []);

  return (
    <div>
      <Paper elevation={0} className={classes.titleContainer}>
        <div className={classes.title}>
          Quizzes
        </div>
        {Service.IsAdmin && <Link to="/quizzes/create">
          <Button>Create</Button>
        </Link>}
      </Paper>
      <Grid container spacing={4}>
        {quizzes.map(x => (
          <Grid item xs={4}>
            <Paper elevation={0} className={classes.paper}>
              <div className={classes.quizTitle}>
                {x.name}
              </div>
              <Divider
                className={classes.divider}
              />
              <div className={classes.button}>
                <Link to={`/passing/${x.id}`}>
                  <Button>{Service.IsStudent ? 'Start' : 'Edit'}</Button>
                </Link>
              </div>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Quizzes;
