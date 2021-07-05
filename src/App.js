import React, { Component } from "react";
import "./App.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import { getEvents } from "./api";
import { extractLocations } from "./api";
import "./nprogress.css";

class App extends Component {
  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }
  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents =
        location === "all"
          ? events
          : events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents,
      });
    });
  };

  updateEventsCount = (eventCount) => {
    getEvents().then((events) => {
      const eventCountEvents = events.filter(
        (event) => event.eventCount === eventCount
      );
      this.setState({
        events: eventCountEvents,
      });
    });
  };

  state = {
    events: [],
    locations: [],
    eventsPerPage: [],
  };
  render() {
    return (
      <div className="App">
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
          numberOfEvents={this.state.numberOfEvents}
        />

        <NumberOfEvents
          eventsPerPage={this.state.eventsPerPage}
          updateEventsCount={this.updateEventsCount}
        />

        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
