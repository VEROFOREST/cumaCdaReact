import React from "react";
import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/share/";

export default [
  <Route path="/shares/create" component={Create} exact key="create" />,
  <Route path="/shares/edit/:id" component={Update} exact key="update" />,
  <Route path="/shares/show/:id" component={Show} exact key="show" />,
  <Route path="/shares/" component={List} exact strict key="list" />,
  <Route path="/shares/:page" component={List} exact strict key="page" />,
];
