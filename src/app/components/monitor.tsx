"use client";

import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";

export const Monitor = () => {
  const [progress, setProgress] = useState(0);
  const [fileFormat, setFileFormat] = useState("Unknown");

  // Simulate data transfer progress
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 10;
        } else {
          clearInterval(interval);
          return 100;
        }
      });
    }, 500); // Update progress every 0.5 second

    // Simulate file format detection
    setTimeout(() => {
      setFileFormat("PDF");
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Real-time Monitoring</CardTitle>
        <CardDescription>Data transfer progress and file format</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <p className="text-sm font-medium">Data Transfer Progress:</p>
            <Progress value={progress} />
            <p className="text-sm mt-2">{progress}%</p>
          </div>
          <div>
            <p className="text-sm font-medium">File Format:</p>
            <p className="text-sm">{fileFormat}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

