import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; 

const sections = [
  {
    title: "Creator",
    items: ["Alejandro", "Velandia", "Machado"],
  },
  {
    title: "Tecnologies",
    items: ["bootstrap", "bootstrap-icons", "Freepick"],
  },
  {
    title: "Company",
    items: ["SENA", "Centro", "Industria", "Construccion"],
  },
  {
    title: "Friends",
    items: ["Brandon", "Cesar", "Jean"],
  },
];

const items = [
  {
    name: "Facebook",
    icon: "bi bi-facebook",
    link: "https://www.facebook.com/",
  },
  {
    name: "Instagram",
    icon: "bi bi-instagram",
    link: "https://www.instagram.com/",
  },
  {
    name: "Twitter",
    icon: "bi bi-twitter",
    link: "https://twitter.com/",
  },
  {
    name: "Twitch",
    icon: "bi bi-twitch",
    link: "https://www.twitch.tv/",
  },
  {
    name: "Github",
    icon: "bi bi-github",
    link: "https://www.github.com/",
  },
];

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5 mt-5" id="footer">
      <div className="container">
        <div className="row">
          {sections.map((section, index) => (
            <div key={index} className="col-md-3 col-sm-6">
              <h5 className="text-uppercase">{section.title}</h5>
              <ul className="list-unstyled">
                {section.items.map((item, idx) => (
                  <li key={idx} className="mb-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <hr className="border-light" />
        <div className="d-flex justify-content-center gap-3 mt-3">
          {items.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-light fs-4"
            >
              <i className={social.icon}></i>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
