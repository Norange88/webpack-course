import './style.scss';

export default class HellowWorldButton {
  text = 'Hello world';

  render() {
    this.button = document.createElement('button');
    this.button.classList.add('hello-world-button');
    this.button.textContent = this.text;
    this.button.addEventListener('click', this.createParagraph);
    document.body.append(this.button);
  }

  // eslint-disable-next-line class-methods-use-this
  createParagraph = () => {
    const p = document.createElement('p');
    p.classList.add('hello-world-paragraph');
    p.textContent = this.text;
    document.body.append(p);
  };
}
