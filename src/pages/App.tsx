import { Routes, Route } from 'react-router-dom';
import GlobalStyle from '../components/GlobalStyle';
import Header from '../components/Header';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import ProjectPage from './ProjectPage';

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/projects' element={<ProjectPage />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
