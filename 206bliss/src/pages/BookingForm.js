import React, { useState } from 'react';

function BookingForm(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [budget, setBudget] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      name: name,
      email: email,
      destination: destination,
      startDate: startDate,
      endDate: endDate,
      budget: budget,
      numberOfPeople: numberOfPeople,
    };
    props.onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <label>
        Destination:
        <input
          type="text"
          value={destination}
          onChange={(event) => setDestination(event.target.value)}
        />
      </label>
      <label>
        Start date:
        <input
          type="date"
          value={startDate}
          onChange={(event) => setStartDate(event.target.value)}
        />
      </label>
      <label>
        End date:
        <input
          type="date"
          value={endDate}
          onChange={(event) => setEndDate(event.target.value)}
        />
      </label>
      <label>
        Budget for the Trip:
        <input
          type="number"
          value={Budget}
          onChange={(event) => setBudget(event.target.value)}
        />
      </label>
      <label>
        Number of people:
        <input
          type="number"
          value={numberOfPeople}
          onChange={(event) => setNumberOfPeople(event.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default BookingForm;
