import React, { useEffect, useState } from 'react';
import { makeStyles, Paper, Divider, TextField } from '@material-ui/core';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import Api from '../../services';
import { useParams } from 'react-router-dom';
import { QuizDto, QuizResultResponse, ResultTaskDto } from '../../services/quiz/types';

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
  const [quizzes, setQuizzes] = useState<Array<QuizDto>>([]);
  const [quizResults, setQuizResults] = useState<QuizResultResponse>({
    userId: 0,
    results: []
  });
  let { quizId, userId } = useParams<{ quizId: string, userId: string }>();

  useEffect(() => {
    (async () => {
      Api.Quiz.getAll().then(response => {
        setQuizzes(response);
      })
    })()
  }, []);

  useEffect(() => {
    (async () => {
      Api.Quiz.getResults(quizId, userId)
        .then(quiz => {
          setQuizResults(quiz);
        })
    })()
  }, [])

  const quiz = quizzes.find(quiz => (quiz as any).id == quizId);

  return (
    <div>
      <Paper elevation={0} className={classes.quizTitle}>
        <div>
          {quiz?.name}
        </div>
        <div>
          {quizResults.results.reduce((previousValue, currentValue) => previousValue + (currentValue.isCorrect ? currentValue.task.mark : 0), 0)} / {" "}
          {quizResults.results.reduce((previousValue, currentValue) => previousValue + currentValue.task.mark as number, 0)}
        </div>
      </Paper>
      <Paper elevation={0} className={classes.taskContainer}>
        {quizResults.results.map((x, i) => (
          <div>
            <div className={classes.taskTitleContainer}>
              <div className={classes.taskTitle}>
                {i + 1}. {x.task.title}
              </div>
              <div className={classes.taskResultContainer}>
                <div className={classes.taskResult}>
                  {x.isCorrect ? "Correct" : "Incorrect"}
                </div>
                {x.isCorrect ? <CheckBoxIcon /> : <IndeterminateCheckBoxIcon />}
              </div>
            </div>
            <div className={classes.taskDescription}>
              {x.task.description}
            </div>
            <div className={classes.taskCompletion}>
              <div className={classes.taskCompletionText}>
                Your answer:
            </div>
              <TextField
                multiline
                fullWidth
                value={x.answer}
                InputProps={{ readOnly: true }}
                variant="outlined"
              />
            </div>
            <Divider
              className={classes.taskDivider}
              hidden={quizResults.results.length - 1 === i}
            />
          </div>
        ))}
      </Paper>
    </div>
  );
}

export default Result;
