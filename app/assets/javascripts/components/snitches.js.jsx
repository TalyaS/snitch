class Snitches extends React.Component {
  constructor(props) {
    super(props);
    this.state = { snitches: this.props.snitches }
  }
  render() {
    return (
        <aside className="snitches-list">
          <ul>
            { this.state.snitches.map(s => <SnitchPreview snitch={s} />) }
          </ul>
        </aside>
      );
  }
}