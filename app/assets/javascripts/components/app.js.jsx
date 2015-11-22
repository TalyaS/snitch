class App extends React.Component {
  render() {
    return (
      <div>
        <Snitches snitches={
          [
            {
              content: "I love horses best of all the animals"
            },
            {
              content: "I love horses, they're my friends"
            }
          ]
        }/>
      </div>
      );
  }
}