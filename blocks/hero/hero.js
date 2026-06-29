export default async function decorate(block) {
  const img = block.querySelector('img');

  block.innerHTML = '';

  if (img) {
    img.style.width = '100%';
    block.appendChild(img);
  }

  const title = document.createElement('h1');
  title.textContent = 'The Indian Bank';
  block.appendChild(title);
}
