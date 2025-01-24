import React from 'react';
import reactToHtml from '@degjs/storybook-decorator-react-to-html';
import data from './cards_complex.yml';
import templateTwig from './cards_complex.twig';

import docs from './README.mdx';

export default {
  title: 'Organisms/Cards Complex',
  component: 'Cards Complex',
  parameters: {
    docs: {
      page: (() => docs)(),
    },
  },
  decorators: [reactToHtml],
};

export const CardsComplex = (args) => (
  <div
    dangerouslySetInnerHTML={{
      __html: templateTwig({
        ...args,
      }),
    }}
  />
);

CardsComplex.args = {
  cards_complex: data.cards_complex,
  label: '',
};
