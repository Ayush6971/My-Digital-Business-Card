import React from "react";
import { Link } from "react-router-dom";

const Footer = () =>{
    return (
        <div className="footer">
        <div className="social-icons">
         <a href="https://twitter.com/SahuAyushsahu76" target="_blank" rel="noopener noreferrer">
         <i className="fab fa-twitter"></i>
         </a>
         <a href="https://www.facebook.com/ayush.sahu.12/" target="_blank" rel="noopener noreferrer">
         <i className="fab fa-facebook"></i>
         </a>
         <a href="https://www.instagram.com/sahu_ayush/" target="_blank" rel="noopener noreferrer">
         <i className="fab fa-instagram"></i>
         </a>
         <a href="https://github.com/Ayush6971" target="_blank" rel="noopener noreferrer">
         <i className="fab fa-github"></i>
         </a>
        </div>
        </div>
    )
}

export default Footer