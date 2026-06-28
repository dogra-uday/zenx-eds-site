import { getHero } from '../../scripts/aem.js';

export default async function decorate(block) {
  const h = await getHero();

  const image = h.image ? (h.image.path || h.image['@path'] || '') : '';

  block.innerHTML = `
    <img src="${image}" alt="The Indian Bank" style="width:100%; height:auto;" />
  `;
}