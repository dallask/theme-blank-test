import lottieTemplate from './lottie/lottie.twig';

import lottieData from './lottie/lottie.yml';

// Lottie library.
import '@lottiefiles/lottie-player';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Animations' };

export const lottie = () => lottieTemplate(lottieData);
