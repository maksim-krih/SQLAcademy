import React from 'react';
import { makeStyles, Paper, Grid, Divider } from '@material-ui/core';
import { Button } from '../../components';

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
  const tasks = [1, 2, 3, 4, 5, 6];

  return (
    <div>
      <Paper elevation={0} className={classes.titleContainer}>
        <div className={classes.title}>
          Results
        </div>
      </Paper>
      <Grid container spacing={4}>
        {tasks.map(x => (
          <Grid item xs={4}>
            <Paper elevation={0} className={classes.paper}>
              <div className={classes.quizTitle}>
                {x}. Lorem ipsum dolor
              </div>
              <Divider
                className={classes.divider}
              />
              <div className={classes.footer}>
                <div className={classes.score}>
                  Score: 8 / 10
              </div>
                <Button>View</Button>
              </div>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Results;
