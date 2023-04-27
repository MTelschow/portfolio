import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import './SocialMedia.css';

const SocialMedia = () => (
  <div className="app__social">
    <div className="Social">
      <BsGithub onClick={() => window.open('https://github.com/MTelschow', '_blank')} />
    </div>
    <div className="Social">
      <BsLinkedin onClick={() => window.open('https://www.linkedin.com/in/mathis-telschow-3138aa1ba/', '_blank')} />
    </div>
  </div>
);

export default SocialMedia;
