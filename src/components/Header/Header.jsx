import React from "react";
import {Link } from "react-router-dom";


    const Header =()=> {
        return (
            <header>
                <nav>
                    <Link to="/homepage">HomePage</Link>
                    <Link to="/aboutpage">AboutPage</Link>
                    <Link to="/coursespage">CoursesPage</Link>
                    <Link to="/contactpage">ContactPage</Link>
                    <Link to="/admissionspage">AdmissionsPage</Link>
                    
                    </nav>
            </header>



        )
        
    }

export default Header