import React from "react";

export const ErrorMessage = ({ message }) => (
  <div className="mt-6 p-4 bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300 rounded-lg shadow-md">
    <p className="font-semibold text-center">{message}</p>
  </div>
);
