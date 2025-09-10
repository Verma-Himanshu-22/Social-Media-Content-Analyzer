const { extractTextFromFile } = require("../services/file.service");
const { analyzeTextWithGemini } = require("../services/gemini.service");

const handleAnalysis = async (req, res) => {
  try {
    if (!req.file) {
      return res
        .status(400)
        .json({ error: "No file uploaded. Please select a file." });
    }

    const extractedText = await extractTextFromFile(req.file);

    if (!extractedText || !extractedText.trim()) {
      return res
        .status(400)
        .json({ error: "Could not extract text from the file." });
    }

    const analysis = await analyzeTextWithGemini(extractedText);

    res.status(200).json({
      text: extractedText,
      analysis: analysis,
    });
  } catch (error) {
    console.error("--- DETAILED ERROR ---");
    console.error(
      "An error occurred during the analysis process:",
      error.message
    );
    if (error.status) {
      console.error(`Status: ${error.status}`);
    }
    if (error instanceof SyntaxError) {
      console.error("The API returned a non-JSON response.");
    }
    console.error("--- END OF ERROR ---");

    res
      .status(500)
      .json({
        error: "Failed to analyze the file due to an internal server error.",
      });
  }
};

module.exports = { handleAnalysis };
