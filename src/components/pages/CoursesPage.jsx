import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";

const CoursesPage = () => {
    return (
        <div style={{backgroundColor:"#52c7ca",minHeight:"90vh",padding:"2rem"}}>
            <div 
            style={{
                maxWidth:"900px",
                margin:"auto",
                backgroundColor:"white",
                padding:"1rem 2rem",
                borderRadius:"8px",
                boxShadow:"0 0 5px rgba(0,0,0,0.2)",
                height:"70vh",
                overflow:"auto",
            }}>
                <h1><b>Our Academic Programs</b></h1>
                <p>Vivekanand College offers a comprehensive range of undergraduate and postgraduate programs designed to equip students with the knowledge and skills demanded by today's dynamic global landscape. 
                Our curriculum is regularly updated to reflect industry trends and academic advancements.</p>
                <h2><i>Discover Campus Life</i></h2>
                <video src="./collage3.mp4" controls></video>

                <div>
                    <h2 style={{fontWeight:"700",fontSize:"1.5rem",marginBottom:"0.75rem"}}>
                        undergraduate programs (UG)
                    </h2>
                    <ul>
                        <li>
                            <strong>Bachrlor os science(B.Sc.)</strong>
                            <ul>
                                <li>Computer Science (3 years)</li>
                                <li>Information Technology (3 years)</li>
                                <li>Biotechnology (3 years)</li>
                            </ul>
                        </li>
                    </ul>
                    <li>
                        <strong>Bachelor of Commerce (B.Com)</strong>
                        <ul>
                            <li>Accounting & Finance (3 years)</li>
                            <li>Banking & Insurance (3 years)</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Bachelor of Arts (B.A.)</strong>
                        <ul>
                            <li>English Literature (3 years)</li>
                            <li>Psychology (3 years)</li>
                        </ul>
                    </li>
                    <h2 style={{fontWeight:"700",fontSize:"1.5rem",marginTop:"2rem",marginBottom:"0.75rem"}}>
                        Postgraduation programs (PG)
                    </h2>
                    <ul>
                        <li>
                            <strong>Master of Science (M.Sc.)</strong>
                            <ul>
                                <li>Computer Science (2 years)</li>
                                <li>Information Technology (2 years)</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Master of Commerce (M.Com) (2 years)</strong>
                        </li>
                        <li>
                            <strong>Master of Arts (M.A.) (2 years)</strong>
                        </li>
                    </ul>
                        
                    <h2>Program Details & Fee Structure (Annual)</h2>
                    <table>
                        <thead>
                        <tr style={{ backgroundColor:'#f2f2f2'}}>
                        <th>Program Type</th>
                        <th>Course Name</th>
                        <th>Duration</th>
                        <th>Annual Fee (INR)</th>
                        <th>Eligibility</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>UG</td>
                                <td>B.Sc. Computer Science</td>
                                <td>3 Years</td>
                                <td>₹ 85,000</td>
                                <td>10+2 with PCM (50%)</td>
                            </tr>
                            <tr>
                                <td>UG</td>
                                <td>B.Com. Accounting & Finance</td>
                                <td>3 Years</td>
                                <td>₹ 70,000</td>
                                <td>10+2 Commerce (45%)</td>
                            </tr>
                            <tr>
                                <td>PG</td>
                                <td>M.Sc. Information Technology</td>
                                <td>2 Years</td>
                                <td>₹ 95,000</td>
                                <td>B.Sc. IT/CS (50%)</td>
                            </tr>
                        </tbody> 
                        </table>
                        <h2>Specialized & Vocational Courses</h2>
                        <p style={{color:'#555'}}>
                            In addition to traditional degree programs, we offer various certificate and diploma courses in areas like Digital Marketing, Web Development,
                            Data Analytics, and Soft Skills Development, providing specialized training for career enhancement.
                        </p>
                        <p>Have questions about a specific course?</p>
                        <Link to='/contactpage'><button className='.btmstyle'>INQURIE ABOUT COURSRS</button></Link>
                        </div>
            </div>
        </div>
    )
} 

export default CoursesPage