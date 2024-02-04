// app/page.tsx
"use client"; // Ensures this page is treated as a client-side only component

export default function HomePage() {
  // Function to handle the file upload
  const handleUpload = async () => {
    console.log("Upload action triggered");
    
    // Create a FormData object to send the file
    const formData = new FormData();
    const fileInput = document.getElementById("file") as HTMLInputElement;
    formData.append("file", fileInput.files[0]);
    
    try {
      // Use fetch() to send the file to your Flask server
      const response = await fetch("https://house-hackathon-git-main-ebowwa.vercel.app/upload", {
        method: "POST",
        body: formData,
      });
      
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        // Handle the response data here
      } else {
        console.error("File upload failed");
        // Handle the error here
      }
    } catch (error) {
      console.error("An error occurred while uploading the file", error);
      // Handle the error here
    }
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
