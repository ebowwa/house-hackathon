// app/main/index.tsx
"use client"
import { useState } from "react"
import React from 'react';
import FileUpload from '@/components/FileUpload'; // Adjust the import path based on your actual structure

const MainPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-center mb-4">Welcome to House Hackathon</h1>
      <p className="text-lg text-gray-700 text-center mb-8">Start by uploading a video file to process</p>
      <FileUpload />
    </div>
  );
};

export default MainPage;
