function About() {
  return (
    <section className="about-section" id="about">

      <div className="about-inner">

        <div className="about-visual">

          <div className="about-glow"></div>

          <div className="about-document">

            <div className="about-document-top">
              <span>PDF</span>
              <small>SAARTHI</small>
            </div>

            <div className="about-lines">
              <span className="line-large"></span>
              <span></span>
              <span></span>
              <span className="line-medium"></span>
              <span></span>
              <span></span>
            </div>

            <div className="about-ai">
              <span>✦</span>
              AI understands
            </div>

          </div>

        </div>


        <div className="about-content">

          <div className="section-label">
            ABOUT SAARTHI
          </div>

          <h2>
            Your document,
            <span>made understandable.</span>
          </h2>

          <p>
            Long reports, research papers and study material
            can contain the information you need — but finding
            it shouldn't feel like a search mission.
          </p>

          <p>
            PDF Saarthi is designed to make that interaction
            simpler. Upload your document, ask what you want
            to know, and get a clear answer grounded in the
            document.
          </p>


          <div className="about-points">

            <div>
              <span>01</span>
              <strong>Read</strong>
              <p>Understand the document.</p>
            </div>

            <div>
              <span>02</span>
              <strong>Ask</strong>
              <p>Ask questions naturally.</p>
            </div>

            <div>
              <span>03</span>
              <strong>Understand</strong>
              <p>Get the information you need.</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;