export default async function decorate(block) {
  const picture = block.querySelector('picture');
  const heading = block.querySelector('h1, h2, h3');

  block.innerHTML = '';

  if (picture) {
    picture.style.width = '100%';
    block.appendChild(picture);
  }

  if (heading) {
    heading.style.margin = '20px';
    block.appendChild(heading);
  }
}