import './App.css';
import Nav from './components/Nav';
import BookingForm from './pages/BookingForm';
import MyCalendar from './components/MyCalendar';
import Events from './components/Events';

function App() {
  const handleSubmit = (formData) => {
    console.log(formData); // or submit the form data to a server
  };
  return (
    <div className="App">
      <Nav />
      <BookingForm onSubmit={handleSubmit} />
      <MyCalendar Events={Events} />
    </div>
  );
}

export default App;
