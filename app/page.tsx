// app/page.tsx
"use client"; // This line marks the component for client-side rendering

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { UploadCloud } from 'lucide-react'; // Make sure this icon exists in lucide-react

export default function HomePage() {
  // Example function to handle the upload action
  const handleUpload = () => {
    console.log("Upload action triggered");
    // Implement the upload logic here
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      {/* The section below will be dead center in the middle of the browser */}
      <section className="text-center">
        <Button className="flex items-center space-x-2" type="button" onClick={handleUpload}>
          <UploadCloud className="h-5 w-5" /> {/* Replace with your actual upload icon */}
          <span>Upload</span>
        </Button>
      </section>
    </main>
  );
}
