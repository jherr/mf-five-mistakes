import React from "react";
import ReactDOM from "react-dom";

import MyUserMFE from "remote/MyUserMFE";

import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: host</div>
    <MyUserMFE user="Hello" />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
