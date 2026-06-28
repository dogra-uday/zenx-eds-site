import { getHero } from '../../scripts/aem.js';

export default async function decorate(block) {
  const hero = await getHero();

  const cta = hero.ctaLink
    ? `<a href="${hero.ctaLink}">${hero.ctaText || ''}</a>`
    : '';

  block.innerHTML = `
    <h1>${hero.title || ''}</h1>
    <p>${hero.subtitle || ''}</p>
    ${cta}
  `;
}
