import React from 'react';
import EventItem from './EventItem.jsx';

const Events = (props) => {
  return (
    <div>
      <h1>Results</h1>
      <div className='eventContainer'>
        {props.events.map((event, index) => {
          return <EventItem event={event} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Events;
