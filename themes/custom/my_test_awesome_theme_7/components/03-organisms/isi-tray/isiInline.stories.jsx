import React from 'react';
import reactToHtml from '@degjs/storybook-decorator-react-to-html';
import data from './isi-tray.yml';
import twigTemplateInline from './isi-inline.twig';

import 'js-throttle-debounce';
import 'malihu-custom-scrollbar-plugin';

import './js/3rd-party/mCustomScrollbar/jquery.mCustomScrollbar.css';
import './css/pharma_isi_drawer.css';
import './css/pharma_isi_stickyfooter.css';
import './js/pharma_isi_stickyfooter';
import './js/pharma_isi_drawer';

import docs from './README.mdx';

export default {
  title: 'Organisms/ISI',
  component: 'ISI Inline',
  decorators: [reactToHtml],
  parameters: {
    docs: {
      inlineStories: false,
      page: (() => docs)(),
      source: {
        code: data.docs.source.code,
        language: 'twig',
      },
    },
    layout: 'fullscreen',
  },
};

export const ISIInline = (args) => (
  <div
    dangerouslySetInnerHTML={{
      __html: twigTemplateInline({
        ...args,
      }),
    }}
  />
);

ISIInline.args = {
  elements: {
    content: {
      title: data.title,
      bodyContent: data.bodyContent
    },
  },
};
