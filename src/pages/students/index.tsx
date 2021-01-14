import React, { useEffect, useState } from 'react';
import { makeStyles, Paper } from '@material-ui/core';
import { Button } from '../../components';
import { User } from "../../services/types";
import Api from "../../services";
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

const Students = () => {
  const classes = useStyles();
  const history = useHistory();
  const [students, setStudents] = useState<Array<User>>([])

  useEffect(() => {
    (async () => {
      Api.Auth.getUsers()
        .then(users => setStudents(users.filter(user => user.role.name === 'Student')))
    })()
  }, [])

  return (
    <div>
      <Paper elevation={0} className={classes.titleContainer}>
        <div className={classes.title}>
          Students
        </div>
      </Paper>
      <Paper elevation={0} className={classes.studentsContainer}>
        <table className={classes.students}>
          <thead>
            <tr>
              <th style={{ minWidth: 45 }}>Id</th>
              <th style={{ minWidth: 151 }}>Name</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr>
                <td>{student.id}</td>
                <td>{student.firstName} {student.lastName}</td>
                <td
                  style={{
                    textAlign: "right",
                    width: "100%",
                    paddingTop: 9,
                    paddingRight: 13,
                    paddingBottom: 7,
                  }}
                >
                  <Button
                    className={classes.results}
                    onClick={() => {
                      history.push(`/results/${student.id}`);
                    }}
                  >
                    View Results
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Paper>
    </div>
  );
}

export default Students;
