// Footer.js

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto">
        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://facebook.com/yourprofile"
            className="text-white hover:text-blue-500"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://twitter.com/yourprofile"
            className="text-white hover:text-blue-400"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://instagram.com/yourprofile"
            className="text-white hover:text-pink-500"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://linkedin.com/yourprofile"
            className="text-white hover:text-blue-700"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>

        {/* Legal Links */}
        <div className="flex justify-center space-x-4 mb-6">
          <a
            href="/privacy-policy"
            className="text-gray-400 hover:text-white"
            aria-label="Privacy Policy"
          >
            Privacy Policy
          </a>
          <a
            href="/terms-of-service"
            className="text-gray-400 hover:text-white"
            aria-label="Terms of Service"
          >
            Terms of Service
          </a>
        </div>

        {/* Contact Information */}
        <div className="text-center mb-6">
          <p>
            Contact us at:
            <a
              href="mailto:support@yourwebsite.com"
              className="text-white hover:underline"
            >
              {" "}
              support@yourwebsite.com
            </a>
          </p>
          <p>
            Phone:
            <a href="tel:+1234567890" className="text-white hover:underline">
              {" "}
              +1 (234) 567-890
            </a>
          </p>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-gray-500">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
