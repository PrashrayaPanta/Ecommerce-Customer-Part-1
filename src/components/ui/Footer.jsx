import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-white pt-12 pb-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center sm:text-left">
              <a
                href="index.html"
                className="text-2xl font-righteous text-gray-300 hover:text-white"
              >
                E-Commerce
              </a>
              <address className="mt-4 text-gray-400">
                221B Baker Street
                <br />
                London, England
              </address>
              <div className="mt-4 space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-pinterest-p"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>

            <div className="lg:col-span-2">
              <h4 className="text-lg font-semibold mb-4">Who are we?</h4>
              <p className="text-gray-400 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                imperdiet vel ligula vel sodales. Aenean vel ullamcorper purus,
                ac pharetra arcu. Nam enim velit, ultricies eu orci nec, aliquam
                efficitur sem. Quisque in sapien a sem vestibulum volutpat at eu
                nibh.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <form>
                <input
                  type="email"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded mb-4 text-white placeholder-gray-400 focus:outline-none focus:border-gray-600"
                  placeholder="Enter your email..."
                  required
                />
                <button className="w-full py-2 border border-white text-white hover:bg-white hover:text-gray-900 transition-colors rounded">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
