// app/page.tsx
"use client"; // Ensures this page is treated as a client-side only component
import React, { useState } from 'react';
import axios from 'axios'; // Ensure axios is imported

const HomePage: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);
  const [uploadSuccess, setUploadSuccess] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  // Correctly type the event parameter as React.ChangeEvent<HTMLInputElement>
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

    setUploading(true);
    try {
      const response = await axios.post('https://house-hackathon-git-main-ebowwa.vercel.app/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        setUploadSuccess(true);
        console.log('Upload success', response.data);
      } else {
        setErrorMessage('Upload failed');
      }
    } catch (error: any) {
      console.error('Upload error:', error.response ? error.response.data : error.message);
      setErrorMessage(error.response ? error.response.data.error : error.message);
    } finally {
      setUploading(false);
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
