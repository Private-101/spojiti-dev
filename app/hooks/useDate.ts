import React from 'react';

export default useDate() {
// Returns the event's timestamp as the number of milliseconds measured relative to the time origin.
  const timestamp = new Date()
  const fullDate = 

  // Gets the year, using local time. 
  const fullYear = fullDate.getFullYear();
  // Gets the day-of-the-month, using local time.
  const dayOfMonth = fullDate.getDate();
  // Gets the month, using local time. 
  const month = fullDate.getMonth();
  // Gets the day of the week, using local time.
  const day = fullDate.getDay();
  // Gets the hours in a date, using local time. 
  const hours = fullDate.getHours();
  // Gets the minutes of a Date object, using local time. 
  const minutes = fullDate.getMinutes();
  // Gets the seconds of a Date object, using local time. 
  const seconds = fullDate.getSeconds();
  // Gets the milliseconds of a Date, using local time. 
  const miliseconds = fullDate.getMilliseconds();
}