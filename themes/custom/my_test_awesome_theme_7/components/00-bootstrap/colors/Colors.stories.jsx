import React from 'react';
import reactToHtml from '@degjs/storybook-decorator-react-to-html';

import colorsTwig from './colors.twig';
import colorsData from './colors.yml';

import docs from './colors.mdx';

export default {
  title: 'Base/Colors',
  component: 'colors',
  parameters: {
    docs: {
      page: docs,
    },
  },
  decorators: [reactToHtml],
};

const TwigTemplate = (args) => (
  <div className="row">
    {Object.values(colorsData.colors).map((color, index) => (
      <div
        key={`${color}-${index}`}
        className={'col-15 mb-2'}
        dangerouslySetInnerHTML={{ __html: colorsTwig({ ...args, color }) }}
      />
    ))}
  </div>
);
export const BSSimple = TwigTemplate.bind({});

BSSimple.args = {
  colors: colorsData.colors,
};
