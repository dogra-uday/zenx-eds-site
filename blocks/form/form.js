const normalizeKey = (value = '') => value.trim().toLowerCase().replace(/\s+/g, '');

const parseConfig = (block) => {
  const rows = [...block.children].filter((row) => row.matches(':scope > div'));
  const config = {};

  rows.forEach((row) => {
    const cells = [...row.children];
    if (cells.length < 2) {
      return;
    }

    const key = normalizeKey(cells[0].textContent || '');
    if (!key) {
      return;
    }

    const valueCell = cells[1];
    const link = valueCell.querySelector('a');

    config[key] = {
      text: valueCell.textContent.trim(),
      href: link?.href,
    };
  });

  return config;
};

const getText = (config, key, fallback) => config[key]?.text || fallback;

export default async function decorate(block) {
  const config = parseConfig(block);
  const title = getText(config, 'title', 'Start Your Account Opening');
  const subtitle = getText(
    config,
    'subtitle',
    'Complete this secure form and our onboarding team will contact you within one business day.',
  );
  const submitLabel = getText(config, 'submitlabel', 'Submit Application');
  const consentText = getText(
    config,
    'consenttext',
    'I agree to the processing of my data for account opening and service communication.',
  );
  const note = getText(config, 'note', 'By proceeding, you accept our onboarding and compliance checks.');
  const successMessage = getText(
    config,
    'successmessage',
    'Thank you. Your application has been received successfully.',
  );
  const action = config.actionurl?.href || '';

  block.innerHTML = '';

  const shell = document.createElement('div');
  shell.className = 'form-shell';

  const heading = document.createElement('h2');
  heading.className = 'form-title';
  heading.id = 'account-form';
  heading.textContent = title;

  const description = document.createElement('p');
  description.className = 'form-subtitle';
  description.textContent = subtitle;

  const form = document.createElement('form');
  form.className = 'account-form';
  form.method = 'post';
  if (action) {
    form.action = action;
  }

  form.innerHTML = `
    <div class="form-grid">
      <label class="field">
        <span class="field-label">Full Name</span>
        <input name="fullName" autocomplete="name" required placeholder="Enter your legal name">
      </label>
      <label class="field">
        <span class="field-label">Email Address</span>
        <input type="email" name="email" autocomplete="email" required placeholder="name@example.com">
      </label>
      <label class="field">
        <span class="field-label">Mobile Number</span>
        <input type="tel" name="mobile" autocomplete="tel" required placeholder="+91 9XXXXXXXXX">
      </label>
      <label class="field">
        <span class="field-label">City</span>
        <input name="city" autocomplete="address-level2" required placeholder="Your current city">
      </label>
      <label class="field">
        <span class="field-label">Account Type</span>
        <select name="accountType" required>
          <option value="">Select an option</option>
          <option value="savings">Savings</option>
          <option value="current">Current</option>
          <option value="premium">Premier</option>
        </select>
      </label>
      <label class="field">
        <span class="field-label">Annual Income Range</span>
        <select name="incomeRange" required>
          <option value="">Select an option</option>
          <option value="lt5">Less than 5 Lakhs</option>
          <option value="5to15">5 to 15 Lakhs</option>
          <option value="15to30">15 to 30 Lakhs</option>
          <option value="gt30">More than 30 Lakhs</option>
        </select>
      </label>
    </div>
    <label class="consent-row">
      <input type="checkbox" name="consent" required>
      <span>${consentText}</span>
    </label>
    <button type="submit" class="submit-btn">${submitLabel}</button>
    <p class="form-note">${note}</p>
    <p class="form-message" aria-live="polite"></p>
  `;

  form.addEventListener('submit', (event) => {
    if (!form.action) {
      event.preventDefault();
    }

    const message = form.querySelector('.form-message');
    if (message) {
      message.textContent = successMessage;
      message.classList.add('is-visible');
    }
  });

  shell.append(heading, description, form);
  block.append(shell);
}
