class SignIn extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="signin">
        <nav className="navbar navbar-fixed-top" role="navigation"></nav>
        <h1>Welcome to Snitch</h1>
        <h3>Snitch helps you to document your company's most important resource: the things that people say.</h3>
        <div id="google-signin-button"></div>
      </div>
    );
  }
}