import {
  makeStyles,
  Toolbar,
  AppBar,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Drawer
} from "@material-ui/core";
import React, { FC } from "react";
import SchoolIcon from '@material-ui/icons/School';
import PersonIcon from '@material-ui/icons/Person';
import RateReviewIcon from '@material-ui/icons/RateReview';
import LibraryAddCheckIcon from '@material-ui/icons/LibraryAddCheck';

const drawerWidth = 292;

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
  headerContainer: {
    backgroundColor: "#3D5AFE",
    zIndex: 2
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    display: "flex",
    alignItems: "center",
  },
  account: {
    display: "flex",
    alignItems: "center"
  },
  userLogoIcon: {
    color: "#BEBEBE"
  },
  userLogo: {
    width: 36,
    height: 36,
    borderRadius: "50%",
    backgroundColor: "#FFFFFF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  userName: {
    fontSize: 18,
    lineHeight: "21px",
    marginRight: 15
  },
  titleText: {
    fontSize: 24,
    lineHeight: "28px",
    fontWeight: "bold"
  },
  titleIcon: {
    marginRight: 11,
    width: 38,
    height: 31
  },
  content: {
    flexGrow: 1,
    paddingTop: 18
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    zIndex: 1
  },
  drawerContainer: {
    overflow: 'auto',
  },
});

interface IProps {
  children: Element;
}

const Layout: FC<IProps> = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.headerContainer}>
        <Toolbar className={classes.header}>
          <div className={classes.title}>
            <SchoolIcon className={classes.titleIcon} />
            <div className={classes.titleText}>
              SQL Academy
          </div>
          </div>
          <div className={classes.account}>
            <div className={classes.userName}>User</div>
            <div className={classes.userLogo}>
              <PersonIcon className={classes.userLogoIcon} />
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem button key="Quizzes">
              <ListItemIcon><RateReviewIcon /></ListItemIcon>
              <ListItemText primary="Quizzes" />
            </ListItem>
            <ListItem button key="Results">
              <ListItemIcon><LibraryAddCheckIcon /></ListItemIcon>
              <ListItemText primary="Results" />
            </ListItem>
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        {children}
      </main>
    </div>
  );
}

export default Layout;
