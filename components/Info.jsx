import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Info = () => {
    const handleEmailClick = () => {
    window.location.href = 'mailto:ayushsahu76@gmail.com';
  };

  const handleLinkedInClick = () => {
    window.location.href = 'https://www.linkedin.com/in/ayush-sahu-a7303a124/';
  };
    return (
        <div className='info'>
        <img src='https://drive.google.com/file/d/1GW6NC2XYw0MxnT268VPHINmiA8WtMK0R/view?usp=drive_link' alt="Profile" className="profile-image"/>
        <h1 className="name">Ayush Sahu</h1>
        <h3 className="job-title">MERN Stack Developer</h3>
        <div className="contact-buttons">
             <button className="email-button" onClick={handleEmailClick}>
              <FontAwesomeIcon icon={faEnvelope} />
              <span>Email</span>
              </button>
             <button className="linkedin-button" onClick={handleLinkedInClick}>
              <FontAwesomeIcon icon={faLinkedin} />
              <span>LinkedIn</span>
              </button>
        </div>
        </div>
    )    
}

export default Info