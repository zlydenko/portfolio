import React from "react";
import { render } from "react-dom";

import registerServiceWorker from "./registerServiceWorker";
import App from "./App";

const rootElem = document.getElementById("root");

render(<App />, rootElem);
registerServiceWorker();
