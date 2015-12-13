class SnitchList extends React.Component {
  render() {
    return (
        <article className="snitch-list" >
          <ul>
            { this.props.snitches.map(s => <SnitchView snitch={s} key={s.id} />) }
          </ul>
        </article>
      );
  }
}