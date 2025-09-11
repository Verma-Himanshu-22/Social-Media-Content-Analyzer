// src/App.jsx
import React, { useState, useCallback } from "react";
import { analyzeContent } from "./api/analysisService.js";
import { useTheme } from "./hooks/useTheme.js";

import { Header } from "./components/Header.jsx";
import { FileUpload } from "./components/FileUpload.jsx";
import { Loader } from "./components/Loader.jsx";
import { ErrorMessage } from "./components/ErrorMessage.jsx";
import { AnalysisResults } from "./components/AnalysisResults.jsx";

function App() {
  const [file, setFile] = useState(null);
  const [extractedText, setExtractedText] = useState("");
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [darkMode, toggleTheme] = useTheme();

  const handleFileChange = useCallback((selectedFile) => {
    if (selectedFile) {
      // Validate file size (10MB limit)
      if (selectedFile.size > 10 * 1024 * 1024) {
        setError(
          "File size exceeds the 10MB limit. Please choose a smaller file."
        );
        return;
      }

      setFile(selectedFile);
      setError("");
      setExtractedText("");
      setAnalysis(null);
    }
  }, []);

  const handleAnalyze = async () => {
    if (!file) {
      setError("Please select a file to analyze first.");
      return;
    }

    setLoading(true);
    setError("");
    setAnalysis(null);

    try {
      const data = await analyzeContent(file);

      // Defensive checks in case backend returns unexpected shape
      setExtractedText(data?.text || "");
      setAnalysis(data?.analysis || null);

      if (!data || !data.analysis) {
        setError(
          "Analysis returned no results. Please try a different file or check the server."
        );
      }
    } catch (err) {
      setError(err?.message || "An unknown error occurred during analysis.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4 sm:p-8 transition-colors duration-500 font-sans">
      <div className="max-w-4xl mx-auto">
        <Header darkMode={darkMode} onToggleTheme={toggleTheme} />

        <p className="text-center text-lg text-gray-600 dark:text-gray-400 mb-8">
          Upload a PDF or image file to get AI-powered analysis and engagement
          suggestions.
        </p>

        <FileUpload onFileChange={handleFileChange} />

        {file && (
          <div className="mt-4 text-center">
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Selected:{" "}
              <span className="font-bold text-blue-600 dark:text-blue-400">
                {file.name}
              </span>
            </p>
          </div>
        )}

        <div className="text-center mt-6">
          <button
            type="button"
            onClick={handleAnalyze}
            className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white rounded-full text-lg font-bold shadow-lg transition-all transform hover:scale-105 active:scale-95 disabled:bg-gray-400 dark:disabled:bg-gray-600 disabled:cursor-not-allowed disabled:scale-100"
            disabled={loading || !file}
          >
            {loading ? "Analyzing..." : "Analyze Content"}
          </button>
        </div>

        {error && <ErrorMessage message={error} />}
        {loading && <Loader />}
        {analysis && (
          <AnalysisResults extractedText={extractedText} analysis={analysis} />
        )}
      </div>
    </div>
  );
}

export default App;
