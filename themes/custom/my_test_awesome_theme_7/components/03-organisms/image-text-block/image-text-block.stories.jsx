import React from 'react';
import reactToHtml from '@degjs/storybook-decorator-react-to-html';

import ImageTextBlockTemplate from './image-text-block.twig';
import data from './image-text-block.yml';
import docs from './README.mdx';

import './image-text-block.scss';

export default {
  title: 'Organisms/Image with text',
  content: ImageTextBlockTemplate,
  parameters: {
    docs: {
      page: (() => docs)(),
      source: {
        code: data.docs.source.code,
        language: 'twig',
      },
    },
  },
  argTypes: {
    title: {
      name: 'Block title',
      control: 'text',
    },
    direction: {
      name: 'Column positions',
      control: 'select',
      options: ['row', 'row-reverse', 'column', 'column-reverse'],
    },
  },
  decorators: [reactToHtml],
};

export const ImageTextBlock = (args) => (
  <div class='mt-50'>
    <div dangerouslySetInnerHTML={{
      __html: ImageTextBlockTemplate({
        ...data,
        text_block: {
          ...data.text_block,
          text: args.title,
        },
        image_text_block_direction_modifier: args.direction,
      }),
    }}/>
  </div>
);

ImageTextBlock.args = {
  title: 'Trying To Make Sense of Your Uncontrollable Crying and/or Laughing?',
  direction: 'row'
};
