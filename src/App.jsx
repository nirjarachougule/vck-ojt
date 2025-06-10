import React from "react";
import {BrowserRouter as Router, Route ,Routes} from 'react-router-dom'
import Homepage from "./components/pages/Homepage";
import Aboutpage from "./components/pages/AboutPage";
import CoursesPage from "./components/pages/CoursesPage";
import Contactpage from "./components/pages/ContactPage";
import Admissionpage from "./components/pages/AdmissionsPage";

const App = () => {
  return(
    <div className="App">
      <Router>
        <Routes>
          <Route path="/homepage" element={<Homepage />}/>
          <Route path="/aboutpage" element={<Aboutpage />}/> 
          <Route path="/coursespage" element={<CoursesPage />}/>
          <Route path="/contactpage" element={<Contactpage/>} />  
          <Route path="/admissionspage" element={<Admissionpage/>}/>    
          
          </Routes>
      </Router>
    </div>
  )
}

export default App