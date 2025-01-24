import React from 'react';
import reactToHtml from '@degjs/storybook-decorator-react-to-html';

import colorsData from './colors-all.yml';
import './_colors-all.scss';

import docs from './colors-all.mdx';

export default {
  title: 'Base/Colors',
  component: 'BS Palette',
  parameters: {
    docs: {
      page: docs,
    },
  },
  decorators: [reactToHtml],
};

const TwigTemplate = (args) => (
  <div className="row">
    {Object.values(colorsData.colors).map((color, color_index) => (
      <div className="col-md-20 mb-3" key={`${color.name}-${color_index}`}>
        <div
          key={`${color.name}`}
          className={`p-5 mb-2 position-relative swatch-${color.name}
             bd-${color.name}-500
             text-${color.header_color ? color.header_color : 'white'}
             bg-${color.header_bg ? color.header_bg : 'inherit'}
             ${color.header_bg === 'white' ? 'border' : ''} fw-bold`}
        >
          ${color.title ? color.title : color.name}: {color.color}
        </div>
        {Object.keys(color.palette).map((key, index) => {
          return (
            <div
              key={`${color.name}-${index}`}
              className={`p-3 bd-${color.name}-${key} ${
                key > 400 ? 'text-white' : ''
              }`}
            >
              ${color.name}-{key}: {color.palette[key]}
            </div>
          );
        })}
      </div>
    ))}
  </div>
);
export const BSPalette = TwigTemplate.bind({});

BSPalette.args = {
  colors: colorsData.colors,
};
