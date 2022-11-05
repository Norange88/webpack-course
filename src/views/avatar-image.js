import _ from "lodash";
import Heading from "../components/Heading";
import AvatarImage from "../components/AvatarImage/";

const heading = new Heading();
const avatarImage = new AvatarImage();
heading.render(_.upperFirst("Avatar page"));
avatarImage.render();
