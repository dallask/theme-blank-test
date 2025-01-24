import audio from './audio.twig';

import audioBuzzsproutData from './audio-buzzsprout.yml';
import audioHTML5Data from './audio-html5.yml';

import './buzzsprout_audio';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Audios' };

export const buzzsprout = () => audio(audioBuzzsproutData);
export const html5 = () => audio(audioHTML5Data);
