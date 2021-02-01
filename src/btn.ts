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
				var activeCellIndex = 0;
				var wrapper: HTMLElement;
				console.log('TODO');

				const isInWrapper: boolean = p.content.activeCell.node.parentElement.classList.contains("wrapper");

				// check if activeCell is in a wrapper
				if (isInWrapper){
					activeCellIndex = Array.prototype.indexOf.call(p.content.node.children, p.content.activeCell.node.parentElement);
				}				
				else{
					activeCellIndex = Array.prototype.indexOf.call(p.content.node.children, p.content.activeCell.node);
				}

				var newCell = p.model.contentFactory.createCodeCell({})
				p.model.cells.insert(activeCellIndex+1, newCell);

				if (isInWrapper){
					wrapper = p.content.activeCell.node.parentElement;
				}
				else{
					wrapper = document.createElement('div');
					wrapper.classList.add('wrapper');
					wrapper.appendChild(p.content.activeCell.node);	
					p.content.node.insertBefore(wrapper, p.content.node.children[activeCellIndex]);
				}
				wrapper.appendChild(p.content.node.children[activeCellIndex+1]);

				// adjust width based on the number of subcells
				const width:number = 100/wrapper.children.length;
				for (var i=0; i<wrapper.children.length; i++){
					wrapper.children.item(i).setAttribute("style", "width:"+width.toString()+"%");
				};

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