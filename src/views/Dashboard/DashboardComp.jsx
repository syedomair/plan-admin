import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Tasks from "components/Tasks/Tasks.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import Danger from "components/Typography/Danger.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import { bugs, website, server } from "variables/general.jsx";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.jsx";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

const Chartist = require('chartist');

class DashboardComp extends React.Component {
  state = {
    value: 0,
    total_user: 0,
    total_plan: 0,
    user_reg_data: [],
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  componentDidMount() {
    this.props.getTotalUsers();
    this.props.getTotalPlans();
    this.props.getUserRegData();
  }

  componentWillReceiveProps(props) {
    if(props.total_user !== undefined){
    this.setState({
      total_user: props.total_user.user_total_count
    });
    }
    if(props.total_plan !== undefined){
    this.setState({
      total_plan: props.total_plan.plan_total_count
    });
    }
    if(props.user_reg_data !== undefined){
    this.setState({
      user_reg_data: props.user_reg_data
    });
    }
  
  }
  render() {
    const { classes } = this.props;
    const delays = 80;
    const durations = 500;
    let maxMonthlyNum = 0;

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let arrangedMonths = [];
    let arrangedMonthsData = [];
    let j = 0;
    const m = new Date().getMonth();
    let y = new Date().getFullYear();
    
    for (let i = m; i >= -11; i--) {
      arrangedMonths.push(months[i]);
      let monthData = this.props.user_reg_data.filter(data => (parseInt(data.month,10)-1) === i && parseInt(data.year,10) === y)
      let count = monthData.length>0?monthData[0].count:0; 
      if (count > maxMonthlyNum){
         maxMonthlyNum = count;
      }
      arrangedMonthsData.push(count);
      if (i === 0) {
        i = 12;
        y = y -1;
      }
      if (j === 11) {
        break;
      }
      j++;
    }
    arrangedMonths = arrangedMonths.reverse();
    arrangedMonthsData = arrangedMonthsData.reverse();

    const colouredLineChartYear = {
      data: {
        labels: arrangedMonths,
        series: [arrangedMonthsData],
      },
      options: {
        lineSmooth: Chartist.Interpolation.cardinal({
          tension: 0,
        }),
        axisY: {
          showGrid: true,
          offset: 40,
        },
        axisX: {
          showGrid: false,
        },
        low: 0,
        high: maxMonthlyNum,
        showPoint: true,
        height: '300px',
      },
      animation: {
        draw(data) {
          if (data.type === 'line' || data.type === 'area') {
            data.element.animate({
              d: {
                begin: 600,
                dur: 700,
                from: data.path
                  .clone()
                  .scale(1, 0)
                  .translate(0, data.chartRect.height())
                  .stringify(),
                to: data.path.clone().stringify(),
                easing: Chartist.Svg.Easing.easeOutQuint,
              },
            });
          } else if (data.type === 'point') {
            data.element.animate({
              opacity: {
                begin: (data.index + 1) * delays,
                dur: durations,
                from: 0,
                to: 1,
                easing: 'ease',
              },
            });
          }
        },
      },
    };
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} lg={12} md={4}>
            <Card chart>
              <CardHeader color="success">
                <ChartistGraph
                  data={colouredLineChartYear.data}
                  type="Line"
                  options={colouredLineChartYear.options}
                  listener={colouredLineChartYear.animation}
                  className="ct-chart"
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>New Users Registered In Last One year</h4>
                <p className={classes.cardCategory}>
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> updated now
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={6} md={6}>
            <Card>
              <CardHeader color="success" stats icon>
                <CardIcon color="success">
                  <Store />
                </CardIcon>
                <p className={classes.cardCategory}>Total Active Plan</p>
                <h3 className={classes.cardTitle}>{this.state.total_plan}</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Update />
                  Just Updated
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <Card>
              <CardHeader color="info" stats icon>
                <CardIcon color="info">
                  <Accessibility />
                </CardIcon>
                <p className={classes.cardCategory}>Total Registered User</p>
                <h3 className={classes.cardTitle}>{this.state.total_user}</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Update />
                  Just Updated
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

DashboardComp.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(DashboardComp);
