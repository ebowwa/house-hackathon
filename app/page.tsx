// app/page.tsx
"use client"; // Ensures this page is treated as a client-side only component
// app/page.tsx
import { useState } from 'react';
import axios from 'axios';

export default function HomePage() {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState('');
  const [uploading, setUploading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file to upload');
      return;
    }
    // Construct FormData
    const formData = new FormData();
    formData.append('file', file);

    setUploading(true);

    try {
      const result = await axios.post('https://house-hackathon-git-main-ebowwa.vercel.app/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setResponse(result.data);
      alert('Upload successful');
    } catch (error) {
      alert('Upload failed: ' + error.message);
      console.error('Upload error:', error);
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
          <input className="form-input" id="file" type="file" onChange={handleFileChange} />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <label htmlFor="url" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">URL (Optional)</label>
          <input className="form-input" id="url" placeholder="Enter URL" type="text" value={url} onChange={handleUrlChange} />
        </div>
        <button className="btn-primary" type="button" onClick={handleUpload} disabled={uploading}>
          {uploading ? 'Uploading...' : 'Upload'}
        </button>
        {response && <div className="mt-4 text-center">
          <p>Upload Response:</p>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>}
      </section>
    </main>
  );
}
