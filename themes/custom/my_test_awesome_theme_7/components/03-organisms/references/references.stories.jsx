import React from 'react';
import reactToHtml from '@degjs/storybook-decorator-react-to-html';
import data from './references.yml';
import templateTwig from './references.twig';

import docs from './README.mdx';

export default {
  title: 'Organisms/References',
  component: 'References',
  parameters: {
    docs: {
      page: (() => docs)(),
    },
  },
  decorators: [reactToHtml],
};

export const References = (args) => (
  <div
    dangerouslySetInnerHTML={{
      __html: templateTwig({
        ...args,
      }),
    }}
  />
);

References.args = {
  references: data.references,
};

