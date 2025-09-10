const pdfParse = require('pdf-parse');
const Tesseract = require('tesseract.js');

const extractTextFromFile = async (file) => {
  const { buffer, mimetype } = file;

  if (mimetype === 'application/pdf') {
    const data = await pdfParse(buffer);
    return data.text;
  }
  
  if (mimetype.startsWith('image/')) {
    const { data: { text } } = await Tesseract.recognize(buffer, 'eng');
    return text;
  }
  
  throw new Error('Unsupported file type. Please upload a PDF or an image.');
};

module.exports = { extractTextFromFile };