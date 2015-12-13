class App extends React.Component {
  constructor() {
    super();
    this.state = Store.getInitialState();
    Store.listen( snitches => this.setState({snitches: snitches}));
  }

  render() {
    return (
      <div>
        <NavigationBar />
        <SnitchList snitches={this.state.snitches}/>
      </div>
    );
  }
}