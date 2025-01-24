import React from 'react';
import reactToHtml from '@degjs/storybook-decorator-react-to-html';

import alertTwig from './alert.twig';
import alertData from './alert.yml';

import docs from './README.md';

export default {
  title: 'Molecules/Alert',
  component: 'Alert',
  argTypes: {
    alert_base_class: {
      control: {
        type: 'text',
      },
      defaultValue: 'alert',
      description: 'Block base class for BEM',
      table: {
        defaultValue: {
          summary: 'alert',
        },
        category: 'BEM',
      },
    },
    alert_blockname: {
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
    alert_modifiers: {
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
    alert_classes: {
      control: {
        type: 'object',
      },
      defaultValue: alertData.classes,
      description: 'Block extra classes for BEM',
      table: {
        defaultValue: {
          summary: alertData.classes,
        },
        category: 'BEM',
      },
    },
    alert_attributes: {
      control: {
        type: 'object',
      },
      defaultValue: alertData.attributes,
      description: 'Block attributes',
      table: {
        defaultValue: {
          summary: alertData.attributes,
        },
        category: 'Structure',
      },
    },
    alert_content: {
      control: {
        type: 'object',
      },
      name: 'alert_content',
      defaultValue: alertData.content,
      description: 'Block content',
      table: {
        defaultValue: {
          summary: 'object[]',
        },
        category: 'Content',
      },
    },
    alert_dismissible: {
      control: 'boolean',
      defaultValue: {
        alert_flush: alertData.dismissible,
      },
      description: 'Alert dismissible behavior (close button)',
      table: {
        defaultValue: {
          summary: alertData.dismissible,
        },
        category: 'Structure',
      },
    },
    alert_variant: {
      options: alertData.variant,
      control: {
        type: 'radio',
      },
      defaultValue: 'primary',
      description: 'Alert variant (according the Bootstrap color schema)',
      table: {
        defaultValue: {
          summary: 'primary',
          detail: alertData.variant.join(', '),
        },
        category: 'Style',
      },
    },
    accordion_size: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: docs,
      },
      source: {
        code: alertData.docs.source.code,
        language: 'twig',
      },
    },
  },
  decorators: [reactToHtml],
};

const TwigTemplate = (args) => (
  <div dangerouslySetInnerHTML={{ __html: alertTwig({ ...args }) }} />
);
export const Alert = TwigTemplate.bind({});

Alert.args = {
  alert_content: alertData.content,
  alert_dismissible: alertData.dismissible,
  alert_classes: alertData.classes,
  alert_attributes: alertData.attributes,
};
