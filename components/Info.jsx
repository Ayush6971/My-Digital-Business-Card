import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Info = () => {
    const handleEmailClick = () => {
    window.open('mailto:ayushsahu76@gmail.com');
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/ayush-sahu-a7303a124/');
  };
    return (
        <div className='info'>
        <img src='https://www.dropbox.com/s/84lac73lejd3su2/My_passport_pic.jpg?dl=0' alt="Profile" className="profile-image"/>
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