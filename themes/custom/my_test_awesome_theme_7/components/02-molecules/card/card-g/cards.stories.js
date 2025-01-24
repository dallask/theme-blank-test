import cardG from './card-g.twig';

import cardGData from './card-g.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Cards/Card G' };

export const cardExamples = () => `
  <div class="card-counter-reset d-flex">
    <h3>Default Card G</h3>
    <div class="text-field mb-50 mt-30" style="width: 307px;">
      ${cardG({
        ...cardGData,
      })}
    </div>
    <div class="text-field mb-50 mt-30" style="width: 307px;">
      ${cardG({
        ...cardGData,
      })}
    </div>
  </div>
`;
