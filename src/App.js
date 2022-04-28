import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import StudentPanel from './components/StudentPanel/StudentPanel';

function App() {
  return (
    <div className='relative body'>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/student-panel' element={<StudentPanel></StudentPanel>}></Route>
        <Route path='/student-login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;