import { getAccounts } from '../../scripts/aem.js';

export default async function decorate(block) {
  const data = await getAccounts();

  block.innerHTML = data.map((a) =>
    '<div>' +
    '<h3>' + a.title + '</h3>' +
    '<p>' + a.description + '</p>' +
    '<div>' + a.interestRate + '</div>' +
    '<small>' + a.minBalance + '</small>' +
    '</div>'
  ).join('');
}
``