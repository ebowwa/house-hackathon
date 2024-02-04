"use client"; // This line marks the component for client-side rendering

import { useState } from 'react';

// Ensure to import necessary types for handling events
import React from 'react';

export default function HomePage() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);
  const [uploadSuccess, setUploadSuccess] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  // Correctly type the event parameter using React.ChangeEvent<HTMLInputElement>
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    setUploading(true);
    try {
      // Use axios to send the file to your server endpoint
      const response = await axios.post('https://house-hackathon-git-main-ebowwa.vercel.app/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Handle success
      console.log(response.data);
      setUploadSuccess(true);
    } catch (error) {
      // Handle error
      console.error(error);
      setErrorMessage('Upload failed. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center p-24">
      <section className="flex w-full max-w-md flex-col items-center space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Upload File</h2>
        <input className="form-input" id="file" type="file" onChange={handleFileChange} />
        {uploading && <p>Uploading...</p>}
        {uploadSuccess && <p>Upload successful!</p>}
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <button className="btn-primary" type="button" onClick={handleUpload} disabled={uploading}>
          Upload
        </button>
      </section>
    </main>
  );
}
