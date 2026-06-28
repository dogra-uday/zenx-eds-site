export default async function decorate(block) {
  const img = block.querySelector('img');
  const text = block.querySelector(':scope > div:nth-child(2)');
  const title = text ? text.querySelector('h1, h2, h3, h4, h5, h6') : null;
  const paragraph = text ? text.querySelector('p') : null;
  const link = text ? text.querySelector('a') : null;

  block.innerHTML = '';

  if (img) {
    img.style.width = '100%';
    img.style.display = 'block';
    block.appendChild(img);
  }

  const content = document.createElement('div');

  if (title) content.appendChild(title);
  if (paragraph) content.appendChild(paragraph);
  if (link) content.appendChild(link);

  block.appendChild(content);
}
