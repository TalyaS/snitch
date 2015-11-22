class SnitchPreview extends React.Component {
  render() {
    return (
        <li className="snitch-preview">
          <h2 className="snitch-preview__body">{this.props.snitch.content}</h2>
        </li>
      );
  }
}