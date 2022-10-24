import ReactDOM from "react-dom";
import "./style/index.css";
import "./style/output.css";
import { App } from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

const root = document.querySelector("#root");

ReactDOM.render(<App />, root);
