const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash-latest' });

const analyzeTextWithGemini = async (extractedText) => {
  const prompt = `
    Analyze the following text intended for a social media post.
    Provide a comprehensive analysis in a strict JSON format. Do not include any text, explanation, or markdown formatting outside of the JSON object.
    The JSON object must have this exact structure:
    {
      "readability": { "wordCount": <number>, "sentenceCount": <number>, "charCount": <number> },
      "sentiment": { "label": "<'Positive', 'Highly Positive', 'Negative', 'highly Negative', or 'Neutral'>", "emotionalTone": "<A single descriptive word for the tone>" },
      "suggestions": ["<Actionable suggestion 1>", "<Actionable suggestion 2>", "<Actionable suggestion 3>", "<Actionable suggestion 4>", "<Actionable suggestion 5>"]
    }
    Here is the text to analyze:
    ---
    ${extractedText}
    ---
  `;

  let result;
  const maxRetries = 4;
  for (let i = 0; i < maxRetries; i++) {
    try {
      result = await model.generateContent(prompt);
      break; 
    } catch (error) {
      if ((error.status === 503 || error.status === 429) && i < maxRetries - 1) {
        let delay = Math.pow(2, i) * 1000 + Math.random() * 1000;
        console.warn(`API is busy (Status: ${error.status}). Retrying in ${(delay / 1000).toFixed(1)}s...`);
        await new Promise(resolve => setTimeout(resolve, delay));
      } else {
        throw error;
      }
    }
  }
  
  const response = await result.response;
  let analysisText = response.text().replaceAll('```json', '').replaceAll('```', '').trim();
//   console.log(analysisText)
  return JSON.parse(analysisText);
};

module.exports = { analyzeTextWithGemini };