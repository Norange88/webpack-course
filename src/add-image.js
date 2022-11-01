import Avatar from './avatar.png';
import altText from './altText.txt';

export default function addImage() {
  const img = document.createElement('img');
  img.src = Avatar;
  img.alt = altText;
  document.body.append(img);
}
