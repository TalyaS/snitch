class SnitchView extends React.Component {
  render() {
    return (
        <Panel className="snitch-view__body" key={this.props.key}>
          {this.props.snitch.content}
        </Panel>
      );
  }
}