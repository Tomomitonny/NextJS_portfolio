import logo from './logo.svg';
import './App.css';
import {SideBar} from './sidebar';
import {LessonClassListingCard} from './LessonClassListingCard/LessonClassListingCard';
import {CardTag} from './CardTag/CardTag';
import { HeaderNavUser } from './HeaderNavUser/HeaderNavUser';
import { Banner } from './Banner/Banner';
import { InstructorProfileClassCard } from './InstructorProfileClassCard/InstructorProfileClassCard';
import { InstructorId } from './pages/instructor-profile/instructor_id';


import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';

import DeletePhotoModal from './AboutPage';
import ContactPage from './ContactPage';


function App() {

  
  return (
    
    <div className="App">
      <Banner text='poooooooo' />
      {/* <HeaderNavUser />
      <InstructorProfileClassCard />
      <InstructorId /> */}
    </div>
  );
}

export default App;
