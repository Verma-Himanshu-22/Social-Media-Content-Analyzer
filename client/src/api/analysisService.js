export const analyzeContent = async (file) => {
const formData = new FormData();
formData.append('file', file);
  const apiUrl = `${import.meta.env.VITE_API_URL}/api/analyze`;

  const response = await fetch(apiUrl, {
    method: 'POST',
    body: formData,
  });


if (!response.ok) {
let errorMessage = `Server Error: ${response.status} ${response.statusText}`;
try {
const errorData = await response.json();
errorMessage = errorData.error || errorMessage;
} catch (jsonError) {
console.error("Could not parse error response as JSON.", jsonError);
}
throw new Error(errorMessage);
}


// await the parsed JSON before returning so callers get a fully resolved object
const payload = await response.json();
return payload;
};