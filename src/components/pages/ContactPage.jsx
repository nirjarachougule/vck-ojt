import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";

const contactpage = () => {
    return (
    
        <div style={{backgroundColor:'powderblue'}}className=".mainStyle">
            <h1 className=".h1Style">CONTACT US</h1>
            <p style={{color:"black",textAlign:"center"}}>
                We'd love to hear from you! Whether you have questions about admissions, programs, or campus life, our team is here to help.
            </p>
            <h2>General Enquiries</h2>
            <p><strong>Vivekanand College Main Campus</strong><br />
            [Your College Full Address Here, e.g., Mahatma Gandhi Road, Chembur, Mumbai, Maharashtra 400071]india
            <p>Phone: **+91 12345 67890**<br />
            Email:<a href="mailto:**info@vivekanandcollege.edu**">info@vivekanandcollege.edu</a><br />
            Office Hours: Monday - Friday, 9:00 AM - 5:00 PM IST</p> 

            <h1>Admissions Office</h1>
            <p>For all admission-related queries regarding undergraduate or postgraduate programs:</p><br />
            Phone: +91 98765 43210<br/>
            Email:<Link to="">admissions@vivekanandcollege.edu</Link>
           </p>

           <h2>Student Support Services</h2>
           <p>
            For current student support, academic advising, or general assistance:<br/>
            Phone: +91 87654 32109<br/>
            Email: <a href="mailto:studentsupport@vivekanandcollege.edu">"studentsupport@vivekanandcollege.edu</a>
           </p>

           <h3>Find Us on the Map</h3>

           <h4>Send Us a Message</h4>
           <p>[A contact form with fields for Name, Email, Subject, Message can be added here.]</p>
        </div>

    )
}

export default contactpage;