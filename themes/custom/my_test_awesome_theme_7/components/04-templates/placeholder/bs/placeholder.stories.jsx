import React from 'react';
import reactToHtml from '@degjs/storybook-decorator-react-to-html';

import templateTwig from './placeholder.twig';
import data from './placeholder.yml';

import docs from './README.md';

export default {
  title: 'Templates/Place Holder',
  component: 'Placeholder',
  argTypes: {
    placeholder_base_class: {
      control: { type: 'text' },
      defaultValue: 'placeholder',
      description: 'Block base class for BEM',
      table: {
        defaultValue: {
          summary: 'placeholder',
        },
        category: 'BEM',
      },
    },
    placeholder_blockname: {
      control: {
        type: 'text',
      },
      defaultValue: 'bootstrap',
      description: 'Block name for BEM',
      table: {
        defaultValue: {
          summary: 'bootstrap',
        },
        category: 'BEM',
      },
    },
    placeholder_modifiers: {
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
    placeholder_classes: {
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
    placeholder_attributes: {
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
    placeholder_size: {
      options: data.size,
      control: {
        type: 'radio',
      },
      defaultValue: 'md',
      description: 'Placeholder size',
      table: {
        defaultValue: {
          summary: data.size,
        },
        category: 'Style',
        disable: false,
      },
    },
    placeholder_effect: {
      options: data.effect,
      control: {
        type: 'radio',
      },
      defaultValue: data.effect,
      description: 'Placeholder effect',
      table: {
        defaultValue: {
          summary: data.effect,
        },
        category: 'Behavior',
        disable: false,
      },
    },
    placeholder_variant: {
      options: data.variant,
      control: {
        type: 'select',
      },
      defaultValue: 'primary',
      description: 'Placeholder variant',
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
export const Placeholder = TwigTemplate.bind({});

Placeholder.args = {
  placeholder_effect: 'glow',
  placeholder_size: 'md',
  placeholder_classes: data.classes,
  placeholder_variant: 'primary',
};
