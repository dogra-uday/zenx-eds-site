const normalizeKey = (value = '') => value.trim().toLowerCase().replace(/\s+/g, '');

const getConfig = (block) => {
  const config = {};
  const rows = [...block.children].filter((row) => row.matches(':scope > div'));

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
    const image = valueCell.querySelector('img');
    const link = valueCell.querySelector('a');
    const value = valueCell.textContent.trim();

    config[key] = {
      text: value,
      href: link?.href,
      image: image?.src,
      alt: image?.alt,
    };
  });

  return config;
};

const pick = (config, keys, fallback = '') => {
  const match = keys.find((key) => config[key]?.text || config[key]?.href || config[key]?.image);
  if (!match) {
    return fallback;
  }
  return config[match];
};

export default async function decorate(block) {
  const config = getConfig(block);
  const title = pick(config, ['title', 'heading'])?.text
    || block.querySelector('h1, h2, h3')?.textContent?.trim()
    || 'Open Your New Account Today';
  const eyebrow = pick(config, ['eyebrow', 'kicker'])?.text || 'ZenX Bank';
  const subtitle = pick(config, ['subtitle', 'description'])?.text
    || block.querySelector('p')?.textContent?.trim()
    || 'Secure digital onboarding designed for modern banking journeys.';
  const ctaLabel = pick(config, ['ctalabel', 'ctatext', 'buttonlabel'])?.text || 'Start Application';
  const ctaHref = pick(config, ['ctahref', 'ctalink', 'buttonlink'])?.href || '#account-form';
  const imageConfig = pick(config, ['backgroundimage', 'image', 'heroimage']) || {};
  const imageSrc = imageConfig.image || '/content/dam/zenx-eds-site/Hero.png';
  const imageAlt = imageConfig.alt || title;

  block.innerHTML = '';

  const banner = document.createElement('div');
  banner.className = 'hero-banner';

  const media = document.createElement('div');
  media.className = 'hero-media';

  const image = document.createElement('img');
  image.src = imageSrc;
  image.alt = imageAlt;
  image.loading = 'eager';
  media.append(image);

  const overlay = document.createElement('div');
  overlay.className = 'hero-overlay';

  const eyebrowEl = document.createElement('p');
  eyebrowEl.className = 'hero-eyebrow';
  eyebrowEl.textContent = eyebrow;

  const titleEl = document.createElement('h1');
  titleEl.className = 'hero-title';
  titleEl.textContent = title;

  const subtitleEl = document.createElement('p');
  subtitleEl.className = 'hero-subtitle';
  subtitleEl.textContent = subtitle;

  const cta = document.createElement('a');
  cta.className = 'hero-cta';
  cta.href = ctaHref;
  cta.textContent = ctaLabel;

  overlay.append(eyebrowEl, titleEl, subtitleEl, cta);
  banner.append(media, overlay);
  block.append(banner);
}
