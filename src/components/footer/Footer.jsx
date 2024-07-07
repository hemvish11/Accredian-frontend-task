import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">accredian</h2>
          <p>Credentials that matter</p>
        </div>
        <div>
          <h3 className="font-bold mb-4">Programs</h3>
          <ul>
            <li>Data Science & AI</li>
            <li>Product Management</li>
            <li>Business Analytics</li>
            <li>Digital Transformation</li>
            <li>Business Management</li>
            <li>Project Management</li>
            <li>Strategy & Leadership</li>
            <li>Senior Management</li>
            <li>Fintech</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Contact Us</h3>
          <ul>
            <li>Email us (For Data Science Queries): admissions@accredian.com</li>
            <li>Email us (For Product Management Queries): pmp@accredian.com</li>
            <li>Data Science Admission Helpline: +91 9076952392 (9 AM - 7 PM)</li>
            <li>Product Management Admission Helpline: +91 9625811095</li>
            <li>Enrolled Student Helpline: +91 9769322507</li>
            <li>Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Accredian</h3>
          <ul>
            <li>About</li>
            <li>Career</li>
            <li>Blog</li>
            <li>Admission Policy</li>
            <li>Referral Policy</li>
            <li>Privacy Policy</li>
            <li>Terms Of Service</li>
            <li>Master FAQs</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 flex justify-between items-center">
        <p>© 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved</p>
        <div className="flex space-x-4">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin text-white"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <i className="fab fa-twitter text-white"></i>
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <i className="fab fa-facebook text-white"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="fab fa-instagram text-white"></i>
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <i className="fab fa-youtube text-white"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
