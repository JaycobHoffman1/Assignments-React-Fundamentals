import React from "react";
// Task 2: Create an About Section
function About() {
    const divStyle = {
        margin: "50px"
    };
    const h2Style = {
        fontSize: "40px",
        fontFamily: "Arial, sans-serif",
    };
    const pStyle = {
        fontSize: "20px",
        fontFamily: "Arial, sans-serif"
    };
    return (
        <div style={divStyle}>
            <h2 style={h2Style}>About Me</h2>
            <p style={pStyle}>I am an aspiring software developer seeking a remote entry-level position or internship to gain experience. 
            I am particularly interested in AI within a software development context and how we as developers can harness it to our advantage. 
            I aim to be a part of the new generation of young professionals in the software development industry, enhancing companies' ability to 
            create, market, and sell products through elevated, innovative, and efficient business technology. I look forward to what my future 
            as a software developer holds!</p>
        </div>
    );
}
export default About;