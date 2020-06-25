import React, { Component } from "react";
import Auxillary from "./hoc/Auxillary";

const form = (props) => (
  <Auxillary>
    <h1>{props.name}</h1>
  </Auxillary>
);

export default form;
