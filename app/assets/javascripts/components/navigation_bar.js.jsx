class NavigationBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-fixed-top" role="navigation">
        <div className="navbar-collapse collapse">
        <ul className="nav navbar-nav navbar-left">
          <li>
            <a href="#">
              LOGO
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-pencil-square-o fa-3x"></i>
            </a>
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li>
            <a href="#">
              <i className="fa fa-child fa-3x"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-sign-out fa-3x"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
    );
  }
}