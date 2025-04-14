"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

export const Monitor = () => {
  const [progress, setProgress] = useState(0);
  const [fileFormat, setFileFormat] = useState("Unknown");
  const [isPaused, setIsPaused] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [transferSpeed, setTransferSpeed] = useState("0 MB/s");
  const [totalSpace, setTotalSpace] = useState("0 GB");
  const [dataTransferred, setDataTransferred] = useState("0 MB");

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress < 100) {
            const newProgress = prevProgress + 5;
            setDataTransferred(`${(newProgress * 10) / 100} MB`); // Simulate 10MB total
            return newProgress;
          } else {
            clearInterval(interval);
            return 100;
          }
        });
      }, 250);

      // Simulate file format detection
      setTimeout(() => {
        setFileFormat("PDF");
      }, 1000);

      // Simulate drive stats
      setTotalSpace("1 GB");
      setTransferSpeed("10 MB/s");
      setIsOpen(true);

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
          </Button>
        </div>
      </CardContent>
      <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Transfer Status</AlertDialogTitle>
            <AlertDialogDescription>
              Real-time information about the USB transfer.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <p className="text-sm font-medium">Data Transferred:</p>
              <p className="text-sm">{dataTransferred}</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium">Total Space:</p>
              <p className="text-sm">{totalSpace}</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium">Transfer Speed:</p>
              <p className="text-sm">{transferSpeed}</p>
            </div>
          </div>
          <AlertDialogFooter>
            <AlertDialogAction>OK</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Card>
  );
};
