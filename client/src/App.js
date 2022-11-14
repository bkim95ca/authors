import './App.css';
import {Link, Routes, Route, Navigate} from 'react-router-dom';
import Main from './component/Main';
import Create from './component/Create';
import OneAuthor from './component/OneAuthor';

function App() {
  return (
    <div className="App">
      <Routes>

        {/* Main Page */}
        <Route path='/home' element={<Main/>} />

        {/* Create Page */}
        <Route path='new' element={<Create/>} />

        {/* Edit Page */}
        <Route path='/:id' element={<OneAuthor/>} />

        {/* Error Page */}
        <Route path='*' element={<Navigate to="/pm" replace/>} />
      </Routes>
    </div>
  );
}

export default App;
