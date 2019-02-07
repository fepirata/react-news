import React, { Component } from "react";

const Form = props => (
  <div>
    <form onSubmit={props.getCustomNews}>
      <p>Search for any term.</p>
      <input className="maintextField"type="text"name="userSearch"/>
      <input className="mainButton"type="submit" value="SEARCH"/>
    </form>
  </div>
);

export default Form;
