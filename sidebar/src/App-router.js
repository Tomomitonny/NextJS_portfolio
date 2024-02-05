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

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        {/* Linkを使用してAboutページへのリンクを作成 */}
        <Link to="/DeletePhotoModal">Go to DeletePhotoModal Page</Link>
        <br />
        {/* Linkを使用してContactページへのリンクを作成 */}
        <Link to="/contact">Go to Contact Page</Link>
      </nav>
    </div>
  );
};

function App() {
  return (

    <Router>
      <Routes>
        {/* ルートの指定とコンポーネントの指定 */}
        <Route path="/" element={<HomePage />} />
        <Route path="/DeletePhotoModal" element={<DeletePhotoModal />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
    
    // <div className="App">
    //   <HeaderNavUser />
    //   <InstructorProfileClassCard />
    //   <InstructorId />
    // </div>
  );
}

export default App;
