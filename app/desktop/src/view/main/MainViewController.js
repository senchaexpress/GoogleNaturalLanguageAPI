Ext.define('GoogleNLPDemoApp.view.main.MainViewController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.mainviewcontroller',

  onAnalyzeClick: function (button) {
      txtToSend = this.lookupReference('ct').getValue();
      console.log('value:{}',txtToSend);
      gapi.load('client', this.sendRQ);
    },

    sendRQ: function(){
      //modified from https://gist.github.com/MarkEdmondson1234/ff857ef8c8e851d08c67bf057f4cc4e3
        gapi.client.init({
                  'apiKey': 'YOUR_API_KEY',
                  'discoveryDocs': ['https://language.googleapis.com/$discovery/rest?version=v1beta1']
                }).then(function() {
                  return gapi.client.language.documents.analyzeSentiment({
                    'document': {
                              'type': 'PLAIN_TEXT',
                              'content': txtToSend
                           }
                  });
                }).then(function(resp) {
                  
                  var analysisResponse = resp;
                   var data = resp.result;
                  console.log(resp.result);
                  var store = Ext.data.StoreManager.lookup('dStore');
                  console.log('dStore:{}',store);
                  store.getProxy().data = data;
                  store.reload();  
                }, function(reason) {
                  console.log('Error: ' + reason.result.error.message);
                });
    }
});

var txtToSend = null;
