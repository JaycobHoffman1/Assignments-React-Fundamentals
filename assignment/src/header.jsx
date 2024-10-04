import React from "react";
import background from "./img/city.jpg";
// Task 1: Create a Header Section
function Header() {
    const headerContainerStyle = {
        display: "flex",
        alignItems: "center",
        width: "100%",
        height: "500px",
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat"
    };
    const headingContainerStyle = {
        display: "flex",
        justifyContent: "center",
        width: "100%",
        backgroundColor: "#000000",
        borderTop: "1px solid #00ffff",
        borderBottom: "1px solid #00ffff"
    };
    const h1Style = {
        fontFamily: "Arial, sans-serif",
        fontSize: "50px",
        color: "#ffffff"
    };
    return (
        <div style={headerContainerStyle}>
            <div style={headingContainerStyle}>
                <h1 style={h1Style}>Jaycob Hoffman</h1>
            </div>
        </div>
    );
}
export default Header;