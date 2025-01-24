import React from 'react';
import reactToHtml from '@degjs/storybook-decorator-react-to-html';
import data from './eu_cookie_compliance_popup_info.yml';
import twigTemplate from './eu_cookie_compliance_popup_info.twig';

import './css/eu_cookie_compliance.css';
import './css/eu_cookie_compliance.bare.css';
import docs from './README.mdx';

export default {
  title: 'Organisms/EU Cookie Warning',
  component: 'EU Cookie Warning',
  decorators: [
    (Story) => (
      <div
        id="sliding-popup"
        role="alertdialog"
        aria-describedby="popup-text"
        className="sliding-popup-bottom"
      >
        <Story />
      </div>
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
  argTypes: {
    block_base_class: {
      control: {
        type: 'text',
      },
      defaultValue: 'block',
      description: 'Block base class for BEM',
      table: {
        defaultValue: {
          summary: 'block',
        },
        category: 'BEM',
      },
    },
    block_blockname: {
      control: {
        type: 'text',
      },
      defaultValue: 'block',
      description: 'Block name for BEM',
      table: {
        defaultValue: {
          summary: 'block',
        },
        category: 'BEM',
      },
    },
    block_modifiers: {
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
    block_container_class: {
      control: {
        type: 'text',
      },
      defaultValue: 'container-full',
      description: 'Block container class',
      table: {
        defaultValue: {
          summary: 'container-full',
          detail:
            'You can use bootstrap classes like: "container", "container-fluid". Or any other classes.',
        },
        category: 'Structure',
      },
    },
    block_extra: {
      control: {
        type: 'object',
      },
      defaultValue: ['bg-secondary'],
      description: 'Block extra classes for BEM',
      table: {
        defaultValue: {
          summary:
            'array[\n' +
            "        'classnameOne',\n" +
            "        'classnameTwo',\n" +
            '      ]',
        },
        category: 'BEM',
      },
    },
    label: {
      control: {
        type: 'text',
      },
      defaultValue: 'Block Title',
      description: 'Block Title',
      table: {
        defaultValue: {
          summary: 'Block Title',
        },
        category: 'Content',
      },
    },
    title_prefix: {
      control: {
        type: 'text',
      },
      defaultValue: '',
      description: 'Block Title Prefix',
      table: {
        defaultValue: {
          summary: '',
        },
        category: 'Content',
      },
    },
    title_suffix: {
      control: {
        type: 'text',
      },
      defaultValue: '',
      description: 'Block Title Suffix',
      table: {
        defaultValue: {
          summary: '',
        },
        category: 'Content',
      },
    },
    block_title_tag: {
      control: {
        type: 'text',
      },
      defaultValue: 'h2',
      description: 'Block Title Tag',
      table: {
        defaultValue: {
          summary: 'h2',
        },
        category: 'Structure',
      },
    },
    block_title_base_class: {
      control: {
        type: 'text',
      },
      defaultValue: 'title',
      description: 'Block Title base class for BEM',
      table: {
        defaultValue: {
          summary: 'title',
        },
        category: 'BEM',
      },
    },
    message: {
      control: {
        type: 'text',
      },
      defaultValue: {
        message: data.content.message,
      },
      description: 'Block content',
      table: {
        defaultValue: {
          summary: `message: ${data.content.message}`,
        },
        category: 'Content',
      },
    },
    agree_button: {
      control: {
        type: 'text',
      },
      defaultValue: {
        agree_button: data.content.agree_button,
      },
      description: 'Agree button content',
      table: {
        defaultValue: {
          summary: `agree_button: ${data.content.agree_button}`,
        },
        category: 'Content',
      },
    },
    disagree_button: {
      control: {
        type: 'text',
      },
      defaultValue: {
        disagree_button: data.content.disagree_button,
      },
      description: 'Disagree button content',
      table: {
        defaultValue: {
          summary: `disagree_button: ${data.content.disagree_button}`,
        },
        category: 'Content',
      },
    },
    more_info_button: {
      control: {
        type: 'text',
      },
      defaultValue: {
        more_info_button: data.content.more_info_button,
      },
      description: 'More info button content',
      table: {
        defaultValue: {
          summary: `more_info_button: ${data.content.more_info_button}`,
        },
        category: 'Content',
      },
    },
    secondary_button_label: {
      control: {
        type: 'text',
      },
      defaultValue: {
        secondary_button_label: data.content.secondary_button_label,
      },
      description: 'Secondary button label content',
      table: {
        defaultValue: {
          summary: `secondary_button_label: ${data.content.secondary_button_label}`,
        },
        category: 'Content',
      },
    },
    primary_button_class: {
      control: {
        type: 'text',
      },
      defaultValue: {
        primary_button_class: data.content.primary_button_class,
      },
      description: 'Primary button class',
      table: {
        defaultValue: {
          summary: data.content.primary_button_class,
        },
        category: 'Structure',
      },
    },
    secondary_button_class: {
      control: {
        type: 'text',
      },
      defaultValue: {
        secondary_button_class: data.content.secondary_button_class,
      },
      description: 'Secondary button class',
      table: {
        defaultValue: {
          summary: data.content.secondary_button_class,
        },
        category: 'Structure',
      },
    },
    cookie_categories: {
      control: 'boolean',
      defaultValue: {
        cookie_categories: data.content.cookie_categories,
      },
      description: 'Cookie categories',
      table: {
        defaultValue: {
          summary: data.content.cookie_categories,
        },
        category: 'Structure',
      },
    },
    save_preferences_button_label: {
      control: {
        type: 'text',
      },
      defaultValue: {
        save_preferences_button_label:
          data.content.save_preferences_button_label,
      },
      description: 'Save preferences button label',
      table: {
        defaultValue: {
          summary: data.content.save_preferences_button_label,
        },
        category: 'Content',
      },
    },
    privacy_settings_tab_label: {
      control: 'boolean',
      defaultValue: {
        privacy_settings_tab_label: data.content.privacy_settings_tab_label,
      },
      description: 'Privacy settings tab label',
      table: {
        defaultValue: {
          summary: data.content.privacy_settings_tab_label,
        },
        category: 'Structure',
      },
    },
    withdraw_button_on_info_popup: {
      control: 'boolean',
      defaultValue: {
        withdraw_button_on_info_popup:
          data.content.withdraw_button_on_info_popup,
      },
      description: 'Withdraw button on info popup',
      table: {
        defaultValue: {
          summary: data.content.withdraw_button_on_info_popup,
        },
        category: 'Structure',
      },
    },
    method: {
      control: {
        type: 'text',
      },
      defaultValue: {
        method: data.content.method,
      },
      description: 'Method',
      table: {
        defaultValue: {
          summary: data.content.method,
        },
        category: 'Content',
      },
    },
    settings_tab_enabled: {
      control: 'boolean',
      defaultValue: {
        settings_tab_enabled: data.content.settings_tab_enabled,
      },
      description: 'Settings tab enabled',
      table: {
        defaultValue: {
          summary: data.content.settings_tab_enabled,
        },
        category: 'Structure',
      },
    },
  },
};

export const EUCookieWarning = (args) => (
  <div className="eu-cookie-compliance-popup-info-container">
    <div
      dangerouslySetInnerHTML={{
        __html: twigTemplate({
          ...args,
        }),
      }}
    />
  </div>
);

EUCookieWarning.args = {
  block_base_class: 'ds-eu-cookie-compliance-popup-info',
  block_blockname: 'block',
  block_modifiers: [],
  block_extra: [
    'bg-primary',
    'py-15',
    'text-center',
    'text-md-start',
  ],
  block_container_class: 'container',
  message: data.content.message,
  agree_button: data.content.agree_button,
  disagree_button: data.content.disagree_button,
  more_info_button: data.content.more_info_button,
  secondary_button_label: data.content.secondary_button_label,
  primary_button_class: data.content.primary_button_class,
  secondary_button_class: data.content.secondary_button_class,
  cookie_categories: data.content.cookie_categories,
  save_preferences_button_label: data.content.save_preferences_button_label,
  privacy_settings_tab_label: data.content.privacy_settings_tab_label,
  withdraw_button_on_info_popup: data.content.withdraw_button_on_info_popup,
  method: data.content.method,
  settings_tab_enabled: data.content.settings_tab_enabled,
  label: '',
};
