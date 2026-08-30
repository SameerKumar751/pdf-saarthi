function Features() {
  return (
    <section className="features-section" id="features">

      <div className="features-inner">

        <div className="features-heading">

          <div className="section-label">
            WHY PDF SAARTHI
          </div>

          <h2>
            Built around your
            <span>documents.</span>
          </h2>

          <p>
            Everything you need to understand a document
            without digging through pages yourself.
          </p>

        </div>


        <div className="features-grid">

          {/* Feature 1 */}

          <article className="feature-card feature-large">

            <div className="feature-icon">
              ✦
            </div>

            <div className="feature-number">
              01
            </div>

            <h3>
              Ask naturally
            </h3>

            <p>
              No complicated commands. Ask questions the
              same way you would ask another person.
            </p>

            <div className="feature-example">
              <span>?</span>
              "Summarize the main findings"
            </div>

          </article>


          {/* Feature 2 */}

          <article className="feature-card">

            <div className="feature-icon">
              ◈
            </div>

            <div className="feature-number">
              02
            </div>

            <h3>
              Answers from your PDF
            </h3>

            <p>
              Saarthi focuses on the information contained
              in your uploaded document.
            </p>

            <div className="feature-document-lines">
              <span></span>
              <span></span>
              <span></span>
            </div>

          </article>


          {/* Feature 3 */}

          <article className="feature-card">

            <div className="feature-icon">
              ≋
            </div>

            <div className="feature-number">
              03
            </div>

            <h3>
              Clear explanations
            </h3>

            <p>
              Get structured responses that are easier
              to read, understand and remember.
            </p>

            <div className="feature-answer">
              <span>✓</span>
              Clear & structured
            </div>

          </article>


          {/* Feature 4 */}

          <article className="feature-card feature-wide">

            <div>

              <div className="feature-icon">
                ⚡
              </div>

              <div className="feature-number">
                04
              </div>

              <h3>
                Simple document workflow
              </h3>

              <p>
                Upload once, ask multiple questions and
                explore the document at your own pace.
              </p>

            </div>

            <div className="feature-flow">

              <span>PDF</span>
              <b>→</b>
              <span>Question</span>
              <b>→</b>
              <span>Answer</span>

            </div>

          </article>

        </div>

      </div>

    </section>
  );
}

export default Features;