import { addons } from '@storybook/addons';

import emulsifyTheme from './emulsifyTheme';

addons.setConfig({
  isFullscreen: false,
  showNav: true,
  showPanel: false,
  panelPosition: 'bottom',
  enableShortcuts: true,
  showToolbar: true,
  theme: emulsifyTheme,
  selectedPanel: undefined,
  initialActive: 'sidebar',
  sidebar: {
    // showRoots: false,
    // collapsedRoots: ['docs', 'bootstrap', 'design-tokens', 'example'],
  },
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: false },
    eject: { hidden: false },
    copy: { hidden: false },
    fullscreen: { hidden: false },
  },
});
