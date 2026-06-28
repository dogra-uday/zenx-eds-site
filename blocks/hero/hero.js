import { getHero } from '../../scripts/aem.js';

export default async function decorate(block) {
  const h = await getHero();

  const image = h.image ? (h.image.path || h.image['@path'] || '') : '';

  const cta = h.ctaLink
    ? `<a href="${h.ctaLink}">${h.ctaText || 'Learn More'}</a>`
    : '';

  block.innerHTML = `
    <div class="hero-bg" style="background-image:url('${image}')">
      <div class="hero-overlay">
        <h1>${h.title || 'The Indian Bank'}</h1>
        <p>${h.subtitle || ''}</p>
        ${cta}
      </div>
    </div>
  `;
}