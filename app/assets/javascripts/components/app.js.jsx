class App extends React.Component {
  constructor() {
    super();
    this.state = Store.getInitialState();

    Store.listen( data => this.setState(
        { snitches: data.snitches,
          showAddSnitch: data.showAddSnitch }
      )
    );
  }

  render() {
    return (
      <div>
        <NavigationBar />
        <AddSnitch show={this.state.showAddSnitch} />
        <SnitchList snitches={this.state.snitches}/>
      </div>
    );
  }
}