import { useRef, useState } from 'react';

function PdfUpload({
  selectedFile,
  onFileChange,
  onUpload,
  uploadStatus,
  isUploading
}) {
  const fileInputRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const openFilePicker = () => {
    if (!isUploading) {
      fileInputRef.current?.click();
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);

    if (isUploading) return;

    const file = event.dataTransfer.files?.[0];

    if (!file) return;

    onFileChange({
      target: {
        files: [file],
      },
    });
  };

  const handleDragOver = (event) => {
    event.preventDefault();

    if (!isUploading) {
      setIsDragging(true);
    }
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    setIsDragging(false);
  };

  const formatFileSize = (bytes) => {
    if (bytes < 1024) {
      return `${bytes} B`;
    }

    if (bytes < 1024 * 1024) {
      return `${(bytes / 1024).toFixed(1)} KB`;
    }

    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  return (
    <section className="card upload-card" id="workspace">

      {/* ================= HEADER ================= */}

      <div className="section-heading">

        <div>
          <div className="section-label">
            BEGIN YOUR JOURNEY
          </div>

          <h2>Upload your document</h2>

          <p className="hint">
            Give Saarthi a PDF and start exploring its contents.
          </p>
        </div>

        <div className="section-symbol">
          ✦
        </div>

      </div>


      {/* ================= UPLOAD GRID ================= */}

      <div className="upload-grid">

        {/* LEFT INFO */}

        <div className="upload-info">

          <div className="upload-info-icon">
            ✦
          </div>

          <h3>
            Start with your document
          </h3>

          <p>
            Upload a PDF and ask Saarthi anything about
            the information inside it.
          </p>

          <div className="upload-meta">
            <span>PDF only</span>
            <span>Maximum 10 MB</span>
          </div>

        </div>


        {/* RIGHT DROP ZONE */}

        <div
          className={`drop-zone ${
            isDragging ? 'dragging' : ''
          } ${selectedFile ? 'has-file' : ''}`}
          onClick={openFilePicker}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >

          <input
            ref={fileInputRef}
            type="file"
            accept="application/pdf,.pdf"
            onChange={onFileChange}
            disabled={isUploading}
            hidden
          />


          {!selectedFile ? (

            <div className="drop-content">

              <div className="pdf-icon">
                <span>PDF</span>
              </div>

              <h3>
                Drop your PDF here
              </h3>

              <p>
                or <span>browse from your computer</span>
              </p>

              <small>
                Drag & drop your document here
              </small>

            </div>

          ) : (

            <div className="selected-file">

              <div className="pdf-icon selected">
                <span>PDF</span>
              </div>

              <div className="selected-file-info">

                <h3>
                  {selectedFile.name}
                </h3>

                <p>
                  {formatFileSize(selectedFile.size)}
                </p>

              </div>

              <div className="file-ready">
                ✓ Ready
              </div>

            </div>

          )}

        </div>

      </div>


      {/* ================= ACTION ================= */}

      <div className="upload-action">

        <div className="upload-note">
          <span>✦</span>

          {selectedFile
            ? 'Your document is ready to be processed.'
            : 'Your document stays private to this session.'
          }
        </div>


        <button
          type="button"
          className="btn btn-primary upload-button"
          onClick={onUpload}
          disabled={!selectedFile || isUploading}
        >

          {isUploading ? (
            <>
              <span className="button-spinner"></span>
              Processing...
            </>
          ) : (
            <>
              Upload PDF
              <span className="button-arrow">→</span>
            </>
          )}

        </button>

      </div>


      {/* ================= STATUS ================= */}

      {uploadStatus && (
        <div className={`status ${uploadStatus.type}`}>

          <span className="status-icon">
            {uploadStatus.type === 'success'
              ? '✓'
              : '!'
            }
          </span>

          <span>
            {uploadStatus.message}
          </span>

        </div>
      )}

    </section>
  );
}

export default PdfUpload;