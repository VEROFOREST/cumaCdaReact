import React from "react";
import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/reservation/";

export default [
  <Route path="/reservations/create" component={Create} exact key="create" />,
  <Route path="/reservations/edit/:id" component={Update} exact key="update" />,
  <Route path="/reservations/show/:id" component={Show} exact key="show" />,
  <Route path="/reservations/" component={List} exact strict key="list" />,
  <Route path="/reservations/:page" component={List} exact strict key="page" />,
];
