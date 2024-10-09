import React from "react";

import PhoneIcon from '../images/phone-icon.png'
import MailIcon from '../images/email-icon.png'

export default function Contact(props) {
  return (
    <div className="contact-card">
      <img src={props.img} alt="Jasper" />
      <h3>{props.title}</h3>
      <div className="info-group">
        <img src={PhoneIcon} className="phone-icon" alt="phone icon" />
        <p>{props.number}</p>
      </div>
      <div className="info-group">
        <img src={MailIcon} className="email-icon" alt="mail icon" />
        <p>{props.email}</p>
      </div>
    </div>
  );
}

/* example of using object destructing to make the code dynamic

import React from "react";

import PhoneIcon from '../images/phone-icon.png'
import MailIcon from '../images/email-icon.png'

export default function Contact({img, title, number, email}) {
  return (
    <div className="contact-card">
      <img src={img} alt="Jasper" />
      <h3>{title}</h3>
      <div className="info-group">
        <img src={PhoneIcon} className="phone-icon" alt="phone icon" />
        <p>{number}</p>
      </div>
      <div className="info-group">
        <img src={MailIcon} className="email-icon" alt="mail icon" />
        <p>{email}</p>
      </div>
    </div>
  );
}

*/