import React from 'react';
import reactToHtml from '@degjs/storybook-decorator-react-to-html';

import CTAIcon from './cta.twig';
import CTAData from './cta.yml';

import docs from './README.md';

/**
 * Storybook Definition.
 */
export default {
  title: 'Atoms/CTA With Icon',
  component: 'CTAWithIcon',
  argTypes: {
    cta_base_class: {
      control: {
        type: 'text',
      },
      defaultValue: 'link',
      description: 'Block base class for BEM',
      table: {
        defaultValue: {
          summary: 'link',
        },
        category: 'BEM',
      },
    },
    cta_blockname: {
      control: {
        type: 'text',
      },
      defaultValue: 'cta',
      description: 'Block name for BEM',
      table: {
        defaultValue: {
          summary: 'cta',
        },
        category: 'BEM',
      },
    },
    cta_modifiers: {
      control: {
        type: 'object',
      },
      defaultValue: ['primary'],
      description: 'Block modifiers for BEM',
      table: {
        defaultValue: {
          summary: 'array[]',
        },
        category: 'BEM',
      },
    },
    cta_attributes: {
      control: {
        type: 'object',
      },
      defaultValue: CTAData.attributes,
      description: 'Block attributes',
      table: {
        defaultValue: {
          summary: CTAData.attributes,
        },
        category: 'Structure',
      },
    },
    cta_icon: {
      control: {
        type: 'text',
      },
      defaultValue: 'arrow-link',
      description: 'Icon name',
      table: {
        defaultValue: {
          summary: 'arrow-link',
        },
        category: 'Structure',
      },
    },
    cta_url: {
      control: {
        type: 'text',
      },
      defaultValue: '/',
      description: 'Link url',
      table: {
        defaultValue: {
          summary: '/',
        },
        category: 'Content',
      },
    },
    cta_content: {
      control: {
        type: 'object',
      },
      name: 'cta_content',
      defaultValue: CTAData.cta_content,
      description: 'Link content',
      table: {
        defaultValue: {
          summary: CTAData.cta_content,
        },
        category: 'Content',
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: docs,
      },
      source: {
        code: CTAData.docs.source.code,
        language: 'twig',
      },
    },
  },
  decorators: [reactToHtml],
};

const TwigTemplate = (args) => (
  <div>
    {Object.values(CTAData.cta_modifiers).map((variant) => (
      <div
        key={variant}
        className="me-5 mb-5 d-inline-block"
        dangerouslySetInnerHTML={{
          __html: CTAIcon({
            ...args,
            cta_modifiers: Array.isArray(variant) ? variant : [variant],
          }),
        }}
      />
    ))}
  </div>
);

export const CTAWithIcon = TwigTemplate.bind({});

CTAWithIcon.args = {
  cta_url: CTAData.cta_url,
  cta_content: CTAData.cta_content,
  cta_icon: CTAData.cta_icon,
  cta_base_class: CTAData.cta_base_class,
  cta_blockname: CTAData.cta_blockname,
  cta_attributes: CTAData.attributes,
};
