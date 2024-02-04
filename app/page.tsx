import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { UploadCloud } from 'lucide-react';

export function HomePage() {
  // Example function to handle the upload action
  const handleUpload = () => {
    console.log("Upload action triggered");
    // Implement the upload logic here
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Existing content */}

      {/* Adding the upload button within a section */}
      <section className="text-center mb-8">
        <Button className="flex items-center space-x-2" type="button" onClick={handleUpload}>
          <CloudUpload className="h-5 w-5" />
          <span>Upload</span>
        </Button>
      </section>

      {/* Rest of the page content */}
    </main>
  );
}
