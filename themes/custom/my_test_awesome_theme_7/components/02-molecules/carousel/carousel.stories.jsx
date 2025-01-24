import React from 'react';
import reactToHtml from '@degjs/storybook-decorator-react-to-html';

// Slick
import 'slick-carousel/slick/slick.js';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import templateSlickTwig from './carousel.slick.twig';
import templateSlickCardTwig from './carousel.slick.card.twig';
import templateBSTwig from './carousel.bs.twig';
import data from './carousel.yml';
import dataCard from './carousel.slick.card.yml';
import docs from './README.mdx';

import './carousel';

export default {
  title: 'Molecules/Carousel',
  component: 'Carousel',
  parameters: {
    docs: {
      inlineStories: false,
      page: (() => docs)(),
      source: {
        code: data.docs.source.code,
        language: 'twig',
      },
    },
  },
  decorators: [reactToHtml],
};

const TwigTemplateSlick = (args) => (
  <div dangerouslySetInnerHTML={{
    __html: templateSlickTwig({
      ...args,
    }),
  }}/>
);

const TwigTemplateSlickCard = (args) => (
  <div style={{width: 400}}>
    <div dangerouslySetInnerHTML={{
      __html: templateSlickCardTwig({
        ...args,
      }),
    }}/>
  </div>
);

const TwigTemplateBS = (args) => (
  <div dangerouslySetInnerHTML={{
    __html: templateBSTwig({
      ...args,
    }),
  }}/>
);

const argsCommon = {
  paragraph_base_class: 'carousel-slick',
  paragraph_blockname: '',
  paragraph_modifiers: [],
  carousel: data.carousel,
  paragraph_extra: [],
  carousel_options: data.carousel_options,
};

export const CarouselSlick = TwigTemplateSlick.bind({});

CarouselSlick.args = argsCommon;

export const CarouselBS = TwigTemplateBS.bind({});

CarouselBS.args = {
  ...argsCommon,
  paragraph_base_class: 'carousel-bs',
  carousel_indicators: true,
  carousel_arrows: true,
  carousel_dark: false,
  carousel_options_bs: data.carousel_options_bs,
};

export const CarouselSlickCard = TwigTemplateSlickCard.bind({});

CarouselSlickCard.args = {
  ...argsCommon,
  carousel: dataCard.carousel,
  carousel_options: dataCard.carousel_options,
};
