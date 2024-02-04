import axios from 'axios'; // Ensure axios is imported
import { useState } from 'react';

"use client"; // Ensures this page is treated as a client-side only component

export default function HomePage() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Corrected the type of event parameter here
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

    try {
      setUploading(true);
      const response = await axios.post('https://house-hackathon-git-main-ebowwa.vercel.app/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response.data) {
        setUploadSuccess(true);
        console.log(response.data); // Handle response data as needed
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('Upload failed');
    } finally {
      setUploading(false);
    }
  };