import checkbox from './checkbox/checkbox.twig';
import radio from './radio/radio.twig';
import select from './select/select.twig';
import textfields from './textfields/textfields.twig';
import fieldset from './fieldset/fieldset.twig';
import captcha from './captcha/captcha.twig';

import checkboxData from './checkbox/checkbox.yml';
import radioData from './radio/radio.yml';
import selectOptionsData from './select/select.yml';
import textfieldsData from './textfields/textfields.yml';
import fieldsetData from './fieldset/fieldset.yml';
import captchaData from './captcha/captcha.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Forms' };

export const checkboxes = () => checkbox(checkboxData);

export const radioButtons = () => radio(radioData);

export const selectDropdowns = () => select(selectOptionsData);

export const textfieldsExamples = () => textfields(textfieldsData);

export const fieldsetExamples = () => fieldset(fieldsetData);

export const captchaExamples = () => captcha(captchaData);
