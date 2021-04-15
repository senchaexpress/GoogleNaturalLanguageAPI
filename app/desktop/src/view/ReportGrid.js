Ext.define('GoogleNLPDemoApp.view.ReportGrid', {
extend: 'Ext.grid.Grid',
xtype: 'reportgrid',
columns: [{
    type: 'column',
    text: 'Content',
    dataIndex: 'content',
    width: 200
}, {
    text: 'Magnitude',
    dataIndex: 'magnitude'
}, {
    text: 'Score',
    dataIndex: 'score'
}]
});