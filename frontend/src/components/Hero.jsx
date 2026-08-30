function Hero() {
  const scrollToWorkspace = () => {
    document
      .getElementById('workspace')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToHowItWorks = () => {
    document
      .getElementById('how-it-works')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section" id="top">

      <div className="hero-content">

        <div className="hero-kicker">
          <span className="hero-kicker-line"></span>
          DOCUMENT INTELLIGENCE
          <span className="hero-kicker-line"></span>
        </div>

        <h1>
          Ask your documents
          <span>anything.</span>
        </h1>

        <p className="hero-description">
          Upload a PDF and ask questions in plain language.
          Saarthi finds the relevant information and turns it
          into clear, easy-to-understand answers.
        </p>

        <div className="hero-actions">

          <button
            type="button"
            className="hero-primary"
            onClick={scrollToWorkspace}
          >
            Start with a PDF
            <span>→</span>
          </button>

          <button
            type="button"
            className="hero-secondary"
            onClick={scrollToHowItWorks}
          >
            See how it works
            <span>▷</span>
          </button>

        </div>

      </div>


      {/* Animated Document Visualization */}

      <div className="hero-visual">

        <div className="hero-orbit orbit-one"></div>
        <div className="hero-orbit orbit-two"></div>


        {/* PDF Card */}

        <div className="floating-card pdf-preview">

          <div className="pdf-preview-icon">
            <span>PDF</span>
          </div>

          <div className="pdf-preview-info">
            <strong>Research Paper.pdf</strong>
            <small>24 pages · 1.8 MB</small>
          </div>

          <div className="ready-dot">
            ✓
          </div>

        </div>


        {/* Question Card */}

        <div className="floating-card question-preview">

          <div className="question-icon">
            ?
          </div>

          <p>
            What are the key findings
            of this research?
          </p>

          <div className="question-arrow">
            →
          </div>

        </div>


        {/* AI Answer Card */}

        <div className="floating-card answer-preview">

          <div className="answer-preview-heading">
            <span>✦</span>
            AI Answer
          </div>

          <div className="answer-line long"></div>
          <div className="answer-line medium"></div>
          <div className="answer-line short"></div>

          <div className="answer-points">
            <span></span>
            <span></span>
            <span></span>
          </div>

        </div>


        {/* Decorative nodes */}

        <span className="hero-node node-one"></span>
        <span className="hero-node node-two"></span>
        <span className="hero-node node-three"></span>

      </div>

    </section>
  );
}

export default Hero;