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
				var p = panel;
				console.log('TODO');

				var tmpDiv = document.createElement('div');
				tmpDiv.classList.add('wrapper');
				var cell1 = p.model.contentFactory.createCodeCell({});				
				var cell2 = p.model.contentFactory.createCodeCell({});				
				var cell3 = p.model.contentFactory.createCodeCell({});	
							
				p.model.cells.push(cell1);
				p.model.cells.push(cell2);
				p.model.cells.push(cell3);
				p.content.node.lastElementChild.setAttribute("style", "width: 30%");
				tmpDiv.appendChild(p.content.node.lastElementChild);
				p.content.node.lastElementChild.setAttribute("style", "width: 30%");
				tmpDiv.appendChild(p.content.node.lastElementChild);
				p.content.node.lastElementChild.setAttribute("style", "width: 30%");
				tmpDiv.appendChild(p.content.node.lastElementChild);

				p.content.node.appendChild(tmpDiv);
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
		panel.toolbar.addItem('runAllCells', button);
		
		// The ToolbarButton class implements `IDisposable`, so the
		// button *is* the extension for the purposes of this method.
		return button;
    }
}

// export SubDivideCellButtonExtension; 