import React, { Component } from 'react';
import './static/style/index.css';
const Footer = () => {
  return (
    <div className="footer-container">
      <footer className="_footer">
        <div className="links-and-lang-container">
          <ul className="unstyled-list link-column">
            <li>
              <a href="">
                <span>Udemy Business</span>
              </a>
            </li>
            <li>
              <a href="">
                <span>Teach on Udemy</span>
              </a>
            </li>
            <li>
              <a href="">
                <span>Get the app</span>
              </a>
            </li>
            <li>
              <a href="">
                <span>About us</span>
              </a>
            </li>
            <li>
              <a href="">
                <span>Contact us</span>
              </a>
            </li>
          </ul>
          <ul className="unstyled-list link-column">
            <li>
              <a href="" className="">
                <span>Careers</span>
              </a>
            </li>
            <li>
              <a href="" className="">
                <span>Blog</span>
              </a>
            </li>
            <li>
              <a href=""> 
                <span>Help and Support</span>
              </a>
            </li>
            <li>
              <a href="">
                <span>Affiliate</span>
              </a>
            </li>
            <li>
              <a href="">
                <span>Investors</span>
              </a>
            </li>
          </ul>
          <ul className="unstyled-list link-column">
            <li>
              <a href="" className="">
                <span>Terms</span>
              </a>
            </li>
            <li>
              <a href="" className="">
                <span>Privacy policy</span>
              </a>
            </li>
            <li>
              <a href="">
                <span>Cookie setting</span>
              </a>
            </li>
            <li>
              <a href="">
                <span>Sitemap</span>
              </a>
            </li>
            <li>
              <a href="">
                <span>Accessibility statement</span>
              </a>
            </li>
          </ul>
        <div className="language-selector-container">
            <button type="button" className="lang-btn">
            <span className="fa-solid fa-globe"></span><span >English</span>
            </button>
        </div>
        </div>
        <div className="logo-and-copyright">
            <div className="udemy-logo">
                <img src="static/images/logo-udemy-inverted.svg" alt="udemy logo" />
            </div>
            <div className="copy-right-txt">
                © 2022 Udemy, Inc.
            </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
