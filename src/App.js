
import './App.css';
import Landing from './landing';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Game from './Game';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/gameplay' element={<Game/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
