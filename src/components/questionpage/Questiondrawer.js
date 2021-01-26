import React, { useEffect } from "react";
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
import DoneIcon from "@material-ui/icons/Done";
import Button from "@material-ui/core/Button";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";
import aayush from "../images/png/aayush.jpg";
import Modal from "../utils/modals/modal";
import { Redirect } from "react-router-dom";

const drawerWidth = 290;

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
    marginRight: theme.spacing(0),
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
    padding: theme.spacing(0),
  },
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [selectedindex, setselected] = React.useState(0);
  const [activequestion, setactivequestion] = React.useState(
    props.questiondata[0]
  );
  const [tickicon, setTickicon] = React.useState(
    <DoneIcon style={{ color: "green" }} />
  );
  const [value, setValue] = React.useState(activequestion.options[0].value);
  const [savedindex, setSavedindex] = React.useState(null);
  const [hour, setHour] = React.useState(-1);
  const [minutes, setMinutes] = React.useState(-1);
  const [seconds, setSeconds] = React.useState(-1);
  const [show, setShow] = React.useState(false);
  const [redirect, setRedirect] = React.useState(false);
  const [message,setMessage] = React.useState("");
  const [confirmbutton,setConfirmbutton] =React.useState("");

  const handleTestEnd = () => {
    setRedirect(true);
  };

  let authRedirect = null;

  if (redirect) {
    authRedirect = <Redirect to="/" />;
  }

  React.useEffect(() => {
    console.log(props.questiondata);
    handleFindValue();
  }, []);

  //Mobile Screen
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  //get Questions
  useEffect(() => {
    var countDownIs = new Date().getTime();
    var countDownDate = countDownIs+(1*60*60*1000)

    // Update the count down every 1 second
    var x = setInterval(function () {
      // Get todays date and time
      var now = new Date().getTime();

      // Find the distance between now an the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHour(hours);
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(minutes);
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setSeconds(seconds);
      // Output the result in an element with id="demo"

      // If the count down is over, write some text
      if (hours === 0 && seconds === 0 && minutes === 0) {
        clearInterval(x);
        handePostForce();
        
      }
    }, 1000);
  }, []);

  //Submit Button
  const handlePostQuestions = () => {
    props.postQuestions(props.contesttoken, localStorage.getItem(["submissions"]));
    setShow(true);
    setConfirmbutton("true");
    setMessage("Are you sure you want to submit your test?")
  };

  //Post questions by timer

  const handePostForce=()=>{
    props.postQuestions(props.contesttoken, localStorage.getItem(["submissions"]));
    setShow(true);
    setConfirmbutton("false");
    setMessage("The time has ended your test has been successfully submitted!")
  }

  //Load Selection of Radio Buttons
  const createSelection = (e, value) => {
    setValue(e.target.value);
  };

  const createArrayQuestions = (e) => {
    e.preventDefault();

    var myArray = [];
    // load saved array
    if (localStorage.getItem(["submissions"]) != null) {
      myArray = JSON.parse(localStorage.getItem(["submissions"]));
    }

    var data = {
      Question_Id: activequestion._id,
      optionchosen: value,
    };

    console.log(myArray.length);

    if (myArray.find((element) => element.Question_Id === activequestion._id)) {
      for (var i = 0; i < myArray.length; i++) {
        if (myArray[i].Question_Id === activequestion._id) {
          myArray[i] = data;
        }
      }
    } else {
      myArray.push(data);
    }

    // re-save array
    localStorage.setItem(["submissions"], JSON.stringify(myArray));
  };

  const handleFindValue = (questionsid) => {
    var myArray = [];
    // load saved array
    if (localStorage.getItem(["submissions"]) != null) {
      myArray = JSON.parse(localStorage.getItem(["submissions"]));
    }
    var arris = myArray.find(
      (element) => element.Question_Id === questionsid
    );

    if (arris !== undefined) {
      setValue(arris.optionchosen);
    }
    else{
      setValue(value);
    }
  };

  //Clear Selection
  const removeArrayQuestions = (e) => {
    e.preventDefault();
    setValue("#");
    localStorage.removeItem(["submissions"]);
  };

  //Handle Previous Button
  const handlePrev = (e) => {
    e.preventDefault();
    handleFindValue(activequestion._id);
    if (selectedindex !== 0) {
      setselected(selectedindex - 1);
      setactivequestion(props.questiondata[selectedindex - 1]);
      console.log(selectedindex - 1);
    } else {
      setselected(selectedindex);
      setactivequestion(props.questiondata[selectedindex]);
    }
  };

  //Handle Next Button
  const handleNext = (e) => {
    e.preventDefault();
    handleFindValue(activequestion._id);
    var len = Object.keys(props.questiondata).length - 1;
    if (selectedindex !== len) {
      setselected(selectedindex + 1);
      setactivequestion(props.questiondata[selectedindex + 1]);
      console.log(selectedindex + 1);
    } else {
      setselected(selectedindex);
      setactivequestion(props.questiondata[selectedindex]);
    }
  };

  //Handle Green Tick

  const handleGreenTick = (index) => {
    var myArray = [];
    if (localStorage.getItem(["submissions"]) !== null) {
      myArray = JSON.parse(localStorage.getItem(["submissions"]));
    }

    const help = myArray.findIndex((rank) => rank.Question_Id === index);
    if (help >= 0 && help <= 49) {
      return true;
    } else {
      return false;
    }
  };

  //Drawer Map
  var drawer = (
    <div>
      <div className={classes.toolbar} />
      <ListItem>
        <ListItemText primary="Demo Test" secondary={Date()} />
      </ListItem>
      <Divider />
      <List>
        {props.questiondata.map((questions, index) => (
          <React.Fragment>
            <ListItem
              button
              alignItems="center"
              index={index}
              selected={selectedindex === index}
              key={questions._id}
              onClick={() => {
                setactivequestion(questions);
                setselected(index);
                handleFindValue(questions._id)
              }}
            >
              <ListItemIcon>
                {" "}
                <QuestionIcon />{" "}
              </ListItemIcon>
              <ListItemText center primary={"Question-" + index} />
              <ListItemIcon>
                {localStorage.getItem(["submissions"])
                  ? handleGreenTick(questions._id)
                    ? tickicon
                    : null
                  : null}
              </ListItemIcon>
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </div>
  );

  //Timer

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
                <span>
                  {hour}hr {minutes}min {seconds}sec
                </span>
              </div>

              <div className="row prevnextbtn">
                <div className="col-sm-4 hidden">
                  <Button
                    color="danger"
                    variant="contained"
                    onClick={(e) => handlePrev(e)}
                  >
                    &larr; prev
                  </Button>
                </div>
                <div className="col-sm-4 hidden">
                  <Button
                    variant="contained"
                    color="danger"
                    onClick={(e) => handleNext(e)}
                  >
                    next &rarr;
                  </Button>
                </div>
                <div className="col-sm-4 next-button">
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={(e) => handlePostQuestions(e)}
                    className="submit-button"
                  >
                    Submit
                  </Button>
                </div>
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
              <RadioGroup aria-label="Questions" name="Question" value={value} >
                <FormControlLabel
                  value={activequestion.options[0].value}
                  control={<Radio onClick={(e) => createSelection(e)} />}
                  label={activequestion.options[0].option}
                />
                <FormControlLabel
                  value={activequestion.options[1].value}
                  control={<Radio onClick={(e) => createSelection(e)} />}
                  label={activequestion.options[1].option}
                />
                <FormControlLabel
                  value={activequestion.options[2].value}
                  control={<Radio onClick={(e) => createSelection(e)} />}
                  label={activequestion.options[2].option}
                />
                <FormControlLabel
                  value={activequestion.options[3].value}
                  control={<Radio onClick={(e) => createSelection(e)} />}
                  label={activequestion.options[3].option}
                />
              </RadioGroup>
              <br />
              <br />
              <div className="row">
                <div className="column50">
                  <div className="row">
                    <div className="col-sm-6">
                      <button
                        onClick={(e) => createArrayQuestions(e)}
                        className="login-button"
                      >
                        Save
                      </button>
                    </div>
                    <div className="col-sm-6">
                      <button
                        onClick={(e) => removeArrayQuestions(e)}
                        className="login-button"
                      >
                        Clear
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </FormControl>
          </div>
        </Typography>
      </main>
      {authRedirect}
      <Modal
        show={show}
        message={message}
        header="Caution!"
        field=""
        confirm={confirmbutton}
        redirect={(e) => handleTestEnd()}
      />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    getQuestions: (token) => {
      dispatch(actions.getQuestions(token));
    },
    postQuestions: (token, data) => {
      dispatch(actions.postQuestions(token, data));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    questiondata: state.question.questionsdata,
    contesttoken: state.contest.contesttoken,
    contestdata:state.contest.contestdata
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResponsiveDrawer);
