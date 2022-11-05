import './style.scss';

export default class Heading {
  render(title) {
    const header = document.createElement('header');
    header.classList.add('header');
    header.textContent = title;
    document.body.appendChild(header);
    this.header = header;
  }
}
