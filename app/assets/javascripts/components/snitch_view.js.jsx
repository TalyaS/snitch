class SnitchView extends React.Component {
  render() {
    return (
        <li className="snitch-view" key={this.props.key}>
          <h2 className="snitch-view__body">{this.props.snitch.content}</h2>
          <p className="snitch-view__body">{this.props.snitch.created_at}</p>
        </li>
      );
  }
}