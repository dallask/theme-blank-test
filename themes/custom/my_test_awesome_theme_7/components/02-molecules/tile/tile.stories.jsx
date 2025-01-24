import React from 'react';
import reactToHtml from '@degjs/storybook-decorator-react-to-html';
import tileData from './tile.yml';
import tileTemplate from './tile.twig';
import tileDocs from './README.mdx';

export default {
  title: 'Molecules/Tile',
  parameters: {
    docs: {
      page: (() => tileDocs)(),
    },
  },
  decorators: [reactToHtml],
};

export const Tile = (args) => (
  <div
    dangerouslySetInnerHTML={{
      __html: tileTemplate({
        ...args,
      }),
    }}
  />
);

Tile.args = {
  tile: tileData.tile,
  element_extra: tileData.element_extra,
};
