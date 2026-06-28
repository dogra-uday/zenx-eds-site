export default async function decorate(block) {
  const img = block.querySelector('img');

  block.innerHTML = '';

  if (img) {
    img.style.width = '100%';
    img.style.display = 'block';
    block.appendChild(img);
  }
}
