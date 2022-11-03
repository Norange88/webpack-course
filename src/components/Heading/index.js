import './style.scss';

export default class Heading {
  render() {
    const header = document.createElement('header');
    header.classList.add('header');
    header.textContent = 'Webpack is awesome!';
    document.body.appendChild(header);
    this.header = header;
  }
}
