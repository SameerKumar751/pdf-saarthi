const fs = require('fs');
const pdfService = require('../service/pdfService');

async function uploadPdf(req, res) {
    try {
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: 'No PDF File uploaded. Please send a file with field name "pdf".',
            });
        }

        const extractedText = await pdfService.extractTextFromPdf(req.file.path);

        pdfService.storePdfText(extractedText);

        fs.unlink(req.file.path, (err) => {
            if (err) {
                console.log(
                    'Failed to delete temporary PDF file:',
                    err.message
                );
            }
        });

        return res.status(200).json({
            success: true,
            message: 'PDF uploaded successfully',
        });

    } catch (error) {
        if (req.file && fs.existsSync(req.file.path)) {
            fs.unlinkSync(req.file.path);
        }

        console.log('PDF upload error:', error.message);

        return res.status(500).json({
            success: false,
            message: 'Failed to process PDF. Please try another file.',
        });
    }
}

module.exports = {
    uploadPdf,
};