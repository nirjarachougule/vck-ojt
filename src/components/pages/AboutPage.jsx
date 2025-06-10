import React from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

const Aboutpage = () => {
    return (
        
        <div style={{backgroundColor:"#52c7ca",minHeight:"90vh",padding:"2rem"}}>
            <Header/>
            <main>
                <div    
                style={{
                    maxWidth:"900px",
                    margin:"auto",
                    backgroundColor:"white",
                    padding:"1rem 2rem",
                    borderRadius:"8px",
                    height:"70vh",
                    overflow:"auto",
                }} >
                
            
                      <h1>ABOUT VIVEKANAND COLLAGE</h1>
                      <p>Vivekanand College stands as a beacon of knowledge and integrity, committed to delivering transformative
                         education since its inception in [Year of Establishment, e.g., 1980]. Located in the bustling heart of
                        [City/Area, e.g., Chembur, Mumbai], our college has consistently strived to uphold the highest standards 
                        of academic rigor and ethical values.</p>
                        <p>Our vision is to empower students with critical thinking skills, a global perspective, and a strong sense of social responsibility. We aim to nurture
                        individuals who are not only successful in their careers but also contributing members of society.</p>

                        <h2><b>Our Mission</b></h2>
                        <ul>
                            <li>To provide high-quality, accessible education across various disciplines.</li>
                            <li>To foster research, innovation, and creativity among students and faculty.</li>
                            <li>To cultivate a diverse and inclusive learning environment.</li>
                            <li>To instill strong ethical values and leadership qualities.</li>
                        </ul>
                        <h3><b>Our Values</b></h3>
                        <p>Integrity, Excellence, Innovation, Community, and Respect are the pillars upon which Vivekanand College is built.
                         We encourage open dialogue, intellectual curiosity, and a relentless pursuit of knowledge.</p>
                         <h4><b>Our History</b></h4>
                         <p>[Briefly describe the college's history - e.g., how it started, key milestones, growth over the years, famous alumni if any].
                            Our journey began with a vision to make quality education available to all, and we continue that legacy today.</p>

</div>
            </main>
            </div>

    )
}

export default Aboutpage