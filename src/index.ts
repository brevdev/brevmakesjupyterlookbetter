import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the brevmakesjupyterlookbetter extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'brevmakesjupyterlookbetter:plugin',
  description: "brev.dev's dark and light mode theme",
  autoStart: true,
  requires: [IThemeManager],
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('🤙🤙🤙');
    const style = 'brevmakesjupyterlookbetter/index.css';

    manager.register({
      name: 'brevmakesjupyterlookbetter',
      isLight: false,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default plugin;
