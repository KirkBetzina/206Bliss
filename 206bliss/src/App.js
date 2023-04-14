import './App.css';
import Nav from './components/Nav';
import Form from './pages/Form';
import MyCalendar from './Calendar';
import events from './events';

function App() {
  return (
    <div className="App">
      <Nav />
      <Form />
      <MyCalendar events={events} />
    </div>
  );
}

export default App;
