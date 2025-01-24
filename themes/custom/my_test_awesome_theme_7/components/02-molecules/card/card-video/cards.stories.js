import cardVideo from './card-video.twig';

import cardVideoData from './card-video.yml';

import '../../../03-organisms/video/videoReact/videoReactGlobal';
import '../../../03-organisms/video/videoReact/videoReact';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Cards/Card Video' };

export const cardExamples = () => `
  <h3>Default Card Video</h3>
  <div class="mb-50 mt-30" style="max-width: 350px">
    ${cardVideo({
      ...cardVideoData,
      config: {
        ...cardVideoData.config,
      },
    })}
  </div>
`;
