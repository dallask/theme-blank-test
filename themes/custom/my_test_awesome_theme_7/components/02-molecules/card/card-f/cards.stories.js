import cardF from './card-f.twig';

import cardFData from './card-f.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Cards/Card F' };

export const cardExamples = () => `
  <h3>Card F with top-side modifier</h3>
  <div class="text-field mb-50 mt-30">
    ${cardF({
      ...cardFData,
      config: {
        ...cardFData.config,
        modifier: ['top-side'],
        card__content__modifiers: ['top-side'],
      },
    })}
  </div>
  <h3>Card F with left-side modifier</h3>
  <div class="text-field mb-50 mt-30">
    ${cardF({
      ...cardFData,
      config: {
        ...cardFData.config,
        modifier: ['left-side'],
        card__content__modifiers: ['left-side'],
      },
    })}
  </div>
  <h3>Card F with right-side modifier</h3>
  <div class="text-field mb-50 mt-30">
    ${cardF({
      ...cardFData,
      config: {
        ...cardFData.config,
        modifier: ['right-side'],
        card__content__modifiers: ['right-side'],
      },
    })}
  </div>
  <h3>Card F with bottom-side modifier</h3>
  <div class="text-field mb-50 mt-30">
    ${cardF({
      ...cardFData,
      config: {
        ...cardFData.config,
        modifier: ['bottom-side'],
        card__content__modifiers: ['bottom-side'],
      },
    })}
  </div>
`;
