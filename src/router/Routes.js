import React from "react";

import HomeLight from "../views/all-home-version/HomeLight";
import House from "../views/all-home-version/HouseSeries";
import Absence from "../views/all-home-version/AbsenceSeries";
import NotFound from "../views/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={HomeLight} />
          <Route exact path="/House" component={House} />
          <Route exact path="/Absence" component={Absence} />
          {/* <Route path="/home-light" component={HomeLight} />
          <Route path="/rtl-home-light" component={RtlHomeLight} /> */}
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
