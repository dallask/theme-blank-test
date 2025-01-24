import React from 'react';
import { getRawDOM } from '@base/06-common/GetRawDom';
import reactToHtml from '@degjs/storybook-decorator-react-to-html';

import home from './home.twig';

import {
  header as Header,
  footer as Footer,
} from '@organisms/site/site.stories';

/**
 * Storybook Definition.
 */
export default {
  title: 'Pages/Landing Pages',
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [reactToHtml],
};

const TwigTemplate = (args) => (
  <div
    dangerouslySetInnerHTML={{
      __html: home({
        ...args,
      }),
    }}
  />
);

export const homePage = TwigTemplate.bind({});

homePage.args = {
  page_header: getRawDOM(Header),
  page_footer: getRawDOM(Footer),
};
