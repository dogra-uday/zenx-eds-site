export default async function decorate(block) {
  block.innerHTML = `
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:20px;padding:40px;">
      
      <div style="padding:20px;border:1px solid #ddd;border-radius:8px;text-align:center;">
        <h3>Savings Account</h3>
        <p>Secure and flexible banking</p>
      </div>

      <div style="padding:20px;border:1px solid #ddd;border-radius:8px;text-align:center;">
        <h3>Current Account</h3>
        <p>Designed for businesses</p>
      </div>

      <div style="padding:20px;border:1px solid #ddd;border-radius:8px;text-align:center;">
        <h3>Premium Account</h3>
        <p>Exclusive benefits and rewards</p>
      </div>

    </div>
  `;
}
