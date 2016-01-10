class SnitchView extends React.Component {
  render() {
    return (
        <Panel className="snitch-view__body" key={this.props.key}>
          // line breaks are saved in DB as '\n' and thus are not displayed as new lines. we
          // couldn't figure out how to include ActionView::Helpers::TextHelper in react and the
          // next best thing is using a gem called react-simple-format which takes years to install
          {this.props.snitch.content}
        </Panel>
      );
  }
}