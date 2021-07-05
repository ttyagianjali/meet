import React, { Component } from "react";


class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({
      numberOfEvents: value,
    });
    this.props.updateNumberOfEvents(event.target.value);
  };

  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion,
    });

    this.props.updateEventsCount(suggestion);
  };

  render() {
    const numberOfEvents = this.state.numberOfEvents;
    return (
      <div className="numberOfEvents">
        <form>
          <label> Number of Events:</label>
          <input
            type="text"
            className="EventsNumber"
            value={numberOfEvents}
            onChange={(e) => this.handleInputChanged(e)}
          />
        </form>
      </div>
    );
  }
}
export default NumberOfEvents;