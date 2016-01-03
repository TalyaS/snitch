class AddSnitch extends React.Component {
  constructor() {
    super();
    this.state = { newSnitchContent: "", shouldDisableSubmit: true }
  }

  addSnitch() {
    actions.addSnitch({ content: this.state.newSnitchContent });
  }

  cancelAddSnitch() {
    actions.toggleShowAddSnitch(false);
  }

  setNewContent(newSnitchContent) {
    this.setState({
      newSnitchContent: newSnitchContent,
      shouldDisableSubmit: (newSnitchContent.length == 0)
    });
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
              onChange={ (event) => this.setNewContent(event.target.value) }>
            </textarea>
          </Modal.Body>
           <Modal.Footer>
            <Button id="submit-snitch" bsStyle="primary" disabled={this.state.shouldDisableSubmit} onClick={() => this.addSnitch()}>Snitch it</Button>
            <Button id="cancel" onClick={() => this.cancelAddSnitch()}>Cancel</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}