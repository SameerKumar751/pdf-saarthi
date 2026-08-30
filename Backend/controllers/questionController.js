const pdfService = require('../service/pdfService');
const aiService = require('../service/aiService');

async function askQuestion(req, res) {
  const requestStart = Date.now();

  console.log('\n========== ASK QUESTION ==========');
  console.log('Question received:', req.body);

  try {
    const { question } = req.body;

    if (!question || !question.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Question is required.',
      });
    }

    const cleanQuestion = question.trim();

    console.log('Finding relevant PDF content...');

    // Get only the relevant parts of the PDF
    const relevantPdfText =
      pdfService.getRelevantPdfText(cleanQuestion);

    if (!relevantPdfText) {
      return res.status(400).json({
        success: false,
        message: 'No PDF content found. Please upload a PDF first.',
      });
    }

    console.log(
      `Relevant PDF text length: ${relevantPdfText.length.toLocaleString()} characters`
    );

    console.log('Sending relevant content to AI...');

    const aiStart = Date.now();

    const answer = await aiService.getAnswerFromPdf(
      relevantPdfText,
      cleanQuestion
    );

    const aiTime = Date.now() - aiStart;

    console.log(`AI processing time: ${aiTime}ms`);

    const totalTime = Date.now() - requestStart;

    console.log(`Total request time: ${totalTime}ms`);
    console.log('==================================\n');

    return res.status(200).json({
      success: true,
      answer,
    });

  } catch (error) {
    console.error('Question error:', error.message);

    return res.status(500).json({
      success: false,
      message:
        error.message ||
        'Failed to get an answer from AI.',
    });
  }
}

module.exports = {
  askQuestion,
};