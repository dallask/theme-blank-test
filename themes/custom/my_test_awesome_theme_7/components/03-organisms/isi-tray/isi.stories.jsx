import React from 'react';
import { getRawDom } from '@base/06-common/GetRawDom';
import reactToHtml from '@degjs/storybook-decorator-react-to-html';
import data from './isi-tray.yml';
import twigTemplate from './isi-tray.twig';
import sectionTwig from '@atoms/text/text/08-section.twig';
import { ISIInline } from '@organisms/isi-tray/isiInline.stories';

import 'js-throttle-debounce';
import 'malihu-custom-scrollbar-plugin';

import './js/3rd-party/mCustomScrollbar/jquery.mCustomScrollbar.css';
import './css/pharma_isi_drawer.css';
import './css/pharma_isi_stickyfooter.css';
import './js/pharma_isi_stickyfooter';
import './js/pharma_isi_drawer';

import docs from './README.mdx';

const SectionPageContent = () => (
  <div
    dangerouslySetInnerHTML={{
      __html: sectionTwig({
        section_content: data.page_content,
        section_extra: ['container'],
      }),
    }}
  />
);

const SectionISIInline = () => (
  <div
    dangerouslySetInnerHTML={{
      __html: sectionTwig({
        section_content: data.bodyContent,
        section_extra: ['container', 'section', 'isi-section'],
        section_attributes: {
          id: 'inline-isi-wrapper',
        },
      }),
    }}
  />
);

export default {
  title: 'Organisms/ISI',
  component: 'ISI Tray',
  decorators: [
    (Story) => (
      <>
        <SectionPageContent />
        <ISIInline {...ISIInline.args} />
        <Story />
      </>
    ),
    reactToHtml,
  ],
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


export const ISITray = (args) => (
  <div
    dangerouslySetInnerHTML={{
      __html: twigTemplate({
        ...args,
      }),
    }}
  />
);

ISITray.args = {
  page_content: data.page_content,
  drawer_title: data.drawer_title,
  title: data.title,
  fake_drawer_enable: data.fake_drawer_enable,
  drawer_enable: data.drawer_enable,
  drawer_expand_text: data.drawer_expand_text,
  drawer_collapse_text: data.drawer_collapse_text,
  bodyContent: data.bodyContent,
  jump_link_content: data.jump_link_content,
  drawer_height_collapsed: data.drawer_height_collapsed,
  horiz_offset: data.horiz_offset,
  drawer_width: data.drawer_width,
  label: '',
};
