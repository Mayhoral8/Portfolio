import Homepage from './homePage'
import Navbar from './navbar';
import ProjectList from './projects/projectList';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
     <Route path='/' element={<Homepage/>}/> 
     <Route path='/projects' element={<ProjectList/>}/> 
      </Routes>
    </div>
  );
}

export default App;
