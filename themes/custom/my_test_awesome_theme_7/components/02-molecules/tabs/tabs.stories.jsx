import React from 'react';
import reactToHtml from '@degjs/storybook-decorator-react-to-html';
import templateTwig from './tabs_sb.twig';
import data from './tabs_sb.yml';

import docs from './README.md';

export default {
  title: 'Molecules/Tabs',
  component: 'Tabs',
  decorators: [reactToHtml],
  parameters: {
    docs: {
      description: {
        component: docs,
      },
      source: {
        code: ``,
        language: 'twig',
      },
    },
  },
};

const TwigTemplate = (args) => (
  <span dangerouslySetInnerHTML={{
    __html: templateTwig({
      ...args,
    }),
  }}/>
);
export const TabsBS = TwigTemplate.bind({});

TabsBS.args = {
  ...data,
  tabs_type: 'tabs',
  tabs_fill: false,
  tabs_justified: false,
  tabs_justify_content: 'justify-content-start',
  tabs_direction: 'flex-row',
  tabs_classes: data.classes,
};
