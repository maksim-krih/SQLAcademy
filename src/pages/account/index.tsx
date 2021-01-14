import React, {useEffect, useState} from 'react';
import {makeStyles, Paper, Typography} from '@material-ui/core';
import { Button } from '../../components';
import {User} from "../../services/types";
import Api, {AuthService} from "../../services";
import {QuizDto} from "../../services/quiz/types";
import {Summary} from "../../services/result/types";

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
  studentsContainer: {
    padding: "18px 16px 18px 22px"
  },
  students: {
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: "26px",
    borderCollapse: "collapse",
    "& th, & td": {
      border: "1px solid #E2E2E2",
      verticalAlign: "bottom",
      paddingLeft: 10
    },
    "& th": {
      textAlign: "left"
    },
  },
  results: {
    paddingLeft: 19,
    paddingRight: 19,
    fontSize: 14,
    lineHeight: "16px"
  }
});

const Account = () => {
  const classes = useStyles();
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
      Api.Result.getUserResults(AuthService.User.id).then(response => {
        setSummary(response);
      })
    })()
  }, []);

  const userName = `${AuthService.User.firstName} ${AuthService.User.lastName}`;
  return (
    <div>
      <Paper elevation={0} className={classes.titleContainer}>
        <div className={classes.title}>
          {userName}
        </div>
      </Paper>
      <Paper elevation={0} className={classes.studentsContainer}>
        <Typography variant="h5" gutterBottom>
          Completed quizzes: {summary ? Object.keys(summary.quizzes).length : 0} / {quizzes.length}
        </Typography>
        <table className={classes.students}>
          <thead>
          <tr>
            <th style={{ minWidth: 45 }}>Id</th>
            <th style={{ minWidth: 151 }}>Name</th>
            <th style={{ minWidth: 151 }}>Tasks</th>
            <th style={{ minWidth: 151 }}>Marks</th>
            <th/>
          </tr>
          </thead>
          <tbody>
          {summary && Object.keys(summary.quizzes as any).map(quizId => {
            const quiz = quizzes.find(quiz => (quiz as any).id == quizId) as any
            return quiz && (
              <tr>
                <td>{quizId}</td>
                <td>{quiz.name}</td>
                <td>
                  {summary.quizzes[quizId].reduce((previousValue, currentValue) => previousValue + currentValue.isCorrect ? 1 : 0, 0)} / {" "}
                  {summary.quizzes[quizId].length}
                </td>
                <td>
                  {summary.quizzes[quizId].reduce((previousValue, currentValue) => previousValue + currentValue.isCorrect ? currentValue.task.mark : 0, 0)} / {" "}
                  {summary.quizzes[quizId].reduce((previousValue, currentValue) => previousValue + currentValue.task.mark as number, 0)}
                </td>
                <td
                  style={{
                    textAlign: "right",
                    width: "100%",
                    paddingTop: 9,
                    paddingRight: 13,
                    paddingBottom: 7,
                  }}
                >
                  <Button className={classes.results}>View Results</Button>
                </td>
              </tr>
            );
          })}
          </tbody>
        </table>
      </Paper>
    </div>
  );
}

export default Account;