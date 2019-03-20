import React, { Component, Fragment } from "react";

class App extends Component {
  render() {
    return (
      <Fragment>
        <div>{`env variables: ${JSON.stringify(process.env)}`}</div>
        <div>{`PUBLIC_URL: ${process.env.PUBLIC_URL}`}</div>
        <div>{`REACT_APP_API_URL: ${process.env.REACT_APP_API_URL}`}</div>
      </Fragment>
    );
  }
}

export default App;
