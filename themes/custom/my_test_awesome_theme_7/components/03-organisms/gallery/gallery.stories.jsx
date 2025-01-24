import React from 'react';
import reactToHtml from '@degjs/storybook-decorator-react-to-html';
import data from './gallery.yml';
import dataVideos from './gallery.videos.yml';
import templateTwig from './gallery.twig';
import templateVideosTwig from './gallery.videos.twig';
import docs from './README.mdx';

import './gallery';
import '../video/videoReact/videoReactGlobal';
import '../video/videoReact/videoReact';

export default {
  title: 'Organisms/Gallery',
  component: 'Gallery',
  parameters: {
    docs: {
      page: (() => docs)(),
      source: {
        code: data.docs.source.code,
        language: 'twig',
      },
    },
  },
  decorators: [reactToHtml],
};

export const ImagesGallery = (args) => (
  <div
    dangerouslySetInnerHTML={{
      __html: templateTwig({
        ...args,
      }),
    }}
  />
);

ImagesGallery.args = {
  gallery: data.gallery,
};

export const VideosGallery = (args) => (
  <div
    dangerouslySetInnerHTML={{
      __html: templateVideosTwig({
        ...args,
      }),
    }}
  />
);

VideosGallery.args = {
  gallery: dataVideos.gallery,
  element_modifiers: dataVideos.element_modifiers,
};
