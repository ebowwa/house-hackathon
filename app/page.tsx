// app/page.tsx
"use client"; // Mark the component for client-side rendering

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
// Since you're using a custom SVG component, ensure it's correctly referenced
// This line is commented out because it might be incorrect based on your setup
import { UploadCloud } from 'lucide-react';

export default function HomePage() {
  // Function to handle the upload action
  const handleUpload = () => {
    console.log("Upload action triggered");
    // Here you would implement the actual upload logic
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      {/* Centered content including the upload button within a section */}
      <section className="text-center">
        <Button className="flex items-center justify-center space-x-2 mx-auto" type="button" onClick={handleUpload}>
          {/* Assuming you have a correct way to include the UploadCloud icon, which might be a custom SVG */}
          {/* Ensure the SVG icon is used here correctly, possibly as <UploadCloudIcon className="h-5 w-5" /> */}
          <span>Upload</span>
        </Button>
      </section>

      {/* Additional content, ensure it's also centered as necessary */}
    </main>
  );
}
