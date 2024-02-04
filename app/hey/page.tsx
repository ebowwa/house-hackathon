// app/example/page.tsx
"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';

const InitialComponent = () => (
  <div>
    <h1>This is the initial component</h1>
    {/* Other content */}
  </div>
);

const NewComponent = () => (
  <div>
    <h1>This is the new component loaded after button click</h1>
    {/* Other content */}
  </div>
);

const ExamplePage = () => {
  const [showNewComponent, setShowNewComponent] = useState(false);

  const handleClick = () => {
    setShowNewComponent(true);
  };

  return (
    <div>
      {showNewComponent ? <NewComponent /> : <InitialComponent />}
      {!showNewComponent && (
        <Button onClick={handleClick}>Load New Component</Button>
      )}
    </div>
  );
};

export default ExamplePage;