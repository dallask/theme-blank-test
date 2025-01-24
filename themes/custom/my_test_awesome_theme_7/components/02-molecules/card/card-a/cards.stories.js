import cardA from './card-a.twig';

import cardAData from './card-a.yml';
import './card-expand';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Cards/Card A' };

export const cardExamples = () => `
  <h3>Default card A</h3>
  <div class="text-field mb-50 mt-30">
    ${cardA({
      ...cardAData,
      config: {
        ...cardAData.config,
        modifier: ['top'],
      },
    })}
  </div>
  <h3>Card A with left modifier</h3>
  <div class="text-field mb-50 mt-30">
    ${cardA({
      ...cardAData,
      config: {
        ...cardAData.config,
        modifier: ['left'],
        card__content__modifiers: ['left', 'bottom-line'],
      },
    })}
  </div>
  <h3>Card A with right modifier</h3>
  <div class="text-field mb-50 mt-30">
    ${cardA({
      ...cardAData,
      config: {
        ...cardAData.config,
        modifier: ['right'],
        card__content__modifiers: ['right', 'bottom-line'],
      },
    })}
  </div>
  <h3>Card A with bottom modifier</h3>
  <div class="text-field mb-50 mt-30">
    ${cardA({
      ...cardAData,
      config: {
        ...cardAData.config,
        modifier: ['bottom'],
        card__content__modifiers: ['bottom'],
      },
    })}
  </div>
  <h3>Card A with text only</h3>
  <div class="text-field mb-50 mt-30">
    ${cardA({
      config: {
        ...cardAData.config,
        modifier: ['top'],
        card__content__modifiers: ['no-background'],
      },
      card__heading: `<mark>Learn</mark>`,
      card__subheading: 'All you can about PBA.',
      card__body: cardAData.card__body__text,
    })}
  </div>
  <h3>Card A expandable</h3>
  <div class="text-field mb-50 mt-30">
    ${cardA({
      ...cardAData,
      card__body: cardAData.card__body__text,
      config: {
        ...cardAData.config,
        modifier: ['top', 'expandable'],
      },
    })}
  </div>
`;
