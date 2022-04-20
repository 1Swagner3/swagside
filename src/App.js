import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Navbar from './components/Navbar/navbar';
import HomePage from './components/HomePage/homePage';
import MusicianSelectScreen from './components/MusicianSelectScreen/musicianSelectScreen'
import DeveloperPage from './components/DeveloperPage/developerPage';
import TeacherPage from './components/TeacherPage/teacherPage';
import SicHatPage from './components/SichatPage/sichatPage';
import DrummerPage from './components/DrummerPage/drummerPage';
import WorldRecordPage from './components/WorldRecordPage/worldRecordPage';
import ContactPage from './components/ContactPage/contactPage';
import Footer from './components/Footer/footer';

function App() {
  return (
   <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/musician" element={<MusicianSelectScreen/>} />
        <Route path="/musician/sichat" element={<SicHatPage/>} />
        <Route path="/musician/drummer" element={<DrummerPage/>} />
        <Route path="/musician/worldrecord" element={<WorldRecordPage/>} />
        <Route path="/developer" element={<DeveloperPage/>} />
        <Route path="/teacher" element={<TeacherPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
      </Routes>
      <Footer/>
    </Router>
   </>
  );
}

export default App;
