import './App.css';
import Nav from './components/Nav';
import Form from './pages/Form';
import Calendar from './Calendar';
import Events from './Events';

function App() {
  return (
    <div className="App">
      <Nav />
      <Form />
      <Calendar Events={Events} />
    </div>
  );
}

export default App;
