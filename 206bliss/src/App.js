import './App.css';
import Nav from './components/Nav';
import Form from './pages/Form';
import Calendar from './Calendar';
import Events from './Events';

function App() {
  const handleSubmit = (formData) => {
    console.log(formData); // or submit the form data to a server
  };
  return (
    <div className="App">
      <Nav />
      <BookingForm onSubmit={handleSubmit} />
      <Calendar Events={Events} />
    </div>
  );
}

export default App;
