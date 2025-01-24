import React from 'react';
import reactToHtml from '@degjs/storybook-decorator-react-to-html';

import templateTwig from './card.twig';
import data from './card.yml';

import docs from './README.md';

export default {
  title: 'Molecules/Cards/BS',
  component: 'Cards',
  argTypes: {
    card__base_class: {
      control: {
        type: 'text',
      },
      defaultValue: 'card',
      description: 'Block base class for BEM',
      table: {
        defaultValue: {
          summary: 'card',
        },
        category: 'BEM',
      },
    },
    card__blockname: {
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
    card__modifiers: {
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
    card__classes: {
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
    card__attributes: {
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
    size: {
      table: {
        disable: true,
      },
    },
    card__header__image__inline: {
      table: {
        disable: true,
      },
    },
    card__header: {
      control: {
        type: 'text',
      },
      defaultValue: data.card__header,
      description: 'Content header for card',
      table: {
        defaultValue: {
          summary: data.card__header,
        },
        category: 'Content',
      },
    },
    card__body__text: {
      control: {
        type: 'text',
      },
      defaultValue: data.card__body__text,
      description: 'Content for card',
      table: {
        defaultValue: {
          summary: data.card__body__text,
        },
        category: 'Content',
      },
    },
    card__footer: {
      control: {
        type: 'text',
      },
      defaultValue: data.card__footer,
      description: 'Content footer for card',
      table: {
        defaultValue: {
          summary: data.card__footer,
        },
        category: 'Content',
      },
    },
    card__header__image: {
      control: 'boolean',
      defaultValue: {
        img_header: data.card__header__image,
      },
      description: 'Card image header',
      table: {
        defaultValue: {
          summary: data.card__header__image,
        },
        category: 'Structure',
      },
    },
    card__footer__image__inline: {
      control: 'boolean',
      defaultValue: {
        img_footer: data.card__footer__image__inline,
      },
      description: 'Card image footer',
      table: {
        defaultValue: {
          summary: data.card__footer__image__inline,
        },
        category: 'Structure',
      },
    },
    text_alignment: {
      options: data.text_alignment,
      control: { type: 'radio' },
      defaultValue: 'center',
      table: {
        defaultValue: {
          summary: 'center',
          detail: data.text_alignment.join(', '),
        },
        disable: false,
        category: 'Style',
      },
    },
    card_variant: {
      options: data.variant,
      control: {
        type: 'select',
      },
      defaultValue: 'primary',
      description: 'Card variant (according the Bootstrap color schema)',
      table: {
        defaultValue: {
          summary: 'primary',
          detail: data.variant.join(', '),
        },
        category: 'Style',
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
  <div className="row">
    {Object.values(data.variant).map((variant) => (
      <span
        key={variant}
        className="col-15 mb-5"
        dangerouslySetInnerHTML={{
          __html: templateTwig({
            ...args,
            card_variant: variant,
          }),
        }}
      />
    ))}
  </div>
);
export const Cards = TwigTemplate.bind({});

Cards.args = {
  card__header__image: data.card__header__image,
  card__header__image__inline: data.card__header__image__inline,
  card__header: data.card__header,
  card__body__text: data.card__body__text,
  card__footer: data.card__footer,
  card__classes: data.classes,
};
