import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { UploadCloud } from 'lucide-react'; // Ensure this icon exists or use an alternative

export default function HomePage() { // Changed to default export
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
          <UploadCloud className="h-5 w-5" /> {/* Ensure correct icon name or replace */}
          <span>Upload</span>
        </Button>
      </section>

      {/* Rest of the page content */}
    </main>
  );
}
