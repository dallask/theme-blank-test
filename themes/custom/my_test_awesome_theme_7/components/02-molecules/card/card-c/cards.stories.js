import cardC from './card-c.twig';

import cardCData from './card-c.yml';

import '../card-a/card-expand';
/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Cards/Card C' };

export const cardExamples = () => `
  <h3>Default card C</h3>
  <div class="text-field mb-50 mt-30">
    ${cardC({
      ...cardCData,
    })}
  </div>
  <h3>Default card C expandible</h3>
  <div class="text-field mb-50 mt-30">
    ${cardC({
      card__image: cardCData.card__image,
      card__heading: cardCData.card__heading,
      card__body: cardCData.card__body__text,
      config: {
        ...cardCData.config,
        card__modifiers: ['expandable'],
      },
    })}
  </div>
`;
