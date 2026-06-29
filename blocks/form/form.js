export default async function decorate(block) {
  block.innerHTML = '<div>Form</div>';
}
export default async function decorate(block) {
  block.innerHTML = `
    <div style="padding:40px;max-width:500px;margin:auto;">
      
      <h2>Open an Account</h2>

      <input placeholder="Full Name" style="width:100%;padding:10px;margin:8px 0;" />
      
      <input placeholder="Email" style="width:100%;padding:10px;margin:8px 0;" />

      <button style="padding:12px 20px;margin-top:10px;background:#0047AB;color:white;border:none;">
        Submit
      </button>

    </div>
  `;
}
