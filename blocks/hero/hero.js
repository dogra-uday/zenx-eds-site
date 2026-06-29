export default async function decorate(block) {
  const title = block.querySelector('h1, h2')?.textContent || 'Welcome';
  const subtitle = block.querySelector('p')?.textContent || '';

  block.innerHTML = `
    <div class="hero-container">
      <img src="/content/dam/zenx-eds-site/Hero.png" class="hero-img"/>

      <div class="hero-overlay">
        <h1>${title}</h1>
        <p>${subtitle}</p>
      </div>
    </div>
  `;
}
