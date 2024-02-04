// Assuming this is within a file like app/components/UploadComponent.tsx

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function UploadComponent() {
  return (
    <div className="flex flex-col w-full max-w-md items-center space-y-4">
      <div className="flex w-full items-center space-x-2">
        <Label htmlFor="url">URL</Label>
        <Input className="flex-grow" id="url" placeholder="Enter URL" type="text" />
      </div>
      <Button className="flex items-center space-x-2" type="submit">
        <UploadCloudIcon className="h-5 w-5" />
        <span>Upload</span>
      </Button>
    </div>
  );
}

function UploadCloudIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
      <path d="M12 12v9" />
      <path d="m16 16-4-4-4 4" />
    </svg>
  );
}
