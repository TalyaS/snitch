const actions = Reflux.createActions([
  "addSnitch",
  "refreshSnitches"
]);

const Store = Reflux.createStore({
  listenables: actions,

  getInitialState: function(){
    return this.data = initialData;
  },

  onAddSnitch: function(newSnitch){
    reqwest({
      url: '/snitches',
      type: 'json',
      method: 'post',
      data: {content: newSnitch.content},
      success: (response) => {
        this.onRefreshSnitches();
      }
    })
  },

  onRefreshSnitches: function(){
    reqwest({
      url: '/snitches',
      type: 'json',
      method: 'get',
      success: (response) => {
        this.trigger(response);
      }
    })
  }
});