import {
  JupyterFrontEnd, JupyterFrontEndPlugin
} from '@jupyterlab/application';
import {SubDivideCellButtonExtension} from './btn';


/**
 * Initialization data for the jupyterlab-branching extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-branching',
  autoStart: true,
  // requires: [ INotebookTracker],
  activate: (app: JupyterFrontEnd) => {
    // console.log('JupyterLab extension jupyterlab-branching is activated!');
    let buttonExtension = new SubDivideCellButtonExtension();
    app.docRegistry.addWidgetExtension('Notebook', buttonExtension);


  }
};

export default extension;
