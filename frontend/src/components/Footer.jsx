function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToHowItWorks = () => {
    document
      .getElementById('how-it-works')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToWorkspace = () => {
    document
      .getElementById('workspace')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">

      <div className="footer-inner">

        {/* Brand */}

        <div className="footer-brand">

          <button
            type="button"
            className="footer-logo"
            onClick={scrollToTop}
          >
            <span className="footer-logo-icon">✦</span>

            <span>
              <strong>PDF Saarthi</strong>
              <small>INTELLIGENT DOCUMENT COMPANION</small>
            </span>
          </button>

          <p>
            Your documents. Your questions.
            Clear answers.
          </p>

        </div>


        {/* Navigation */}

        <div className="footer-links">

          <div className="footer-column">

            <h4>Explore</h4>

            <button onClick={scrollToHowItWorks}>
              How it works
            </button>

            <button onClick={scrollToWorkspace}>
              Ask a question
            </button>

          </div>


          <div className="footer-column">

            <h4>Product</h4>

            <button onClick={scrollToWorkspace}>
              Upload PDF
            </button>

            <button onClick={scrollToWorkspace}>
              Ask PDF
            </button>

          </div>

        </div>

      </div>


      {/* Bottom */}

      <div className="footer-bottom">

        <span>
          © {new Date().getFullYear()} PDF Saarthi
        </span>

        <span>
          Built for better document understanding.
        </span>

        <button
          type="button"
          onClick={scrollToTop}
        >
          Back to top ↑
        </button>

      </div>

    </footer>
  );
}

export default Footer;