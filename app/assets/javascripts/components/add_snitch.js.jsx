class AddSnitch extends React.Component {
  constructor() {
    super();
    this.state = { newSnitchContent: "" }
  }

  addSnitch() {
    actions.addSnitch({ content: this.state.newSnitchContent });
    this.setState({ newSnitchContent: "" });
  }

  cancelAddSnitch() {
    actions.toggleShowAddSnitch(false);
  }

  render() {
    return (
      <div>
        <Modal show={ this.props.show } onHide={() => this.cancelAddSnitch()}>
          <Modal.Header closeButton>
            <Modal.Title>Add Snitch</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <textarea className="form-control"
              autoFocus
              value={this.state.newSnitchContent}
              onChange={ (event) => this.setState({newSnitchContent: event.target.value}) }>
            </textarea>
          </Modal.Body>
           <Modal.Footer>
            <Button id="submit-snitch" bsStyle="primary" onClick={() => this.addSnitch()}>Snitch it</Button>
            <Button id="cancel" onClick={() => this.cancelAddSnitch()}>Cancel</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}