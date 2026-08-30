import ReactMarkdown from 'react-markdown';

function Answer({ answer, error, isLoading }) {
  return (
    <section className="card answer-section">
      <h2>Answer</h2>

      {isLoading && (
        <div className="loading">
          Thinking about your question...
        </div>
      )}

      {error && (
        <p className="status error">
          {error}
        </p>
      )}

      {!isLoading && !error && answer && (
        <div className="answer-box">
          <ReactMarkdown>
            {answer}
          </ReactMarkdown>
        </div>
      )}

      {!isLoading && !error && !answer && (
        <p className="hint">
          Your answer will appear here after you ask a question.
        </p>
      )}
    </section>
  );
}

export default Answer;