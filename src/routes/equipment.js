import React from "react";
import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/equipment/";

export default [
  <Route path="/equipment/create" component={Create} exact key="create" />,
  <Route path="/equipment/edit/:id" component={Update} exact key="update" />,
  <Route path="/equipment/show/:id" component={Show} exact key="show" />,
  <Route path="/equipment/" component={List} exact strict key="list" />,
  <Route path="/equipment/:page" component={List} exact strict key="page" />,
];
