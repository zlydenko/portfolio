import { configure } from "@storybook/react";

function loadStories() {
  require("../stories/Background/index.js");
  require("../stories/About/index.js");
  require("../stories/Skills/index.js");
  require("../stories/Footer/index.js");
}

configure(loadStories, module);
