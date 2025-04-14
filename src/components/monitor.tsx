"use client";

import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Icons } from "@/components/icons";

export const Monitor = () => {
  const [progress, setProgress] = useState(0);
  const [fileFormat, setFileFormat] = useState("Unknown");
  const [isPaused, setIsPaused] = useState(false);

  // Simulate data transfer progress
  useEffect(() => {
    if (!isPaused) {
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
    }
  }, [isPaused]);

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

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
          <Button onClick={togglePause} variant="outline">
            {isPaused ? "Resume" : "Pause"}
            <Icons.pause className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
