import React from 'react';

const EventItem = (props) => {
  let date = props.event.date;
  if (date[0] === '-') {
    date = 'BC' + ' ' + date.slice(1, date.length);
  }

  return (
    <div className='event'>
      {date} {props.event.description}
    </div>
  );
};

export default EventItem;
