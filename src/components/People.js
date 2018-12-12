import React, { Component } from "react";
import { Link } from "react-router-dom";

class People extends Component {
  render() {
    return (
      <div>
        <p>People</p>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Form">Form</Link>
          </li>
        </ul>
      </div>
    );
  }
}
export default People;
