import React from "react";
import '../styles/footer.css'

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="copyright-container">
        <img
          id="footer-logo"
          src="images/glizzy_logo.png"
          className="github-picture"
        ></img>
        <p>© 2022 GlizzyShop, Inc.</p>
      </div>

      <div className="person-container">
        <p>
          Gustavo Fonseca - Developer
          <div className="image-container">
            <a href="https://github.com/Ahaboo">
              <img src="images/githubLogo.png" className="github-picture"></img>
            </a>
            <a href="https://www.linkedin.com/in/gustavo-f-558691126/">
              <img
                src="images/linkedinLogo.png"
                className="linkedin-picture"
              ></img>
            </a>
          </div>
        </p>
      </div>

      <div className="person-container">
        <p>
          Nahar Saias - Developer
          <div className="image-container">
            <a href="https://github.com/nahar122">
              <img src="images/githubLogo.png" className="github-picture"></img>
            </a>
            <a href="https://www.linkedin.com/in/nahar-saias/">
              <img
                src="images/linkedinLogo.png"
                className="linkedin-picture"
              ></img>
            </a>
          </div>
        </p>
      </div>
    </div>
  );
}
