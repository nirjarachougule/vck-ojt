
import React from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";


const Homepage = () => {
    return (
    <div style={{backgroundColor:"#52c7ca",minHeight:"90vh",fontFamily:"Arial,sans-serif"}}>
        <div style={{backgroundColor:'#007bff',padding:'10px 20px',color:'white',disply:'flex',justifyContent:'space-between'}}></div>
        <Header/>
        <main>
            <div className="overlay">     
            <h1><b><center>Welcome to Vivekanand College!</center></b></h1>
            <div style={{disply:'flex',gap:'20px'}}>
                <Link to ="/homepage" style={{color:"white"}}>HOME</Link>
                <Link To="/aboutpage" style={{color:"white"}}>ABOUT</Link>
            </div>
            
            <h2>Your journey to excellence starts here.</h2>
            <Link to='/admissionspage'> <button className="apply-btn">APPLY NOW</button></Link>

            
            <p> 
                **Vivekanand College is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development.
                 Established in [Year of Establishment, e.g., 1980], we have proudly served generations of students, empowering them 
                 to achieve their full potential.
            </p>
            <p>
                At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks.
                Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique 
                ecosystem where curiosity thrives and future leaders are shaped.
            </p>
            <h2><b>Why Choose Vivekanand College?</b></h2>
            <ul>
                <li>**Legacy of Excellence:** Decades of commitment to quality education.</li>
                <li>**Experienced Faculty:** Learn from renowned experts and passionate educators.</li>
                <li>**Modern Facilities:** Well-equipped labs, expansive library, and comfortable campus.</li>
                <li>**Holistic Development:** Focus on co-curricular activities, sports, and community service.</li>
                <li>**Strong Placements:** Excellent career opportunities with leading companies.</li>
            </ul>
            <h3><b>Campus Life & Facilities</b></h3>
            <img src="campus.jpg"></img>
            <img src="students 2.jpeg"></img>
            <p>Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.</p>
      
        <Link to='/coursespage'><button>EXPLORE COURSES</button></Link>
            </div>
        </main>
    </div>
    )
}



export default Homepage