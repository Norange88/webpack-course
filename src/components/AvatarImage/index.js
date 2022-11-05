import Avatar from "./avatar.png";
import altText from "./altText.txt";
import "./style.scss";

export default class AvatarImage {
  render() {
    const img = document.createElement("img");
    img.src = Avatar;
    img.alt = altText;
    img.classList.add("avatar-image");
    document.body.append(img);
  }
}
