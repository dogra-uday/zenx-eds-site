import { getHero } from '../../scripts/aem.js';

export default async function decorate(block) {
  const h = await getHero();

  block.innerHTML = `
    <section>
      <h1>${h.title}</h1>
      <p>${h.subtitle}</p>
      <a href="${h.ctaLink}">${h.ctaText}</a>
    </section>
  `;
}