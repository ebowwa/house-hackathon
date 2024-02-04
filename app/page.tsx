// app/page.tsx
"use client"; // Ensures this page is treated as a client-side only component
// app/page.tsx
import React, { useState } from 'react';

export default function HomePage() {
  const [file, setFile] = useState(null); // State to hold the selected file

  // Function to handle file selection
  const handleFileChange = (event) => {
    setFile(event.target.files[0]); // Update state with the selected file
  };

  // Asynchronous function to handle the upload action
  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file before uploading.");
      return;
    }
    console.log("Uploading file", file.name);

    const formData = new FormData();
    formData.append('file', file); // 'file' is the key expected by the Flask backend

    try {
      const response = await fetch('/upload', { // Ensure this URL matches your Flask route
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        alert(`Upload successful: ${data.message}`);
        // Here you could clear the selected file or handle further actions
      } else {
        const error = await response.json();
        alert(`Upload failed: ${error.error}`);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Upload failed due to a network or server error.");
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center p-24">
      <section className="flex w-full max-w-md flex-col items-center space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Upload File</h2>
        <div className="grid w-full items-center gap-1.5">
          <label htmlFor="file" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">File</label>
          <input
            className="form-input"
            id="file"
            type="file"
            onChange={handleFileChange} // Handle file selection
          />
        </div>
        <button className="btn-primary" type="button" onClick={handleUpload}>
          Upload
        </button>
      </section>
    </main>
  );
}
