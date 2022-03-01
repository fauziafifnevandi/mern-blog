import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateBlog from "../CreateBlog";
import DetailBlog from "../DetailBlog";
import Home from "../Home";

const MainApp = () => {
  return (
    <div>
      <p>Header</p>
      <Router>
        <Switch>
          <Route path="/create-blog">
            <CreateBlog></CreateBlog>
          </Route>
          <Route path="/detail-blog">
            <DetailBlog></DetailBlog>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>

      <p>Footer</p>
    </div>
  );
};

export default MainApp;
