// app/page.tsx
"use client"; // Ensures this page is treated as a client-side only component
// app/page.tsx
import React, { useState } from 'react';
import axios from 'axios'; // Ensure axios is imported

// Define the component with TypeScript
const HomePage: React.FC = () => {
  const [file, setFile] = useState<File | null>(null); // Use File type for the state
  const [uploading, setUploading] = useState<boolean>(false);
  const [uploadSuccess, setUploadSuccess] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  // Correctly type the event parameter
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]); // Update state with the selected file
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      setUploading(true);
      const response = await axios.post('https://house-hackathon-git-main-ebowwa.vercel.app/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setUploading(false);
      if (response.data && response.status === 200) {
        setUploadSuccess(true);
        console.log('Upload success', response.data);
      } else {
        setErrorMessage('Upload failed');
      }
    } catch (error) {
      setUploading(false);
      setErrorMessage(error.response?.data?.error || 'An unexpected error occurred');
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center p-24">
      <section className="flex w-full max-w-md flex-col items-center space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Upload File</h2>
        <input className="form-input" type="file" onChange={handleFileChange} />
        <button className="btn-primary" type="button" onClick={handleUpload} disabled={uploading}>
          {uploading ? 'Uploading...' : 'Upload'}
        </button>
        {uploadSuccess && <p>Upload successful!</p>}
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      </section>
    </main>
  );
};

export default HomePage;
