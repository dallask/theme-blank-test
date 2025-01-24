import React from 'react';
import reactToHtml from '@degjs/storybook-decorator-react-to-html';
import accordionTwig from './accordion.twig';
import data from './accordion.yml';

import docs from './README.md';

export default {
  title: 'Molecules/Accordion',
  component: 'Accordion',
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
  <div dangerouslySetInnerHTML={{ __html: accordionTwig({...args}) }}/>
);
export const Accordion = TwigTemplate.bind({});

Accordion.args = {
  accordion: data.accordion,
  accordion_flush: data.flush,
  accordion_always_opened: data.always_opened,
  accordion_classes: data.classes,
  accordion_extra_attributes: data.attributes,
};
