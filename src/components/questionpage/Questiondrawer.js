import React from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import QuestionIcon from "@material-ui/icons/QuestionAnswerTwoTone";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Button from '@material-ui/core/Button'
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

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [selectedindex, setselected] = React.useState(0);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const [questions, setquestions] = React.useState([
    {
      questionno: "Question1",
      question: "what ifadsfasdfadsfads",
      options: {
        option1: "are you ok1",
        option2: "are you ok2",
        option3: "are you ok3",
        option4: "are you ok4",
      },
    },

    {
      questionno: "Question2",
      question: "what isflkadslflkamsdlkflk",
      options: {
        option1: "are you ok1",
        option2: "are you ok2",
        option3: "are you ok3",
        option4: "are you ok4",
      },
    },
    {
      questionno: "Question3",
      question: "what is the ans wow",
      options: {
        option1: "are you ok1",
        option2: "are you ok2",
        option3: "are you ok3",
        option4: "are you ok4",
      },
    },
    {
      questionno: "Question4",
      question: "what is tafalksdjlfjlasd",
      options: {
        option1: "are you ok1",
        option2: "are you ok2",
        option3: "are you ok3",
        option4: "are you ok4",
      },
    },
    {
      questionno: "Question5",
      question: "what is tfakjsdfjajsdl",
      options: {
        option1: "are you ok1",
        option2: "are you ok2",
        option3: "are you ok3",
        option4: "are you ok4",
      },
    },
    {
      questionno: "Question6",
      question: "what is fakjdsfljsd",
      options: {
        option1: "are you ok13532",
        option2: "are you ok2523",
        option3: "are you ok3",
        option4: "are you ok4",
      },
    },
  ]);
  const [activequestion, setactivequestion] = React.useState(questions[0]);

  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {questions.map((questions, index) => (
          <React.Fragment>
            <ListItem
              button
              alignItems="center"
              selected={selectedindex === index}
              key={questions.questionno}
              onClick={() => {
                setactivequestion(questions);
                setselected(index);
              }}
            >
              <ListItemIcon>
                {" "}
                <QuestionIcon />{" "}
              </ListItemIcon>
              <ListItemText center primary={questions.questionno} />
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
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
          <Typography variant="h6" noWrap>
            
            <div className="questionpageheader">
              <div className="timeinfo">
              <span>00hr 00min</span>
              </div>
             
              <div className="prevnextbtn">
                <Button color="danger">&larr; prev</Button>
                <Button color="danger">next &rarr;</Button>
              </div>
            </div>
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
        <Typography paragraph>
          <div className="mainquestion">
            <p>
              <span>Question: </span>
              {activequestion.question}
            </p>
          </div>
          <div className="optionsselect">
            <FormControl component="fieldset">
              <RadioGroup
                aria-label="gender"
                name="gender1"
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label={activequestion.options.option1}
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label={activequestion.options.option2}
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label={activequestion.options.option3}
                />
                <FormControlLabel
                  value="disabled"
                  control={<Radio />}
                  label={activequestion.options.option3}
                />
              </RadioGroup>
            </FormControl>
          </div>
        </Typography>
      </main>
    </div>
  );
}

export default ResponsiveDrawer;
