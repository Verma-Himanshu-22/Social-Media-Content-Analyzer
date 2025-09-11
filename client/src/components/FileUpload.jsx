import React, { useCallback, useRef } from "react";
import { UploadIcon } from "./icons/Icons.jsx";

export const FileUpload = ({ onFileChange }) => {
  const inputRef = useRef(null);

  const handleDragOver = useCallback((e) => e.preventDefault(), []);

  const handleDrop = useCallback(
    (e) => {
      e.preventDefault();
      const file = e.dataTransfer?.files?.[0];
      if (file) onFileChange(file);
    },
    [onFileChange]
  );

  const handleInputChange = (e) => {
    const file = e.target.files?.[0];
    if (file) onFileChange(file);
  };

  return (
    <div
      className="border-4 border-dashed border-gray-300 dark:border-gray-600 rounded-2xl p-8 sm:p-12 text-center transition-all duration-300 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onClick={() => inputRef.current && inputRef.current.click()}
      role="button"
      tabIndex={0}
      onKeyDown={(e) =>
        e.key === "Enter" && inputRef.current && inputRef.current.click()
      }
    >
      <div className="flex justify-center items-center mb-4">
        <UploadIcon />
      </div>
      <p className="text-xl font-semibold text-gray-700 dark:text-gray-300">
        Drag & drop your file here
      </p>
      <p className="text-gray-500 dark:text-gray-400 mt-1">
        or click to browse (Max 10MB)
      </p>
      <input
        ref={inputRef}
        id="file-input"
        type="file"
        onChange={handleInputChange}
        className="hidden"
        accept=".pdf,image/*"
      />
    </div>
  );
};
