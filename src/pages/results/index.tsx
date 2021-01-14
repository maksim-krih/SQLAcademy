import React, { useEffect, useState } from 'react';
import { makeStyles, Paper, Grid, Divider } from '@material-ui/core';
import { Button } from '../../components';
import { Summary } from "../../services/result/types";
import { QuizDto } from "../../services/quiz/types";
import Api, { AuthService } from "../../services";
import { useHistory, useParams } from 'react-router-dom';

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
  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  score: {
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: "26px"
  }
});

const Results = () => {
  const classes = useStyles();
  const history = useHistory();

  let { userId } = useParams<{ userId: string }>();

  const [summary, setSummary] = useState<Summary>()
  const [quizzes, setQuizzes] = useState<Array<QuizDto>>([]);

  useEffect(() => {
    (async () => {
      Api.Quiz.getAll().then(response => {
        setQuizzes(response);
      })
    })()
  }, []);

  useEffect(() => {
    (async () => {
      Api.Result.getUserResults(userId || AuthService.User.id).then(response => {
        setSummary(response);
      })
    })()
  }, []);

  return (
    <div>
      <Paper elevation={0} className={classes.titleContainer}>
        <div className={classes.title}>
          Results
        </div>
      </Paper>
      <Grid container spacing={4}>
        {summary && Object.keys(summary.quizzes as any).map(quizId => {
          const quiz = quizzes.find(quiz => (quiz as any).id == quizId) as any
          return quiz && (
            <Grid item xs={4}>
              <Paper elevation={0} className={classes.paper}>
                <div className={classes.quizTitle}>
                  {quiz.name}
                </div>
                <Divider
                  className={classes.divider}
                />
                <div className={classes.footer}>
                  <div className={classes.score}>
                    Mark: {summary.quizzes[quizId].reduce((previousValue, currentValue) => previousValue + currentValue.isCorrect ? currentValue.task.mark : 0, 0)} / {" "}
                    {summary.quizzes[quizId].reduce((previousValue, currentValue) => previousValue + currentValue.task.mark as number, 0)}
                  </div>
                  <Button
                    onClick={() => {
                      history.push(`/result/${quizId}/${userId || AuthService.User.id}`);
                    }}
                  >
                    View
                    </Button>
                </div>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default Results;
