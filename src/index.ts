import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';
import '../style/Jupyter-Dark.css';

/**
 * Initialization data for the brevmakesjupyterlookbetter extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'brevmakesjupyterlookbetter:plugin',
  description: "brev.dev's dark and light mode theme",
  autoStart: true,
  requires: [IThemeManager],
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log(
      'JupyterLab extension brevmakesjupyterlookbetter is activated!'
    );
    const style = 'brevmakesjupyterlookbetter/index.css';

    manager.register({
      name: 'brevmakesjupyterlookbetter',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default plugin;
