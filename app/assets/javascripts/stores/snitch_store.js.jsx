const SnitchStore = Reflux.createStore({
  getInitialState: function(){
    return this.data = initialData;
  }
});