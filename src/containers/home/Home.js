import React, { Component } from "react";
import classes from "./home.module.css";
import Sidebar from "../../components/sidebar/sidebar";
import SideBarMobile from "../../components/sideBarMobile/sideBarMobile";
import {
  NoOfGoodPairs,
  RunningSumOf1DArray,
  MaximumSubarray,
  SingleNumber,
  FindTheDuplicateNumber,
  MiddleOfLinkedList,
  TwoSum
} from "../../UI/solutions/index";
import { Route, Switch, Redirect } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div className={classes.Home}>
        <Sidebar />
        <SideBarMobile
          hideSideBar={this.props.hideSideBar}
          showMobileSideBar={this.props.showMobileSideBar}
        />

        <Switch>
          <Route path="/" exact></Route>
          <Route path="/home" exact></Route>
          <Route path="/problems/Running-sum-of-1d-array" exact>
            <RunningSumOf1DArray />
          </Route>
          <Route path="/problems/Number-of-Good-Pairs" exact>
            <NoOfGoodPairs />
          </Route>
          <Route path="/problems/Two-sum" exact>
            <TwoSum />
          </Route>
          <Route path="/problems/Maximum-subarray" exact>
            <MaximumSubarray />
          </Route>
          <Route path="/problems/Single-number" exact>
            <SingleNumber />
          </Route>
          <Route path="/problems/Find-the-duplicate-number" exact>
            <FindTheDuplicateNumber />
          </Route>
          <Route path="/problems/Find-middle-of-linked-list" exact>
            <MiddleOfLinkedList />
          </Route>
        </Switch>
        <Redirect to="/problems/Running-sum-of-1d-array" />
      </div>
    );
  }
}
