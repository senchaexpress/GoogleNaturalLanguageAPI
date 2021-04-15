Ext.define('GoogleNLPDemoApp.view.main.MainView', {
  xtype: 'mainview',
  controller: 'mainviewcontroller',
  extend: 'Ext.Panel',
  layout: 'vbox',
  items: [{
            xtype: 'fieldset',
            items: [
                {
                   xtype: 'textfield',
                                     label: 'Text Content',
                                     placeholder: 'Enter text for analysis',
                                     name: 'textContent',
                                     required: true,
                                     reference: 'ct'
                },
                {
                    xtype: 'button',
                                          text: 'analyze',
                                          handler: 'onAnalyzeClick'
                }
            ]
        },
 {
      xtype: 'reportgrid',
      title: 'Sentiment Analysis Report',
      bind: {
                store: '{nlpStore}'
            }
  }],
  viewModel: {
      stores: {
          nlpStore: {
              type: 'store',
              storeId: 'dStore',
              autoLoad: true,
              fields:[{
                  name: 'content',
                  mapping: 'text.content'
              },
              {
                  name: 'magnitude',
                  mapping: 'sentiment.magnitude'
              },
              {
                  name: 'score',
                  mapping: 'sentiment.score'
              }
              ],
              proxy: {
                  type: 'memory',
                  data: null,
                  reader: {
                      rootProperty: 'sentences'
                  }
              }
          }
      }
  },
  defaults: {
      flex: 1,
      margin: 16
  }
});
