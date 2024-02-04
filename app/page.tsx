// app/page.tsx
import axios from 'axios'; // Ensure axios is installed and imported
import { useState } from 'react'; // Import useState for managing state

export default function HomePage() {
  const [file, setFile] = useState<File | null>(null); // State to hold the selected file
  const [uploading, setUploading] = useState(false); // State to indicate if the file is being uploaded

  // Handle file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files[0]) {
      setFile(files[0]);
    }
  };

  // Handle file upload
  const handleUpload = async () => {
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      try {
        setUploading(true);
        const response = await axios.post('https://house-hackathon-git-main-ebowwa.vercel.app/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log('Upload Successful', response.data);
        alert('File uploaded successfully');
      } catch (error: any) {
        console.error('Upload Error', error.response?.data || error.message);
        alert('Upload failed');
      } finally {
        setUploading(false);
      }
    } else {
      alert('Please select a file first');
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center p-24">
      <section className="flex w-full max-w-md flex-col items-center space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Upload Video</h2>
        <input className="form-input" type="file" onChange={handleFileChange} accept="video/mp4,video/x-m4v,video/*" />
        <button className="btn-primary" type="button" onClick={handleUpload} disabled={uploading}>
          {uploading ? 'Uploading...' : 'Upload'}
        </button>
      </section>
    </main>
  );
}
