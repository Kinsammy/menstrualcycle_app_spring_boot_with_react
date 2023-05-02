import './App.css';
import MenstrualCycleForm from './components/MenstrualCycleForm';
// import MenstrualCycleInfo from './components/MenstrualCycleInfo';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<MenstrualCycleForm />} />
          {/* <Route exact path="/" element={<MenstrualCycleInfo result={result}/>} /> */}
        </Routes>
      </div>
    </Router>
     
  );
}

export default App;
