// app/page.tsx
"use client"; // Ensures this page is treated as a client-side only component
// app/page.tsx
import { useState } from 'react';
import axios from 'axios';

export default function HomePage() {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState('');
  const [uploading, setUploading] = useState(false);
  const [uploadResult, setUploadResult] = useState('');

  // Function to handle file selection
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  // Function to handle URL input change
  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  // Example function to handle the upload action
  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file to upload.');
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

      setUploadResult(`Success! Video processed: ${response.data.output_video_path}`);
    } catch (error) {
      console.error('Upload failed:', error);
      setUploadResult('Failed to upload and process video.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center p-24">
      <section className="flex w-full max-w-md flex-col items-center space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Upload File</h2>
        <div className="grid w-full items-center gap-1.5">
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="file">File</label>
          <input className="form-input" id="file" type="file" onChange={handleFileChange} />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="url">URL</label>
          <input className="form-input" id="url" placeholder="Enter URL" type="text" value={url} onChange={handleUrlChange} />
        </div>
        <button className={`btn-primary ${uploading ? 'btn-disabled' : ''}`} type="button" onClick={handleUpload} disabled={uploading}>
          {uploading ? 'Uploading...' : 'Upload'}
        </button>
        {uploadResult && <div className="text-center">{uploadResult}</div>}
      </section>
    </main>
  );
}
