// app/components/FileUpload.tsx
import React, { useState } from 'react';

const FileUpload = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          throw new Error('Failed to upload file.');
        }

        const result = await response.json();
        console.log(result);
        // Handle success
      } catch (error) {
        console.error('Error uploading file:', error);
        // Handle error
      }
    }
  };

  return (
    <div className="grid w-full max-w-md items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-md shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Upload File</h2>
      <form onSubmit={handleSubmit} className="grid w-full items-center gap-1.5">
        <label htmlFor="file" className="text-sm font-medium leading-none">File</label>
        <input id="file" type="file" onChange={handleFileChange} className="flex h-10 w-full rounded-md" />
        <button type="submit" className="inline-flex items-center justify-center h-10 px-4 w-full py-2 bg-blue-500 text-white rounded-md">Submit</button>
      </form>
    </div>
  );
};

export default FileUpload;
