import React from 'react';
import { Button } from 'reactstrap';
import { socialLinks } from '../portfolio';

const SocialLinks = () => {
  return (
    <div className="btn-wrapper text-lg" style={{display: "flex", gap: "10px"}}>
      {socialLinks.url && (
        <Button
          style={{width: "50px", height: "50px", display: "flex", justifyContent: "center", alignItems: "center"}}
          className="btn-icon-only rounded-circle ml-1"
          color="white"
          rel="noopener"
          aria-label="URL"
          href={socialLinks.url}
          target="_blank"
        >
          <span className="btn-inner--icon">
            <i className="fa fa-link" />
          </span>
        </Button>
      )}
      {socialLinks.linkedin && (
        <Button
          style={{height: "50px", width: "50px", objectFit: "cover", display: "flex", justifyContent: "center", alignItems: "center"}}
          className="btn-icon-only rounded-circle ml-1"
          color="twitter"
          rel="noopener"
          aria-label="Linkedin"
          href={socialLinks.linkedin}
          target="_blank"
        >
          <span className="btn-inner--icon">
            <i className="fa fa-linkedin" />
          </span>
        </Button>
      )}
      {socialLinks.github && (
        <Button
          style={{height: "50px", width: "50px", objectFit: "cover", display: "flex", justifyContent: "center", alignItems: "center"}}
          className="btn-icon-only rounded-circle ml-1"
          color="github"
          href={socialLinks.github}
          rel="noopener"
          aria-label="Github"
          target="_blank"
        >
          <span className="btn-inner--icon">
            <i className="fa fa-whatsapp" />
          </span>
        </Button>
      )}
    </div>
  );
};

export default SocialLinks;
