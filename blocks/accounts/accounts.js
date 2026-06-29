export default async function decorate(block) {
  const heading = block.querySelector('p')?.textContent || 'Accounts';

  block.innerHTML = `
    <h2 class="accounts-title">${heading}</h2>

    <div class="accounts-grid">
      <div class="account-card">Savings Account</div>
      <div class="account-card">Current Account</div>
      <div class="account-card">Premium Account</div>
    </div>
  `;
}
