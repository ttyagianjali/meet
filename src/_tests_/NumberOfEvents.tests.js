// import React from "react";
// import { shallow } from "enzyme";
// import NumberOfEvents from "../NumberOfEvents";

// describe("<NumberOfEvents /> component", () => {
//   let NumberOfEventsWrapper;

//   beforeAll(() => {
//     NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => {}} />);
//   });

//   test("render text input", () => {
//     expect(NumberOfEventsWrapper.find(".event-number-input")).toHaveLength(1);
//   });

//   test("renders text input correctly", () => {
//     const number = NumberOfEventsWrapper.state("numberOfEvents");
//     expect(
//       NumberOfEventsWrapper.find(".event-number-input").prop("value")
//     ).toBe(number);
//   });

//   test("change state when input changes", () => {
//     NumberOfEventsWrapper.setState({
//       numberOfEvents: 32,
//     });
//     const eventObject = { target: { value: 2 } };
//     NumberOfEventsWrapper.find(".event-number-input").simulate(
//       "change",
//       eventObject
//     );
//     expect(NumberOfEventsWrapper.state("numberOfEvents")).toBe(2);
//   });
// });


import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";
import { mockData } from "../mock-data";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(
      <NumberOfEvents updateEventsCount={() => {}} />
    );
  });

  test("render text input", () => {
    expect(NumberOfEventsWrapper.find(".number")).toHaveLength(1);
  });

  test("renders text input correctly", () => {
    const eventsPerPage = NumberOfEventsWrapper.state("eventsPerPage");
    expect(NumberOfEventsWrapper.find(".number").prop("value")).toBe(
      eventsPerPage
    );
  });

  test("change state when text input changes", () => {
    NumberOfEventsWrapper.setState({
      eventsPerPage: "32",
    });
    const eventObject = { target: { value: "32" } };
    NumberOfEventsWrapper.find(".number").simulate("change", eventObject);
    expect(NumberOfEventsWrapper.state("eventsPerPage")).toBe("32");
  });
});