function QuestionBox({
  question,
  onQuestionChange,
  onAsk,
  isPdfUploaded,
  isLoading
}) {
  return (
    <section className="card">
      <h2>Ask a Question</h2>

      <p className="hint">
        {isPdfUploaded
          ? 'Type a question about your uploaded PDF'
          : 'Upload a PDF first to enable question'}
      </p>

      <div className="question-row">
       <input
          type="text"
          placeholder="What is this PDF about?"
          value={question}
          onChange={onQuestionChange}
          onKeyDown={(e) => {
          if (e.key === 'Enter' && !isLoading && question.trim()) {
        onAsk();
      }
  }}
  disabled={!isPdfUploaded || isLoading}
/>

        <button
          type="button"
          className="btn btn-secondary"
          onClick={onAsk}
          disabled={!isPdfUploaded || !question.trim() || isLoading}
        >
          {isLoading ? 'Loading...' : 'Ask Question'}
        </button>
      </div>
    </section>
  );
}

export default QuestionBox;