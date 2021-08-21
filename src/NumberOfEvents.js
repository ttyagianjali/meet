import React, { Component } from "react";
import {ErrorAlert} from './Alert';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({
      errorText: "",
      numberOfEvents: value,
    });
    this.props.updateNumberOfEvents(event.target.value);
  };

  render() {
    const numberOfEvents = this.state.numberOfEvents;
    return (
      <div className="numberOfEvents">
        <ErrorAlert text={this.props.errorText} />
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
