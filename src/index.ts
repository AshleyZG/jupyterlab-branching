import {
  JupyterFrontEnd, JupyterFrontEndPlugin
} from '@jupyterlab/application';


/**
 * Initialization data for the jupyterlab-branching extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-branching',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jupyterlab-branching is activated!');
  }
};

export default extension;
