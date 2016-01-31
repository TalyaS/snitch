class SignIn extends React.Component {
  constructor() {
    super();

    Store.listen( data => this.setState(
        { snitches: data.snitches,
          showAddSnitch: data.showAddSnitch }
      )
    );
  }

  render() {
    return (
      <div className="signin">
        <nav className="navbar navbar-fixed-top" role="navigation"></nav>
        <h1>Welcome to Snitch</h1>
        <h3>Snitch helps you to document your company's most important resource: the things that people say.</h3>
      </div>
    );
  }
}