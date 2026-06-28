import { getHero } from '../../scripts/aem.js';

export default async function decorate(block) {
  const hero = await getHero();

  block.innerHTML = `
    <h1>${hero.title}</h1>
    <p>${hero.subtitle}</p>
    <a href="${hero.ctaLink}">${hero.ctaText}</a>
  `;
}

