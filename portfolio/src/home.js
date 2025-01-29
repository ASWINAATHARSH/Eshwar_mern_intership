import React from 'react';
import img from './img1.jpg';
import linkedinLogo from './logo1.jpg'; // Add the LinkedIn logo image
import instagramLogo from './logo2.jpg'; // Add the Instagram logo image

export const Home = () => {
    const linkedinLink = 'https://www.linkedin.com/in/aswin-aatharsh-j-ai-ml-244661322/';
    const instagramLink = 'https://www.instagram.com/your-profile';

    return (
        <div className="home">
            <div className="content">
                <h1 className="hello">HELLO!</h1>
                <h2 className="profilename">I Am Aswin Aatharsh J</h2>
                <p className="profiledetails">
                    A passionate student at <strong>Sri Eshwar College of Engineering</strong>.<br />
                    My expertise is in <strong>Full Stack Development</strong>.
                </p>
                <div className="links">
                    <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
                        <img src={linkedinLogo} alt="LinkedIn" className="logo" />
                    </a>
                    <a href={instagramLink} target="_blank" rel="noopener noreferrer">
                        <img src={instagramLogo} alt="Instagram" className="logo" />
                    </a>
                </div>
            </div>
            <div className="image-section">
                <img src={img} alt="Aswin Aatharsh" className="profileimg" />
            </div>
        </div>
    );
};

export default Home;
