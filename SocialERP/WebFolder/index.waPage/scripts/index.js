
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var dataGrid1 = {};	// @dataGrid
// @endregion// @endlock

// eventHandlers// @lock

	dataGrid1.onRowDblClick = function dataGrid1_onRowDblClick (event)// @startlock
	{// @endlock
		// Add your code here
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("dataGrid1", "onRowDblClick", dataGrid1.onRowDblClick, "WAF");
// @endregion
};// @endlock
