import React from "react";
import ReactDOM from "react-dom";
import IFrame from "./components/IFrame"

const App = () => { return ( <IFrame/> ) };

ReactDOM.render(<App />, document.querySelector("#root"));