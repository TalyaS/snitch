const actions = Reflux.createActions([
  "showAddSnitch",
  "addSnitch",
  "refreshSnitches"
]);

const Store = Reflux.createStore({
  listenables: actions,

  getInitialState: function(){
    return this.data = {
      snitches: initialData.snitches,
      showAddSnitch: false
    };
  },

  onAddSnitch: function(newSnitch){
    reqwest({
      url: '/snitches',
      type: 'json',
      method: 'post',
      data: {content: newSnitch.content},
      success: (response) => {
        this.data.showAddSnitch = false;
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
        this.data.snitches = response;
        this.trigger(this.data);
      }
    })
  },

  onShowAddSnitch: function(){
    this.data.showAddSnitch = true;
    this.trigger(this.data);
  }
});