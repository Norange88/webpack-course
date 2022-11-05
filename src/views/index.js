import _ from "lodash";
import HelloWorldButton from "../components/HelloWorldButton/index";
import Heading from "../components/Heading";

const heading = new Heading();
const button = new HelloWorldButton();
heading.render(_.upperFirst("Index page"));
button.render();
