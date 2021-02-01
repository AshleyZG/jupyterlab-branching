import {
    NotebookPanel, INotebookModel//, NotebookActions
  } from '@jupyterlab/notebook';

import {
    DocumentRegistry
  } from '@jupyterlab/docregistry';

import {
    IDisposable
  } from '@phosphor/disposable';
import {
    ToolbarButton
  } from '@jupyterlab/apputils';
import { 
    listIcon 
  } from '@jupyterlab/ui-components';


export
	class SubDivideCellButtonExtension implements DocumentRegistry.IWidgetExtension<NotebookPanel, INotebookModel> {
    createNew(panel: NotebookPanel, context: DocumentRegistry.IContext<INotebookModel>): IDisposable{

		let subDivideCell = (panel: NotebookPanel)=>{
			let subDivideCell_fn = ()=>{
				console.log('TODO');
			}
			return subDivideCell_fn;
		}

    	// Create the toolbar button 
        let button = new ToolbarButton({
			className: 'runAllCellsButton',
			icon: listIcon,
			onClick: subDivideCell(panel),
			tooltip: 'Subdivide cell horizontally'
		});
      
		// Add the toolbar button to the notebook
		panel.toolbar.insertItem(11, 'runAllCells', button);
		
		// The ToolbarButton class implements `IDisposable`, so the
		// button *is* the extension for the purposes of this method.
		return button;
    }
}

// export SubDivideCellButtonExtension; 