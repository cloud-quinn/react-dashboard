import React, { Component } from 'react';

function Pilot(props) {
  return (
    <div className="pilot">
      <h2>{props.pilot.title}</h2>
      <p>{props.pilot.startDate} to {props.pilot.endDate}</p>
      <p>{props.pilot.ratings} ratings </p>
      <p>{props.pilot.shares} shares </p>
    </div>
  );
}

class Pilots extends Component {
  render() {
    var pilots = [{ id: 'dummypilot', title: 'A Dummy Pilot', startDate: '1st January 2017', endDate: '31st December 2017', ratings: 12, shares: 9 },
                  { id: 'vrpilot', title: 'A VR Pilot', startDate: '6th June 2017', endDate: '12th December 2017', ratings: 25, shares: 18 }];
    return (
      <div className="container pilots">
        <h1>Pilots</h1>
        {pilots.map((pilot, i) =>
         <Pilot pilot={pilot} key={pilot.id} />
        )}
        <p><a href='/'>Home</a></p>
      </div>
    );
  }
}

export default Pilots;
