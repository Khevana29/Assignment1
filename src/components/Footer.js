import App from "../App";
import './Footer.css';


function Footer() {
    return (
      <footer className="footer">
        <div className="footer-content">
          <p> &copy; 2023 Your Website. All rights reserved.</p>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </footer>
    );
  }
  export default Footer;