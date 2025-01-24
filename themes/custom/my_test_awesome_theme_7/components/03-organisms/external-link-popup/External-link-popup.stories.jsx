import React from 'react';
import reactToHtml from '@degjs/storybook-decorator-react-to-html';
import data from './external-link-popup.yml';
import twigTemplate from './external-link-popup.twig';

import docs from './README.mdx';

export default {
  title: 'Organisms/External Link Popup',
  component: 'External Link Popup',
  decorators: [
    (Story) => (
      <div>
        <button
          type="button"
          className="btn btn-primary external-link-popup-trigger-button"
          data-bs-toggle="modal"
          data-bs-target={`#${data.content.modalID}`}
          data-test="modal-btn"
        >
          Open External Link Popup Modal
        </button>
        <Story />
      </div>
    ),
    reactToHtml,
  ],
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

export const ExternalLinkPopup = (args) => (
  <div
    dangerouslySetInnerHTML={{
      __html: twigTemplate({
        ...args,
      }),
    }}
  />
);

ExternalLinkPopup.args = {
  label: ' ',
  modalID: data.content.modalID,
  modalLabelID: data.content.modalLabelID,
  modalBodyID: data.content.modalBodyID,
  modalCloseButtonID: data.content.modalCloseButtonID,
  modalContinueButtonID: data.content.modalContinueButtonID,
  modalTitle: data.content.modalTitle,
  modalContent: data.content.modalContent,
  modalCloseButtonText: data.content.modalCloseButtonText,
  modalContinueButtonText: data.content.modalContinueButtonText,
};
