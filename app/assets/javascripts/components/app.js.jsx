class App extends React.Component {
  constructor() {
    super();
    this.state = Store.getInitialState();
  }
  render() {
    return (
      <div>
        <button className="btn btn-danger" onClick={() => actions.addSnitch({content: "shoop shoop"})}>shoop</button>
        <SnitchList snitches={this.state.snitches}/>
      </div>
      );
  }
}