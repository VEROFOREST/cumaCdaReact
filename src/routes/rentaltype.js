import React from "react";
import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/rentaltype/";

export default [
  <Route path="/rental_types/create" component={Create} exact key="create" />,
  <Route path="/rental_types/edit/:id" component={Update} exact key="update" />,
  <Route path="/rental_types/show/:id" component={Show} exact key="show" />,
  <Route path="/rental_types/" component={List} exact strict key="list" />,
  <Route path="/rental_types/:page" component={List} exact strict key="page" />,
];
