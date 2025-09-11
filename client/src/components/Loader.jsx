import React from "react";

export const Loader = () => (
  <div className="mt-8 text-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto" />
    <p className="mt-4 text-gray-600 dark:text-gray-400">
      AI is analyzing your content...
    </p>
  </div>
);
