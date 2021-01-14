import React, { useEffect, useState } from 'react';
import { makeStyles, Paper, Divider, TextField } from '@material-ui/core';
import { Button } from '../../components';
import { useHistory, useParams } from 'react-router-dom';
import Api, { AuthService } from '../../services';
import { QueryResultDto, QuizDto } from '../../services/quiz/types';

const useStyles = makeStyles({
  quizTitleContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 23,
    marginBottom: 23
  },
  quizTitle: {
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
    minWidth: 362,
    maxWidth: 362
  },
  taskBody: {
    display: "flex"
  },
  taskBodyVerticalDivider: {
    margin: "-46px 21px 0 10px"
  },
  taskInput: {
    marginBottom: 38
  },
  taskOutput: {
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
  taskCompletion: {
    width: "100%"
  },
  taskDivider: {
    marginBottom: 22,
    marginTop: 14,
  }
});

const Passing = () => {
  const classes = useStyles();
  const history = useHistory();
  const [quiz, setQuiz] = useState<QuizDto>({
    id: 0,
    name: "",
    description: "",
    tasks: [],
    userId: 0
  });
  let { quizId } = useParams<{ quizId: string }>();
  const [taskQueries, setTaskQueries] = useState<Array<string>>([]);
  const [taskTables, setTaskTables] = useState<Array<Array<QueryResultDto>>>([]);

  useEffect(() => {
    (async () => {
      Api.Quiz.getById(quizId)
        .then(quiz => {
          setQuiz(quiz);
          setTaskQueries(new Array(quiz.tasks.length));
          setTaskTables(new Array(quiz.tasks.length));
        })
    })()
  }, [])

  return (
    <div>
      <Paper elevation={0} className={classes.quizTitleContainer}>
        <div className={classes.quizTitle}>
          {quiz.name}
        </div>
        <Button
          onClick={() => {
            Api.Quiz.completeQuiz({
              userId: Number(AuthService.User.id),
              quizId: Number(quizId),
              answers: taskQueries.map((x, i) => ({
                answer: x,
                taskId: quiz.tasks[i].id,
              }))
            }).then(x => {
              history.push(`/result/${x.results[0].quizId}`);
            });
          }}
        >
          Submit
        </Button>
      </Paper>
      <Paper elevation={0} className={classes.taskContainer}>
        {quiz.tasks.map((x, i) => (
          <div>
            <div className={classes.taskTitleContainer}>
              <div className={classes.taskTitle}>
                {i + 1}. {x.title}
              </div>
              <Button
                onClick={() => {
                  Api.Quiz.runQuery(taskQueries[i]).then(x => {
                    setTaskTables((prev) => {
                      prev[i] = x;
                      return [...prev];
                    });
                  });
                }}
              >
                Run
              </Button>
            </div>
            <div className={classes.taskBody}>
              <div className={classes.taskDescription}>
                {x.description}
              </div>
              <Divider
                orientation="vertical"
                flexItem
                className={classes.taskBodyVerticalDivider}
              />
              <div className={classes.taskCompletion}>
                <TextField
                  multiline
                  rows={5}
                  fullWidth
                  value={taskQueries[i]}
                  onChange={(e) => setTaskQueries((prev) => {
                    prev[i] = e.target.value;
                    return [...prev];
                  })}
                  className={classes.taskInput}
                  variant="outlined"
                />
                {taskTables[i] && taskTables[i].length > 0 &&
                  <table className={classes.taskOutput}>
                    <thead>
                      <tr>
                        {"id" in taskTables[i][0] &&
                          <th style={{ minWidth: 45 }}>Id</th>
                        }
                        {"name" in taskTables[i][0] &&
                          <th style={{ minWidth: 151 }}>Name</th>
                        }
                        {"description" in taskTables[i][0] &&
                          <th>Description</th>
                        }
                        {"price" in taskTables[i][0] &&
                          <th style={{ minWidth: 83 }}>Price</th>
                        }
                      </tr>
                    </thead>
                    <tbody>
                      {taskTables[i].map(x =>
                        <tr>
                          {x.id && <td>{x.id}</td>}
                          {x.name && <td>{x.name}</td>}
                          {x.description && <td>{x.description}</td>}
                          {x.price && <td>{x.price}</td>}
                        </tr>
                      )}
                    </tbody>
                  </table>}
              </div>
            </div>
            <Divider
              className={classes.taskDivider}
              hidden={quiz.tasks.length - 1 === i}
            />
          </div>
        ))}
      </Paper>
    </div >
  );
}

export default Passing;
