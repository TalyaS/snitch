class App extends React.Component {
  constructor() {
    super();
    this.state = SnitchStore.getInitialState();
  }
  render() {
    return (
      <div>
        <SnitchList snitches={this.state.snitches}/>
      </div>
      );
  }
}