import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";

import pages from "./pages";

class Movies extends Component {
  render() {
    console.log(this.props);
    return (
      <Fragment>
        {pages.map((item, index) => {
          return (
            <Route
              {...{ ...item, path: this.props.match.path + item.path }}
              key={index}
            />
          );
        })}
      </Fragment>
    );
  }
}

export default Movies;
