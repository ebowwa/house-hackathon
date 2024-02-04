// app/page.tsx
"use client"; // Ensures this page is treated as a client-side only component

export default function HomePage() {
  // Example function to handle the upload action
  const handleUpload = async () => {
    console.log("Upload action triggered");

    // Get the selected file from the file input element
    const fileInput = document.getElementById("file") as HTMLInputElement;
    const file = fileInput.files[0];

    // Check if a file is selected
    if (!file) {
      console.error("No file selected");
      return;
    }

    // Create a FormData object to send the file
    const formData = new FormData();
    formData.append("file", file);

    try {
      // Make a POST request to the server for file upload
      const response = await fetch("https://house-hackathon-git-main-ebowwa.vercel.app/upload", {
        method: "POST",
        body: formData,
      });

      // Check if the request was successful
      if (response.ok) {
        const data = await response.json();
        console.log("Upload successful");
        console.log("Output video path:", data.output_video_path);
      } else {
        console.error("Upload failed");
        const errorData = await response.json();
        console.error("Error:", errorData.error);
      }
    } catch (error) {
      console.error("Error:", error);
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
