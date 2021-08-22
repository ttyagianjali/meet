import React, { Component } from "react";
import "./App.css";
import EventList from "./EventList";
import NumberOfEvents from "./NumberOfEvents";
import CitySearch from "./CitySearch";
import { getEvents } from "./api";
import { NetworkAlert } from "./Alert";
import { extractLocations } from "./api";


class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    currentCity: "all",
  };

  updateEvents = (location, numberOfEvents) => {
    getEvents().then((events) => {
      const locationEvents =
        location === "all"
          ? events.slice(0, numberOfEvents)
          : events.filter((event) => event.location === location);
      if (this.mounted) {
        this.setState({
          events: locationEvents.slice(0, numberOfEvents),
          currentCity: location,
          //locations: [location],
        });
      }
    });
  };

  //I this function will update tbe number of events of app.state fom <NumberOfEvents>
  updateNumberOfEvents(eventNumber) {
    this.setState({ numberOfEvents: eventNumber });
    const { currentCity } = this.state;
    this.updateEvents(currentCity, eventNumber);
  }

  componentDidMount() {
    const { numberOfEvents } = this.state;
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({
          events: events.slice(0, numberOfEvents),
          locations: extractLocations(events),
          
        });
        if (!navigator.onLine) {
          this.setState({ networkText: <div className="networkNotification">'Network error, the events you are viewing may be out of date. To make sure you are viewing the latest information, make sure you are connected to the internet'</div> });
          console.log("offline mode");
        } else {
          this.setState({ networkText: '' });
        }
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    const { networkText } = this.state;
    return (
      <div className="App">
        <h1>MEET APP</h1>
        <div>
          <NetworkAlert text={networkText} />
        </div>
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
          numberOfEvents={this.state.numberOfEvents}
        />
        <NumberOfEvents
          updateNumberOfEvents={(e) => this.updateNumberOfEvents(e)}
        />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
