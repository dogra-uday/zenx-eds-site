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
    config[key] = valueCell.textContent.trim();
  });

  return config;
};

const parseFeatures = (value = '') => value
  .split('|')
  .map((item) => item.trim())
  .filter(Boolean);

const buildCard = (config, index, fallback) => {
  const title = config[`account${index}title`] || fallback.title;
  const description = config[`account${index}description`] || fallback.description;
  const features = parseFeatures(config[`account${index}features`] || fallback.features);

  return {
    title,
    description,
    features,
  };
};

export default async function decorate(block) {
  const config = parseConfig(block);
  const heading = config.heading || 'Choose the Right Account';
  const intro = config.intro || 'Compare account options tailored for your personal and business goals.';

  const fallbacks = [
    {
      title: 'Smart Savings',
      description: 'High-yield savings with zero monthly maintenance fees.',
      features: 'Up to 6.25% APY|No minimum balance|Real-time goal tracking',
    },
    {
      title: 'Business Current',
      description: 'Flexible current account for growing operations.',
      features: 'Unlimited transactions|Dedicated RM support|Integrated payroll tools',
    },
    {
      title: 'Premier Relationship',
      description: 'Priority wealth and lifestyle privileges for premium clients.',
      features: 'Concierge banking|Global lounge access|Preferential loan rates',
    },
  ];

  const cards = [1, 2, 3].map((index) => buildCard(config, index, fallbacks[index - 1]));

  block.innerHTML = '';

  const titleEl = document.createElement('h2');
  titleEl.className = 'accounts-title';
  titleEl.textContent = heading;

  const introEl = document.createElement('p');
  introEl.className = 'accounts-intro';
  introEl.textContent = intro;

  const grid = document.createElement('div');
  grid.className = 'accounts-grid';

  cards.forEach((card) => {
    const article = document.createElement('article');
    article.className = 'account-card';

    const cardTitle = document.createElement('h3');
    cardTitle.className = 'account-card-title';
    cardTitle.textContent = card.title;

    const cardDescription = document.createElement('p');
    cardDescription.className = 'account-card-description';
    cardDescription.textContent = card.description;

    const featureList = document.createElement('ul');
    featureList.className = 'account-card-features';

    card.features.forEach((feature) => {
      const item = document.createElement('li');
      item.textContent = feature;
      featureList.append(item);
    });

    article.append(cardTitle, cardDescription, featureList);
    grid.append(article);
  });

  block.append(titleEl, introEl, grid);
}
