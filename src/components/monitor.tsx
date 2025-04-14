"use client";

import { Progress, Card, CardHeader, CardBody } from "@nextui-org/react";
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
    <Card>
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md">Real-time Monitoring</p>
          <p className="text-small text-default-400">
            Data transfer progress and file format
          </p>
        </div>
      </CardHeader>
      <CardBody>
        <div className="space-y-4">
          <div>
            <p className="text-sm font-medium">Data Transfer Progress:</p>
            <Progress
              aria-label="Data transfer progress"
              value={progress}
              style={{ width: "100%" }}
              className="max-w-md"
            />
            <p className="text-sm mt-2">{progress}%</p>
          </div>
          <div>
            <p className="text-sm font-medium">File Format:</p>
            <p className="text-sm">{fileFormat}</p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
