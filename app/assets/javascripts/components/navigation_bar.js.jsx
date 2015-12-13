class NavigationBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
       
        <div className="navbar-center">
          <AddSnitch/>
        </div>
        <div className="navbar-left logo">SHUSHUSHU</div>
      </nav>
    );
  }
}