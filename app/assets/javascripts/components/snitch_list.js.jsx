class SnitchList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { snitches: this.props.snitches }
  }

  render() {
    return (
        <article className="snitch-list" >
          <ul>
            { this.state.snitches.map(s => <SnitchView snitch={s} key={s.id} />) }
          </ul>
        </article>
      );
  }
}