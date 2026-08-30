const fs = require('fs');
const { PDFParse } = require('pdf-parse');

let storedPdfText = '';
let pdfChunks = [];

const CHUNK_SIZE = 2500;
const CHUNK_OVERLAP = 300;

async function extractTextFromPdf(filePath) {
  const fileBuffer = fs.readFileSync(filePath);

  const parser = new PDFParse({
    data: fileBuffer,
  });

  try {
    const result = await parser.getText();

    if (!result.text || !result.text.trim()) {
      throw new Error('Could not extract text from this PDF.');
    }

    return result.text;
  } finally {
    await parser.destroy();
  }
}

function createChunks(text) {
  const chunks = [];

  let start = 0;

  while (start < text.length) {
    const end = Math.min(
      start + CHUNK_SIZE,
      text.length
    );

    const chunk = text
      .slice(start, end)
      .trim();

    if (chunk) {
      chunks.push(chunk);
    }

    // Stop after reaching the end of the document
    if (end === text.length) {
      break;
    }

    start = end - CHUNK_OVERLAP;
  }

  return chunks;
}

function storePdfText(text) {
  storedPdfText = text;

  pdfChunks = createChunks(text);

  console.log(
    `PDF stored: ${text.length.toLocaleString()} characters`
  );

  console.log(
    `PDF split into ${pdfChunks.length} chunks`
  );
}

function getStoredPdfText() {
  return storedPdfText;
}

function getRelevantPdfText(question) {
  if (!pdfChunks.length) {
    return '';
  }

  const words = question
    .toLowerCase()
    .replace(/[^\w\s]/g, '')
    .split(/\s+/)
    .filter(word => word.length > 2);

  const scoredChunks = pdfChunks.map((chunk, index) => {
    const lowerChunk = chunk.toLowerCase();

    let score = 0;

    for (const word of words) {
      if (lowerChunk.includes(word)) {
        score++;
      }
    }

    return {
      index,
      chunk,
      score,
    };
  });

  scoredChunks.sort((a, b) => b.score - a.score);

  const TOP_CHUNKS = 5;

  const selectedChunks = scoredChunks
    .slice(0, TOP_CHUNKS)
    .sort((a, b) => a.index - b.index);

  const relevantText = selectedChunks
    .map(item => item.chunk)
    .join('\n\n---\n\n');

  console.log(
    `Retrieved ${selectedChunks.length} relevant chunks`
  );

  console.log(
    `Relevant text length: ${relevantText.length.toLocaleString()} characters`
  );

  return relevantText;
}

module.exports = {
  extractTextFromPdf,
  storePdfText,
  getStoredPdfText,
  getRelevantPdfText,
};