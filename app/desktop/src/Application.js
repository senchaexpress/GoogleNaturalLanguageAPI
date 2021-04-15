Ext.define('GoogleNLPDemoApp.Application', {
  extend: 'Ext.app.Application',
  name: 'GoogleNLPDemoApp',
  requires: ['GoogleNLPDemoApp.*'],

  launch: function () {
    Ext.Viewport.add([{xtype: 'mainview'}])
  },

  onAppUpdate: function () {
    Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
      function (choice) {
        if (choice === 'yes') {
          window.location.reload()
        }
      }
    )
  }
})
