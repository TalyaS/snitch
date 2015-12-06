class SnitchView extends React.Component {
  render() {
    return (
        <li className="snitch-view" key={this.props.key}>
          <h2 className="snitch-view__body">{this.props.snitch.content}</h2>
        </li>
      );
  }
}