import './card-d';

import cardD from './card-d.twig';
import cardDData from './card-d.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Cards/Card D' };

export const cardExamples = () => `
  <h3>Default Card D</h3>
  <div class="mb-50 mt-30">
    ${cardD({
      ...cardDData,
    })}
  </div>
`;
