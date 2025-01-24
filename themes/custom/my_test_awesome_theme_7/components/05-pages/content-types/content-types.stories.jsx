import React from 'react';
import {getRawDOM} from '@base/06-common/GetRawDom';
import reactToHtml from '@degjs/storybook-decorator-react-to-html';

import articleTwig from './article.twig';

import {
  header as Header,
  footer as Footer,
} from '@organisms/site/site.stories';

/**
 * Storybook Definition.
 */
export default {
  title: 'Pages/Content Types',
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [reactToHtml],
};

const TwigTemplate = (args) => (
  <div
    dangerouslySetInnerHTML={{
      __html: articleTwig({
        ...args,
      }),
    }}
  />
);

export const article = TwigTemplate.bind({});

article.args = {
  page_header: getRawDOM(Header),
  page_footer: getRawDOM(Footer),
};
