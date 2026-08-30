import { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PdfUpload from './components/PdfUpload';
import QuestionBox from './components/QuestionBox';
import Answer from './components/Answer';
import Features from './components/Features';
import About from './components/About';
import Footer from './components/Footer';

const API_BASE = 'https://pdf-saarthi-backend.onrender.com/api';

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isPdfUploaded, setIsPdfUploaded] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState(null);

  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // ================= FILE CHANGE =================

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (!file) {
      setSelectedFile(null);
      return;
    }

    // Only allow PDF files
    if (file.type !== 'application/pdf') {
      setSelectedFile(null);

      setUploadStatus({
        type: 'error',
        message: 'Please select a PDF file.',
      });

      return;
    }

    setSelectedFile(file);
    setIsPdfUploaded(false);
    setUploadStatus(null);
    setAnswer('');
    setError('');
    setQuestion('');
  };


  // ================= UPLOAD PDF =================

  const handleUpload = async () => {
    if (!selectedFile) return;

    setIsUploading(true);
    setUploadStatus(null);
    setIsPdfUploaded(false);

    try {
      const formData = new FormData();

      formData.append('pdf', selectedFile);

      const response = await fetch(
        `${API_BASE}/pdf/upload`,
        {
          method: 'POST',
          body: formData,
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || 'Upload failed'
        );
      }

      setIsPdfUploaded(true);

      setUploadStatus({
        type: 'success',
        message:
          data.message ||
          'PDF uploaded successfully!',
      });

    } catch (err) {
      setIsPdfUploaded(false);

      setUploadStatus({
        type: 'error',
        message:
          err.message ||
          'Something went wrong',
      });

    } finally {
      setIsUploading(false);
    }
  };


  // ================= QUESTION =================

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };


  // ================= ASK AI =================

  const handleAsk = async () => {
    if (!question.trim() || !isPdfUploaded) {
      return;
    }

    setIsLoading(true);
    setAnswer('');
    setError('');

    try {
      const response = await fetch(
        `${API_BASE}/questions/ask`,
        {
          method: 'POST',

          headers: {
            'Content-Type': 'application/json',
          },

          body: JSON.stringify({
            question: question.trim(),
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message ||
          'Failed to get answer'
        );
      }

      setAnswer(data.answer);

    } catch (err) {
      setError(
        err.message ||
        'Something went wrong'
      );

    } finally {
      setIsLoading(false);
    }
  };


  // ================= UI =================

  return (
    <div className="app">

      <Navbar />

      {/* HERO */}
      <Hero />

      <section className="how-it-works" id="how-it-works">
  <div className="how-it-works-inner">

    <div className="section-label">
      HOW IT WORKS
    </div>

    <h2>
      From document to answer
      <span>in three simple steps.</span>
    </h2>

    <p className="section-description">
      Upload your document, ask what you want to know,
      and let Saarthi find the answer for you.
    </p>

    <div className="steps">

      <div className="step-card">
        <div className="step-number">01</div>

        <div className="step-icon">↑</div>

        <h3>Upload</h3>

        <p>
          Upload your PDF and let Saarthi
          understand what's inside.
        </p>
      </div>


      <div className="step-card">
        <div className="step-number">02</div>

        <div className="step-icon">?</div>

        <h3>Ask</h3>

        <p>
          Ask anything about your document
          in simple, natural language.
        </p>
      </div>


      <div className="step-card">
        <div className="step-number">03</div>

        <div className="step-icon">✦</div>

        <h3>Understand</h3>

        <p>
          Get clear answers based directly
          on the information in your PDF.
        </p>
      </div>

    </div>

  </div>
</section>


      {/* MAIN WORKSPACE */}

      <main
        className="container"
        id="workspace"
      >

        {/* ================= PDF UPLOAD ================= */}

        <PdfUpload
          selectedFile={selectedFile}
          onFileChange={handleFileChange}
          onUpload={handleUpload}
          uploadStatus={uploadStatus}
          isUploading={isUploading}
        />


        {/* ================= QUESTION ================= */}

        <QuestionBox
          question={question}
          onQuestionChange={handleQuestionChange}
          onAsk={handleAsk}
          isPdfUploaded={isPdfUploaded}
          isLoading={isLoading}
        />


        {/* ================= ANSWER ================= */}

        <Answer
          answer={answer}
          error={error}
          isLoading={isLoading}
        />

      </main>
      <Features />
      <About />
      <Footer />
      <Analytics />

    </div>
  );
}

export default App;