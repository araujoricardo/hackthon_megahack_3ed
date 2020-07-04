import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import Home from "../../pages/Home";
import PageError from "../../pages/PageError";
import Company from "../../pages/Company";
import Profile from "../../pages/Profile";
import Initial from "../../pages/Initial";
import SplashScreen from "../../pages/SplashScreen"
import Quiz from "../../pages/Quiz";
import Shop from "../../pages/Shop";

export const routes = {
  
  splashScreen: "/",
  // initial: "/",
  home: "/home",
  company: "/company",
  profile: "/profile",
  quiz: "/quiz",
  error: "/",
  shop: "/shop",
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.splashScreen} component ={SplashScreen}/>
        {/* <Route exact path={routes.initial} component={Initial} /> */}
        <Route exact path={routes.home} component={Home} />
        <Route exact path={routes.company} component={Company} />
        <Route exact path={routes.profile} component={Profile} />
        <Route exact path={routes.quiz} component={Quiz} />
        <Route exact path={routes.shop} component={Shop} />
        <Route path={routes.error} component={PageError} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
