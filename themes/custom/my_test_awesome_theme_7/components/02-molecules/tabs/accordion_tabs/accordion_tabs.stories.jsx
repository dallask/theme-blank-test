import React from 'react';
import reactToHtml from '@degjs/storybook-decorator-react-to-html';
import accordionTabsData from './accordion_tabs.yml';
import accordionTabsTemplate from './accordion_tabs.twig';
import accordionTabsDocs from './README.mdx';

export default {
  title: 'Molecules/Tabs/Accordion Tabs',
  parameters: {
    docs: {
      page: (() => accordionTabsDocs)(),
    },
  },
  decorators: [reactToHtml],
};

export const AccordionTabs = (args) => (
  <div
    dangerouslySetInnerHTML={{
      __html: accordionTabsTemplate({
        ...args,
      }),
    }}
  />
);

AccordionTabs.args = {
  accordion_tabs: accordionTabsData.accordion_tabs,
};
