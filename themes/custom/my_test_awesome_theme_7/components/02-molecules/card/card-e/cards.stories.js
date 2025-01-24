import cardE from './card-e.twig';
import cardEData from './card-e.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Cards/Card E' };

export const cardExamples = () => `
  <h3>Default Card E with text</h3>
  <div class="mb-50 mt-30">
    ${cardE({
      ...cardEData.card_text_example,
    })}
  </div>
  <h3>Default Card E with image and link</h3>
  <div class="mb-50 mt-30">
    ${cardE({
      ...cardEData.card_image_example,
    })}
  </div>
`;
