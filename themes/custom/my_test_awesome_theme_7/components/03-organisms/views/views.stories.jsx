import React from 'react';
import reactToHtml from '@degjs/storybook-decorator-react-to-html';

import userProfilesTwig from './user_profiles/user_profiles.twig';

import userProfilesData from './user_profiles/user_profiles.yml';

/**
 * Storybook Definition.
 */
export default {
  title: 'Organisms/Views',
  decorators: [reactToHtml],
};

export const userProfiles = (args) => (
  <div
    dangerouslySetInnerHTML={{
      __html: userProfilesTwig({
        ...args,
      }),
    }}
  />
);

userProfiles.args = {
  ...userProfilesData,
};

