import React from 'react';
import { makeStyles, Paper, Divider, TextField } from '@material-ui/core';
import { Button } from '../../components';

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
  const tasks = [1, 2];

  return (
    <div>
      <Paper elevation={0} className={classes.quizTitleContainer}>
        <div className={classes.quizTitle}>
          Quiz: Lorem ipsum dolor
        </div>
        <Button>Submit</Button>
      </Paper>
      <Paper elevation={0} className={classes.taskContainer}>
        {tasks.map((x, i) => (
          <div>
            <div className={classes.taskTitleContainer}>
              <div className={classes.taskTitle}>
                {x}. Lorem ipsun dolor
              </div>
              <Button>Run</Button>
            </div>
            <div className={classes.taskBody}>
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
                  className={classes.taskInput}
                  variant="outlined"
                />
                <table className={classes.taskOutput}>
                  <thead>
                    <tr>
                      <th style={{ minWidth: 45 }}>Id</th>
                      <th style={{ minWidth: 151 }}>Name</th>
                      <th>Description</th>
                      <th style={{ minWidth: 83 }}>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Lorem ipsum dolor</td>
                      <td>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec eros erat, feugiat sed scelerisque vel, feugiat et lorem.
                      </td>
                      <td>30</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Lorem ipsum dolor</td>
                      <td>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec eros erat, feugiat sed scelerisque vel, feugiat et lorem.
                      </td>
                      <td>15</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Lorem ipsum dolor</td>
                      <td>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec eros erat, feugiat sed scelerisque vel, feugiat et lorem.
                </td>
                      <td>100</td>
                    </tr>
                  </tbody>
                </table>
              </div>
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

export default Passing;
