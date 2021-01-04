import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import "react-tabs/style/react-tabs.css";
import "../styles/pholio.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

export default class Pholio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      categories: [
        {
          name: "Все работы",
          photos: [],
        },
        {
          name: "Индивидуальная фотосъёмка",
          photos: [],
        },
        {
          name: "Love-Story фотосъёмка",
          photos: [],
        },
        {
          name: "Свадебная фотосъёмка",
          photos: [],
        },
        {
          name: "В ожидании чуда",
          photos: [],
        },
        {
          name: "Ньюборн фотосъёмка",
          photos: [],
        },
        {
          name: "Семейная фотосъёмка",
          photos: [],
        },
      ],
    };
  }

  handleChange = (event, newValue) => {
    this.setState({
      value: newValue,
    });
  };

  componentDidMount() {
    document.body.style.backgroundColor = "#FFF";
  }

  render() {
    return (
      <div className="pholio">
        <div className="container">
          <h1>Портфолио</h1>
          <AppBar position="static">
            <Tabs
              value={this.state.value}
              variant="scrollable"
              scrollButtons="on"
              onChange={this.handleChange}
              aria-label="simple tabs example"
            >
              {this.state.categories.map((category) => {
                return <Tab label={category.name} />;
              })}
            </Tabs>
          </AppBar>
          {this.state.categories.map((category, index) => {
            return (
              <TabPanel value={this.state.value} index={index}>
                {index}
              </TabPanel>
            );
          })}
        </div>
      </div>
    );
  }
}
