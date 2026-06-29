export default async function decorate(block) {
  const title = block.querySelector('h2')?.textContent || 'Open Account';

  block.innerHTML = `
    <div class="form-container">
      <h2>${title}</h2>

      <input placeholder="Full Name"/>
      <input placeholder="Email"/>
      <input placeholder="Mobile"/>

      <button>Submit</button>
    </div>
  `;
}
