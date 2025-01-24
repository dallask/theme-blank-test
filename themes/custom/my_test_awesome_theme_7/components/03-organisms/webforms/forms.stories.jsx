import React from 'react';
import reactToHtml from '@degjs/storybook-decorator-react-to-html';

import contactTwig from './contact/contact.twig';
import requestARepTwig from './request_a_representative/request_a_representative.twig';
import questionnaireTwig from './questionnaire/questionnaire.twig';

import contactData from './contact/contact.yml';
import requestARepData from './request_a_representative/request_a_representative.yml';
import questionnaireData from './questionnaire/questionnaire.yml';

// Slick
import 'slick-carousel/slick/slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './questionnaire/questionnaire';

/**
 * Storybook Definition.
 */
export default {
  title: 'Organisms/Forms',
  decorators: [reactToHtml],
};

export const Contact = (args) => (
  <div
    dangerouslySetInnerHTML={{
      __html: contactTwig({
        ...args,
      }),
    }}
  />
);

Contact.args = {
  ...contactData,
};

export const requestARep = (args) => (
  <div
    dangerouslySetInnerHTML={{
      __html: requestARepTwig({
        ...args,
      }),
    }}
  />
);

requestARep.args = {
  ...requestARepData,
};

export const questionnaire = (args) => (
  <div
    dangerouslySetInnerHTML={{
      __html: questionnaireTwig({
        ...args,
      }),
    }}
  />
);

questionnaire.args = {
  ...questionnaireData,
};
