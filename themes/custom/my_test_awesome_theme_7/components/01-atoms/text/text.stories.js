import heading from './headings/_heading.twig';
import blockquote from './text/02-blockquote.twig';
import pre from './text/05-pre.twig';
import paragraph from './text/03-inline-elements.twig';
import code from './text/07-code.twig';

import blockquoteData from './text/blockquote.yml';
import headingData from './headings/headings.yml';
import codeData from './text/code.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Text' };

// Loop over items in headingData to show each one in the example below.
const headings = headingData.map((d) => heading(d)).join('');

export const headingsExamples = () => headings;

export const blockquoteExample = () => `
  <h3>Default Blockquote</h3>
  <div class="text-field mb-50 mt-30">
    ${blockquote({
      ...blockquoteData,
    })}
  </div>
  <h3>Centred blockquote</h3>
  <div class="text-field mb-50 mt-30">
    ${blockquote({
      blockquote__modifiers: ['quote-center'],
      ...blockquoteData,
    })}
  </div>
  <h3>Highlighted blockquote</h3>
  <div class="text-field mb-50 mt-30">
    ${blockquote({
      blockquote__modifiers: ['highlighted'],
      ...blockquoteData,
    })}
  </div>
`;

export const preformatted = () => pre();

export const random = () => paragraph();

export const codeExample = () => code(codeData);
