import React from 'react';
import {getRawDOM} from '@base/06-common/GetRawDom';
import reactToHtml from '@degjs/storybook-decorator-react-to-html';

import fullWidthTwig from './full-width.twig';
import withSidebarTwig from './with-sidebar.twig';

import {Placeholder} from '@templates/placeholder/bs/placeholder.stories';

import {
  header as Header,
  footer as Footer,
} from '@organisms/site/site.stories';

/**
 * Storybook Definition.
 */
export default {
  title: 'Templates/Layouts',
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [reactToHtml],
};

const TwigTemplateFullWidth = (args) => (
  <div
    dangerouslySetInnerHTML={{
      __html: fullWidthTwig({
        ...args,
      }),
    }}
  />
);

export const fullWidth = TwigTemplateFullWidth.bind({});

const globalElements = {
  page_header: getRawDOM(Header),
  page_content: getRawDOM(Placeholder, {
    ...Placeholder.args,
    placeholder_rows: 10,
  }),
  page_sidebar: getRawDOM(Placeholder, {
    ...Placeholder.args,
    placeholder_variant: 'success',
    placeholder_rows: 10,
  }),
  page_footer: getRawDOM(Footer),
};

fullWidth.args = globalElements;

const TwigTemplateWithSidebar = (args) => (
  <div
    dangerouslySetInnerHTML={{
      __html: withSidebarTwig({
        ...args,
      }),
    }}
  />
);

export const withSidebar = TwigTemplateWithSidebar.bind({});

withSidebar.args = globalElements;
