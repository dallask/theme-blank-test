import React from 'react';
import reactToHtml from '@degjs/storybook-decorator-react-to-html';
import data from './modal.yml';
import twigTemplate from './modal.twig';

import docs from './README.mdx';

export default {
  title: 'Molecules/modal',
  component: 'Modal',
  decorators: [reactToHtml],
  parameters: {
    docs: {
      page: (() => docs)(),
      source: {
        code: data.docs.source.code,
        language: 'twig',
      },
    },
  },
};

export const Modal = (args) => (
  <div
    dangerouslySetInnerHTML={{
      __html: twigTemplate({
        ...args,
      }),
    }}
  />
);

Modal.args = {
  modal__id: data.modal__id,
  modal__extra: data.modal__extra,
  modal_dialog__extra: data.modal_dialog__extra,
  modal_title: data.modal_title,
  modal_content: data.modal_content,
  modal_cancel_text: data.modal_cancel_text,
  modal_continue_text: data.modal_continue_text,
};
