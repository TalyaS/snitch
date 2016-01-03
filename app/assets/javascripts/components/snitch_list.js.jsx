class SnitchList extends React.Component {
  render() {
    return (
        <article className="snitch-list" >
          { this.props.snitches.map(s => <SnitchView snitch={s} key={s.id} />) }
        </article>
      );
  }
}