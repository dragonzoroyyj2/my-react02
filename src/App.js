import {BrowserRouter, Routes, Route} from 'react-router-dom'

import CreateDay from './component/CreateDay';
import CreateWord from './component/CreateWord';
import Day from './component/Day';
import DayList from './component/DayList';
import EmptyPage from './component/EmptyPage';
import Header from './component/Header'
import TabelTest1 from './component/TabelTest1'
import TabelTest1Add from './component/TabelTest1Add'


function App() {
  return(
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Routes>
          <Route path="/" element={<DayList />} /> 
          <Route path="/day/:day" element={<Day />} /> 
          <Route path="/table_test1_add" element={<TabelTest1Add />} /> 
          <Route path="/table_test1" element={<TabelTest1 />} /> 
          <Route path="/create_word" element={<CreateWord />} /> 
          <Route path="/create_day" element={<CreateDay />} /> 
          <Route path="*" element={<EmptyPage />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
