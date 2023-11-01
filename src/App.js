import Homepage from './homePage'
import Navbar from './navbar';
import ProjectList from './projects/projectList';
import Footer from './footer';
import Contact from './contact/contact';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
     <Route path='/' element={<Homepage/>}/> 
     <Route path='/projects' element={<ProjectList/>}/> 
     <Route path='/contact' element={<Contact/>}/> 
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
