import { Route, BrowserRouter as Router, Routes } from "react-router-dom";



import ContactPage from "./pages/ContactPage";
import '/src/styles/Pages.css';
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import AdmissionPage from "./pages/AdmissionPage";
import ChatbotComponent from "./components/Chatbot/ChatbotComponent";
import DeveloperInfoPopup from "./components/DeveloperInfo/DeveloperInfoPopup";
import { useState } from "react";
const App = () => {
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
    return(
      <div>
        <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Sonali Jadhav"
          studentPhotoUrl="/images/jadhav.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/admission" element={<AdmissionPage/>}/>
            <Route path="/courses" element={<CoursesPage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
          </Routes>
          <ChatbotComponent/>
        </Router>
      </div>
    )
}
export default App;