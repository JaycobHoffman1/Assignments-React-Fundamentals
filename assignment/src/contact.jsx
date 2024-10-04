import React from "react";
// Task 3: Create a Contact Section
function Contact() {
    const divStyle = {
        margin: "50px"
    };
    const h2Style = {
        fontSize: "40px",
        fontFamily: "Arial, sans-serif",
    };
    const liStyle = {
        fontSize: "20px",
        fontFamily: "Arial, sans-serif"
    };
    return (
        <div style={divStyle}>
            <h2 style={h2Style}>Contact Me</h2>
            <ul>
                <li style={liStyle}><address>jaycobhoffman@gmail.com</address></li>
                <li style={liStyle}><a href="https://www.linkedin.com/in/jaycob-hoffman/">LinkedIn Profile</a></li>
            </ul>
        </div>
    );
}
export default Contact;