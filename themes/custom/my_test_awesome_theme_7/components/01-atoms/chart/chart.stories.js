import chart from './chart.twig';

import dataVertical from './chart.vertical.yml';
import dataHorizontal from './chart.horizontal.yml';

import '@base/05-libraries/gsap/gsap.min';
import '@base/05-libraries/gsap/ScrollTrigger.min';
import './chart';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Chart' };

export const verticalChart = () => chart(dataVertical);
export const horizontalChart = () => chart(dataHorizontal);
