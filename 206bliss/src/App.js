import './App.css';
import Nav from './components/Nav';
import BookingForm from './pages/BookingForm';
import MyCalendar from './components/MyCalendar';
import Events from './components/Events';

/////////////////////////////////////////TODO///////////////////////////////////////////////////////////////
// add routes
// add images and css
// add backend
// build data schema for booking form
// build data schema for calendar
// write about me page 
// write out the splash page and add css with serene images 
// add paralax for the main app page with images of beaches people doing yoga. CSS Color cheme in chat with olivia
// build a folder of images for the cards and the main page t display
// fix the build from folder for the DNS of the GITHUB and the GoDaddy to run the build from the proper folder instead of the CNAME?? 
////////////////////////////////////////TODO///////////////////////////////////////////////////////////////
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
