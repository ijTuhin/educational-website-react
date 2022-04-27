import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import StudentPanel from './components/StudentPanel/StudentPanel';

function App() {
  return (
    <div className='relative body'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/student-panel' element={<StudentPanel></StudentPanel>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;