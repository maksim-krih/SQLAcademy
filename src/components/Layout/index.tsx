import {
  makeStyles,
  Toolbar,
  AppBar,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Drawer,
  Paper,
  ClickAwayListener,
  Avatar,
  IconButton,
  Popper,
  Grow,
  MenuList,
  MenuItem
} from "@material-ui/core";
import React, {FC} from "react";
import SchoolIcon from '@material-ui/icons/School';
import PersonIcon from '@material-ui/icons/Person';
import RateReviewIcon from '@material-ui/icons/RateReview';
import LibraryAddCheckIcon from '@material-ui/icons/LibraryAddCheck';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {Link} from "react-router-dom";
import {AuthService} from "../../services";
import {Service} from "../../services/auth";

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
    padding: "18px 34px 18px 29px"
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
  moreVertIcon: {
    color: "#FFFFFF"
  }
});

interface IProps {
  children: JSX.Element;
}

const Layout: FC<IProps> = ({children}) => {
  const classes = useStyles();
  const [openMenu, setOpenMenu] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpenMenu((prevOpen: boolean) => !prevOpen);
  };

  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpenMenu(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpenMenu(false);
    }
  }

  const prevOpen = React.useRef(openMenu);

  React.useEffect(() => {
    if (prevOpen.current === true && openMenu === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = openMenu;
  }, [openMenu]);

  const avatarUrl = "";
  const userName = `${AuthService.User.firstName} ${AuthService.User.lastName}`;

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.headerContainer}>
        <Toolbar className={classes.header}>
          <div className={classes.title}>
            <SchoolIcon className={classes.titleIcon}/>
            <div className={classes.titleText}>
              SQL Academy
            </div>
          </div>
          <div className={classes.account}>
            <div className={classes.userName}>{userName}</div>
            {avatarUrl ?
              <Avatar
                alt=''
                src={avatarUrl}
                className={classes.userLogoIcon}
              />
              :
              <div className={classes.userLogo}>
                <PersonIcon className={classes.userLogoIcon}/>
              </div>
            }

            <IconButton ref={anchorRef} onClick={handleToggle}>
              <MoreVertIcon
                className={classes.moreVertIcon}
              />
            </IconButton>
            <Popper
              open={openMenu}
              anchorEl={anchorRef.current}
              role={undefined}
              transition
              disablePortal
              placement='bottom-end'
            >
              {({TransitionProps}: any) => (
                <Grow
                  {...TransitionProps}
                  style={{transformOrigin: 'right top'}}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList
                        autoFocusItem={openMenu}
                        id='menu-list-grow'
                        onKeyDown={handleListKeyDown}
                      >
                        <MenuItem
                          key='Account'
                          component={Link}
                          to="/account"
                        >
                          Account
                        </MenuItem>
                        <MenuItem
                          key='LogOut'
                          onClick={() => AuthService.SignOut()}
                        >
                          Log out
                        </MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
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
        <Toolbar/>
        <div className={classes.drawerContainer}>
          <List>
            <ListItem
              button
              key="Quizzes"
              component={
                props => <Link to="/quizzes" {...props} />
              }
            >
              <ListItemIcon><RateReviewIcon/></ListItemIcon>
              <ListItemText primary="Quizzes"/>
            </ListItem>
            <ListItem
              button
              key="Results"
              component={
                props => <Link to="/results" {...props} />
              }
            >
              <ListItemIcon><LibraryAddCheckIcon/></ListItemIcon>
              <ListItemText primary="Results"/>
            </ListItem>
            {Service.IsAdmin && <ListItem
              button
              key="Students"
              component={
                props => <Link to="/students" {...props} />
              }
            >
              <ListItemIcon><PeopleAltIcon/></ListItemIcon>
              <ListItemText primary="Students"/>
            </ListItem>}
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar/>
        {children}
      </main>
    </div>
  );
}

export default Layout;
