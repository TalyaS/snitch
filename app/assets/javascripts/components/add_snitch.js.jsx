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
          className="form-control"
          value={this.state.newSnitchContent}
          onChange={ (event) => this.setState({newSnitchContent: event.target.value}) }>
        </textarea>
        <button className="btn btn-primary btn-add-new-snitch" onClick={ () => this.addSnitch() }>Snitch it</button>
      </div>
    );
  }
}