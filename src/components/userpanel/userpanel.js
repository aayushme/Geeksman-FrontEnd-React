import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";
import ProfileIcon from "@material-ui/icons/AccountBox";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Participation from "./Participation";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function UserPanel(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [contests, setcontests] = React.useState([
    {
      contestname: "Code Fury",
      rank: "4/50",
      points: "400/500",
    },
    {
      contestname: "Code Kedan",
      rank: "4/50",
      points: "100/500",
    },
    {
      contestname: "Audition round",
      rank: "5/50",
      points: "300/500",
    },
  ]);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const [selectedbtn, setselectedbtn] = React.useState("homebtn");
  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem
          button
          onClick={() => {
            setselectedbtn("homebtn");
          }}
          selected={selectedbtn === "homebtn"}
        >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <Divider />
        <ListItem
          button
          onClick={() => {
            setselectedbtn("updateprofile");
          }}
          selected={selectedbtn === "updateprofile"}
        >
          <ListItemIcon>
            <ProfileIcon />
          </ListItemIcon>
          <ListItemText primary="UpdateProfile" />
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap className="headinginfo">
            <h5>Welcome,</h5>
            Parag Thakur
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography>
          {selectedbtn === "homebtn" && (
            <div className="aboutuser">
              <div className="userinfo">
                <div className="userimagebox">
                  <Avatar className="styleimage"></Avatar>
                </div>
                <div className="userinfobox">
                  <div className="nameinfo">
                    <h3>Parag Thakur</h3>
                  </div>
                  <div className="collegeinfo">
                    <span>
                      Studying at YMCA University of Science and Technology -
                      Faridabad
                    </span>
                  </div>
                  <div className="skillsinfo">
                    <h4>
                      Skills: <span>C++,Python</span>
                    </h4>
                  </div>
                  <div className="educationinfo">
                    <h4>
                      Education:{" "}
                      <span>
                        YMCA University of Science and Technology - Faridabad
                      </span>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="participationinfo">
                <div className="participationheading">
                  <h2 className="participationheadingstyle">Participation:</h2>
                </div>
                <div className="contestinfocards">
                  {(contests.length ===0)
                    &&(
                      <h3>
                        You haven't participated in any contest uptil now!!
                      </h3>
                    )}
                  {contests.length != 0 &&
                    contests.map((contest) => (
                      <Participation
                        contestname={contest.contestname}
                        rank={contest.rank}
                        marks={contest.points}
                      />
                    ))}
                </div>
              </div>
            </div>
          )}
          {selectedbtn === "updateprofile" && (
            <div>
              <div className="mainupdate">
                <h1>Update Profile</h1>
              </div>
              <div className="updateform">
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Update
                  </Button>
                </Form>
              </div>
            </div>
          )}
        </Typography>
      </main>
    </div>
  );
}

export default UserPanel;
