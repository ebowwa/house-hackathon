// app/page.tsx
"use client"; // Ensures this page is treated as a client-side only component
// app/page.tsx
import { useState } from 'react';
import axios from 'axios';

export default function HomePage() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadResult, setUploadResult] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file before uploading.");
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
      setUploadResult(response.data);
      alert("File uploaded successfully!");
    } catch (error) {
      alert(`Error: ${error.response ? error.response.data.error : error.message}`);
    } finally {
      setUploading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center p-24">
      <section className="flex w-full max-w-md flex-col items-center space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Upload Video File</h2>
        <div className="grid w-full items-center gap-1.5">
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="file">Video File</label>
          <input className="form-input" id="file" type="file" onChange={handleFileChange} />
        </div>
        <button className={`btn-primary ${uploading ? 'cursor-not-allowed opacity-50' : ''}`} type="button" onClick={handleUpload} disabled={uploading}>
          {uploading ? 'Uploading...' : 'Upload'}
        </button>
        {uploadResult && (
          <div className="mt-4 text-center">
            <p className="text-sm font-semibold">Upload Result:</p>
            <p className="text-xs">{JSON.stringify(uploadResult, null, 2)}</p>
          </div>
        )}
      </section>
    </main>
  );
}
