import { getFormFields } from '../../scripts/aem.js';

function renderField(f) {
  if (f.type === 'input') {
    return `
      <label>${f.label}</label>
      <input name="${f.name}" ${f.required ? 'required' : ''} />
    `;
  }

  if (f.type === 'select') {
    const options = f.options.split(',');

    return `
      <label>${f.label}</label>
      <select name="${f.name}">
        ${options.map((o) => `<option>${o}</option>`).join('')}
      </select>
    `;
  }

  return '';
}

export default async function decorate(block) {
  const fields = await getFormFields();
  let step = 1;
  const data = {};

  const container = document.createElement('div');
  block.append(container);

  function render() {
    const stepFields = fields.filter((f) => Number(f.step) === step);

    container.innerHTML = `
      <h2>Open Account</h2>
      ${stepFields.map((f) => renderField(f)).join('')}
      <div>
        ${step > 1 ? '<button id="prev">Back</button>' : ''}
        ${step < 3 ? '<button id="next">Next</button>' : '<button id="submit">Submit</button>'}
      </div>
    `;

    bind();
  }

  function bind() {
    container.querySelectorAll('[name]').forEach((el) => {
      el.oninput = (e) => {
        data[e.target.name] = e.target.value;
      };
    });

    const next = container.querySelector('#next');
    if (next) next.onclick = () => { step += 1; render(); };

    const prev = container.querySelector('#prev');
    if (prev) prev.onclick = () => { step -= 1; render(); };

    const submit = container.querySelector('#submit');
    if (submit) {
      submit.onclick = () => {
        console.log('Submitted:', data);
        alert('Form Submitted!');
      };
    }
  }

  render();
}
