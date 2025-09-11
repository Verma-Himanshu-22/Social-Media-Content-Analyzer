import React from "react";
import { CheckIcon } from "./icons/Icons.jsx";

export const AnalysisResults = ({ extractedText, analysis }) => {
  const readability = analysis?.readability || {
    wordCount: 0,
    sentenceCount: 0,
    charCount: 0,
  };
  const sentiment = analysis?.sentiment || {
    label: "Neutral",
    emotionalTone: "neutral",
  };
  const suggestions = analysis?.suggestions || [];

  const sentimentLabel = (sentiment.label || "").toLowerCase();

  const sentimentColorClass = sentimentLabel.includes("positive")
    ? "bg-green-100 dark:bg-green-800/40 text-green-800 dark:text-green-300"
    : sentimentLabel.includes("negative")
    ? "bg-red-100 dark:bg-red-800/40 text-red-800 dark:text-red-300"
    : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300";

  return (
    <div className="mt-8 space-y-10">
      {/* Extracted Text */}
      <div>
        <h2 className="text-xl sm:text-2xl font-bold mb-3">Extracted Text</h2>
        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 shadow-inner h-60 overflow-y-auto overflow-x-auto">
          <pre className="whitespace-pre-wrap break-words font-sans text-sm sm:text-base leading-relaxed">
            {extractedText}
          </pre>
        </div>
      </div>

      {/* Readability & Sentiment */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Readability */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-md">
          <h3 className="text-lg sm:text-xl font-bold mb-4">Readability</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="font-medium">Word Count</span>
              <span className="text-base sm:text-lg font-semibold text-blue-600 dark:text-blue-400">
                {readability.wordCount}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Sentence Count</span>
              <span className="text-base sm:text-lg font-semibold text-blue-600 dark:text-blue-400">
                {readability.sentenceCount}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Character Count</span>
              <span className="text-base sm:text-lg font-semibold text-blue-600 dark:text-blue-400">
                {readability.charCount}
              </span>
            </div>
          </div>
        </div>

        {/* Sentiment */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-md">
          <h3 className="text-lg sm:text-xl font-bold mb-4">Sentiment</h3>
          <div
            className={`inline-block px-5 py-2 rounded-full text-base sm:text-lg font-semibold ${sentimentColorClass}`}
          >
            {sentiment.label} — {sentiment.emotionalTone}
          </div>
        </div>
      </div>

      {/* Suggestions */}
      <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-md">
        <h3 className="text-lg sm:text-xl font-bold mb-4">Suggestions</h3>
        {suggestions.length > 0 ? (
          <ul className="space-y-3">
            {suggestions.map((s, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-gray-800 dark:text-gray-200"
              >
                <span className="flex-shrink-0 mt-1">
                  <CheckIcon size={16} color="green" />
                </span>
                <p className="text-sm sm:text-base leading-snug">{s}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600 dark:text-gray-400">
            No suggestions provided.
          </p>
        )}
      </div>
    </div>
  );
};
