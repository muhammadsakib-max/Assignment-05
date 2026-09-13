import Logo from "../assets/logo-text.png";

// Footer component that renders the footer section of the application
const Footer = () => {
  return (
    <div className="footer-container max-sm:px-5">

      {/* Footer content - first part */}
      <footer className="footer sm:footer-horizontal bg-base-200  border-t border-gray-300 text-base-content py-10 lg:px-32">
        <aside>
          <img src={Logo} alt="Logo" />
          <p className="max-w-md py-2">
            Curated tools, technologies, and resources for developers building
            <br />
            modern software.
          </p>
          <div className="grid grid-flow-col gap-4">
            <a className="font-bold" href="https://github.com/muhammadsakib-max">
              GitHub
            </a>
            <a className="font-bold" >
              Twitter
            </a>
            <a className="font-bold">
              LinkedIn
            </a>
          </div>
        </aside>
        <nav>
          <h6 className="footer-title">PRODUCT</h6>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Technologies</a>
          <a className="link link-hover">Projects</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Careers</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
        </nav>
      </footer>

      {/* Footer content - second part */}
      <footer className="footer sm:footer-horizontal border-t  border-gray-300 bg-base-200 py-4 max-sm:place-items-center max-sm:text-center lg:px-32">
        <aside className="grid-flow-col items-center">
          <p>© {new Date().getFullYear()} - Dev Stack. All rights reserved.</p>
        </aside>
        <nav className="grid-flow-col gap-4 sm:place-self-center sm:justify-self-end">
          <a className="link link-hover">Privacy</a>
          <a className="link link-hover">Terms</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
