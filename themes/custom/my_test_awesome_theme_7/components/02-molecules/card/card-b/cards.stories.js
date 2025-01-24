import cardB from './card-b.twig';

import cardBData from './card-b.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Cards/Card B' };

export const cardExamples = () => `
  <h3>Default card B Main</h3>
  <div class="text-field mb-50 mt-30">
    ${cardB({
      ...cardBData,
      card__image: null,
      config: {
        ...cardBData.config,
        modifier: ['top'],
      },
    })}
  </div>
  <h3>Card B</h3>
  <div class="text-field mb-50 mt-30 p-30 bg-secondary">
    ${cardB({
      ...cardBData,
      config: {
        ...cardBData.config,
        modifier: ['main'],
      },
    })}
  </div>
`;
