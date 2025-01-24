import breadcrumb from './breadcrumbs/breadcrumbs.twig';
import inlineMenu from './inline/inline-menu.twig';
import mainMenu from './main-menu/main-menu.twig';
import socialMenu from './social-menu/social-menu.twig';
import languageSwitcherMenu from './languageSwitcher/languageSwitcher.twig';

import breadcrumbsData from './breadcrumbs/breadcrumbs.yml';
import inlineMenuData from './inline/inline-menu.yml';
import mainMenuData from './main-menu/main-menu.yml';
import socialMenuData from './social-menu/social-menu.yml';
import languageSwitcherMenuData from './languageSwitcher/languageSwitcher.yml';

import './main-menu/main-menu';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Menus' };

export const breadcrumbs = () => breadcrumb(breadcrumbsData);

export const inline = () => inlineMenu(inlineMenuData);

export const main = () => mainMenu(mainMenuData);

export const social = () => socialMenu(socialMenuData);

export const languageSwitcher = () =>
  languageSwitcherMenu(languageSwitcherMenuData);
