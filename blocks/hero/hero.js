export default async function decorate(block) {
  const picture = block.querySelector('picture');

  block.innerHTML = '';

  if (picture) {
    picture.style.width = '100%';
    block.appendChild(picture);
  }

  const title = document.createElement('h1');
  title.textContent = 'The Indian Bank';

  block.appendChild(title);
}
