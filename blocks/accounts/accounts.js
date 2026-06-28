import { getAccounts } from '../../scripts/aem.js';

export default async function decorate(block) {
  const data = await getAccounts();

  block.innerHTML = data.map((a) => `
    <div class=\"card\">
      <h3>${a.title}</h3>
      <p>${a.description}</p>
    </div>
  `).join('');
}
