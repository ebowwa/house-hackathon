// app/page.tsx
"use client"; // Ensures this page is treated as a client-side only component

export default function HomePage() {
  // Function to handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0]; // Get the file
    uploadFile(file); // Call the upload function
  };

  // Function to handle the upload action
  const uploadFile = (file) => {
    console.log("Uploading file:", file.name);

    // Create a FormData object and append the file
    const formData = new FormData();
    formData.append('file', file);

    // Use fetch API to send the file to the server
    fetch('https://house-hackathon.vercel.app/upload', { // Ensure the URL matches your Flask server's address and endpoint
      method: 'POST',
      body: formData,
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    // The main tag here uses flexbox to center its children both vertically and horizontally
    <main className="flex min-h-screen items-center justify-center p-24">
      {/* The section below is the centered content within the flex container (main) */}
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
