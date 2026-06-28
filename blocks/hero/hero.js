import { getHero } from '../../scripts/aem.js';

export default async function decorate(block) {
  const h = await getHero();

  const image = h.image?._path || '';

  block.innerHTML = `
    <div class="hero-bg" style="background-image:url('${image}')">
      <div class="hero-overlay">
        <h1>The Indian Bank</h1>
        <p>${h.subtitle || ''}</p>
        ${h.ctaLink ? `<a href="${h.ctaLink}">${h.ctaText}</a>` : ''}
      </div>
    </div>
  `;
}
