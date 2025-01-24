import React from 'react';
import reactToHtml from '@degjs/storybook-decorator-react-to-html';

import templateTwig from './navbar.twig';
import data from './navbar.yml';

import docs from './README.md';

import { main } from '@molecules/menus/menus.stories';
import mainMenuData from '@molecules/menus/main-menu/main-menu.yml';
import { Logo } from '@molecules/logo/logo.stories';

data.content.navbar_logo = data.content.navbar_logo
  ? data.content.navbar_logo
  : Logo();
data.content.navbar_menu = data.content.navbar_menu
  ? data.content.navbar_menu
  : main(mainMenuData);

export default {
  title: 'Molecules/navbar',
  component: 'navbar',
  argTypes: {
    navbar_base_class: {
      control: {
        type: 'text',
      },
      defaultValue: 'navbar',
      description: 'Block base class for BEM',
      table: {
        defaultValue: {
          summary: 'navbar',
        },
        category: 'BEM',
      },
    },
    navbar_blockname: {
      control: {
        type: 'text',
      },
      defaultValue: '',
      description: 'Block name for BEM',
      table: {
        defaultValue: {
          summary: '',
        },
        category: 'BEM',
      },
    },
    navbar_modifiers: {
      control: {
        type: 'object',
      },
      defaultValue: [],
      description: 'Block modifiers for BEM',
      table: {
        defaultValue: {
          summary: 'array[]',
        },
        category: 'BEM',
      },
    },
    navbar_extra: {
      control: {
        type: 'object',
      },
      defaultValue: data.classes,
      description: 'Block extra classes for BEM',
      table: {
        defaultValue: {
          summary: data.classes,
        },
        category: 'BEM',
      },
    },
    navbar_attributes: {
      control: {
        type: 'object',
      },
      defaultValue: data.attributes,
      description: 'Block attributes',
      table: {
        defaultValue: {
          summary: data.attributes,
        },
        category: 'Structure',
      },
    },
    navbar_content: {
      control: {
        type: 'object',
      },
      name: 'navbar_content',
      defaultValue: data.content,
      description: 'Block content',
      table: {
        defaultValue: {
          summary: data.content,
        },
        category: 'Content',
      },
    },
    size: {
      table: {
        disable: true,
      },
    },
    navbar_container: {
      options: data.container,
      control: {
        type: 'radio',
      },
      defaultValue: 'container',
      description: 'Navbar container',
      table: {
        defaultValue: {
          summary: 'container',
          detail: data.container.join(', '),
        },
        category: 'Structure',
        disable: false,
      },
    },
    navbar_background: {
      options: data.background,
      control: {
        type: 'radio',
      },
      defaultValue: 'dark',
      description: 'Navbar background',
      table: {
        defaultValue: {
          summary: 'dark',
          detail: data.background.join(', '),
        },
        category: 'Style',
        disable: false,
      },
    },
    navbar_collapsible: {
      control: {
        type: 'boolean',
      },
      defaultValue: true,
      description: 'Navbar collapsible',
      table: {
        defaultValue: {
          summary: true,
        },
        category: 'Style',
        disable: false,
      },
    },
    navbar_expand_point: {
      options: data.expand_point,
      control: {
        type: 'radio',
      },
      defaultValue: 'md',
      description: 'Navbar expand point',
      table: {
        defaultValue: {
          summary: 'md',
          detail: data.expand_point.join(', '),
        },
        category: 'Style',
        disable: false,
      },
    },
    navbar_variant: {
      options: data.variant,
      control: {
        type: 'select',
      },
      defaultValue: 'primary',
      description: 'Navbar variant',
      table: {
        defaultValue: {
          summary: 'primary',
          detail: data.variant.join(', '),
        },
        category: 'Style',
        disable: false,
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: docs,
      },
      source: {
        code: data.docs.source.code,
        language: 'twig',
      },
    },
    layout: 'fullscreen',
  },
  decorators: [reactToHtml],
};

const TwigTemplate = (args) => (
  <div
    dangerouslySetInnerHTML={{
      __html: templateTwig({
        ...args,
      }),
    }}
  />
);
export const Navbar = TwigTemplate.bind({});

Navbar.args = {
  navbar_content: data.content,
  navbar_container: 'container',
  navbar_background: 'dark',
  navbar_collapsible: true,
  navbar_expand_point: 'md',
  navbar_variant: 'primary',
  navbar_extra: data.classes,
  navbar_attributes: data.attributes,
};
