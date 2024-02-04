// app/page.tsx
"use client"; // Ensures this page is treated as a client-side only component

export default function HomePage() {
  // Example function to handle the upload action
  const handleUpload = () => {
    console.log("Upload action triggered");
    // Implement the upload logic here
  };

  return (
    // The main tag here uses flexbox to center its children both vertically and horizontally
    <main className="flex min-h-screen items-center justify-center p-24">
      {/* The section now contains the HTML content you provided, wrapped in a container div to control width and centering */}
      <section className="flex w-full max-w-md flex-col items-center space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Upload File</h2>
        {/* File input */}
        <div className="grid w-full items-center gap-1.5">
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="file">File</label>
          <input className="form-input" id="file" type="file" />
        </div>
        {/* URL input */}
        <div className="grid w-full items-center gap-1.5">
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="url">URL</label>
          <input className="form-input" id="url" placeholder="Enter URL" type="text" />
        </div>
        {/* Submit button */}
        <button className="btn-primary" type="button" onClick={handleUpload}>
          Upload
        </button>
      </section>
    </main>
  );
}
