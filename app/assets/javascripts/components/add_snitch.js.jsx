class AddSnitch extends React.Component {
  constructor() {
    super();
    this.state = { newSnitchContent: "" }
  }

  addSnitch() {
    actions.addSnitch({ content: this.state.newSnitchContent });
    this.setState({ newSnitchContent: "" });
  }

  render() {
    return (
      <div>
        <textarea 
          value={this.state.newSnitchContent}
          onChange={ (event) => this.setState({newSnitchContent: event.target.value}) }>
        </textarea>
        <button className="btn btn-primary" onClick={ () => this.addSnitch() }>Snitch it</button>
      </div>
    );
  }
}