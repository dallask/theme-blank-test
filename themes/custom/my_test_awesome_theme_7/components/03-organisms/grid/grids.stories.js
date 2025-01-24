import gridWithHeaderTemplate from './grid-with-header.twig';
import gridMultiElementsTemplate from './grid-multi-elements.twig';

import gridWithHeaderData from './grid-with-header.yml';
import gridMultiElementsData from './grid-multi-elements.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/Grids' };

export const gridWithHeader = () => gridWithHeaderTemplate(gridWithHeaderData);

export const gridMultiElements = () =>
  gridMultiElementsTemplate({ ...gridMultiElementsData });
