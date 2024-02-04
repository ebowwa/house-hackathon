// app/page.tsx
"use client"; // Mark the component for client-side rendering

import axios from 'axios';
import { useState } from 'react';

export default function HomePage() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
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

    try {
      setUploading(true);
      const response = await axios.post('https://house-hackathon-git-main-ebowwa.vercel.app/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data && response.status === 200) {
        setUploadSuccess(true);
        console.log('Upload success:', response.data);
      } else {
        setErrorMessage('Upload failed. Please try again.');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      setErrorMessage(error.response?.data?.error || 'An error occurred. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center p-24">
      <section className="flex w-full max-w-md flex-col items-center space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Upload File</h2>
        <input className="form-input" type="file" onChange={handleFileChange} disabled={uploading} />
        <button className="btn-primary" type="button" onClick={handleUpload} disabled={uploading}>
          {uploading ? 'Uploading...' : 'Upload'}
        </button>
        {uploadSuccess && <p className="text-green-500">File uploaded successfully!</p>}
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      </section>
    </main>
  );
}