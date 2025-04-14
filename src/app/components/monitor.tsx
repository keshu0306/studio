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
import { Pause, Play, Disc, AlertTriangle, ShieldAlert } from "lucide-react";

interface UsbDevice {
  id: string;
  name: string;
  port: number;
}

export const Monitor = () => {
  const [progress, setProgress] = useState(0);
  const [fileFormat, setFileFormat] = useState("Unknown");
  const [isPaused, setIsPaused] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [transferSpeed, setTransferSpeed] = useState("0 MB/s");
  const [totalSpace, setTotalSpace] = useState("0 GB");
  const [dataTransferred, setDataTransferred] = useState("0 MB");
  const [connectedDevices, setConnectedDevices] = useState<UsbDevice[]>([
    { id: "device-1", name: "USB Drive 1", port: 1 },
    { id: "device-2", name: "Keyboard", port: 2 },
  ]);
  const [isTransferring, setIsTransferring] = useState(false);
  const [malwareDetected, setMalwareDetected] = useState(false);

  useEffect(() => {
    let interval: any;

    if (isTransferring && !isPaused && !malwareDetected) {
      interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress < 100) {
            const newProgress = prevProgress + 5;
            setDataTransferred(`${(newProgress * 0.1).toFixed(1)} MB`);
            return newProgress;
          } else {
            clearInterval(interval);
            setIsOpen(false);
            return 100;
          }
        });
      }, 250);

      setTimeout(() => {
        setFileFormat("PDF");
      }, 1000);

      setTotalSpace("10 MB");
      setTransferSpeed("0.4 MB/s");
      setIsOpen(true);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isTransferring, isPaused, malwareDetected]);

  const toggleTransfer = () => {
    setIsTransferring(!isTransferring);
    setProgress(0);
    setDataTransferred("0 MB");
  };

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  const disconnectDevice = (deviceId: string) => {
    setConnectedDevices((prevDevices) =>
      prevDevices.filter((device) => device.id !== deviceId)
    );
  };

  const simulateMalwareDetection = () => {
    setMalwareDetected(true);
    setIsTransferring(false);
    setIsPaused(true);
    setProgress(0);
    setDataTransferred("0 MB");
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Real-time Monitoring</CardTitle>
        <CardDescription>Data transfer progress and file information</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium">Data Transfer Progress:</p>
              <p className="text-sm">{progress}%</p>
            </div>
            <Progress value={progress} className="h-4" />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">File Format:</p>
            <p className="text-sm">{fileFormat}</p>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              onClick={toggleTransfer}
              variant="outline"
              disabled={malwareDetected}
              className="flex items-center"
            >
              {isTransferring ? (
                <>
                  <Pause className="w-4 h-4 mr-2" />
                  Pause Transfer
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 mr-2" />
                  Start Transfer
                </>
              )}
            </Button>
            <Button
              onClick={togglePause}
              variant="secondary"
              disabled={!isTransferring || malwareDetected}
              className="flex items-center"
            >
              {isPaused ? (
                <>
                  <Play className="w-4 h-4 mr-2" />
                  Resume
                </>
              ) : (
                <>
                  <Pause className="w-4 h-4 mr-2" />
                  Pause
                </>
              )}
            </Button>
            <Button
              onClick={simulateMalwareDetection}
              variant="destructive"
              disabled={malwareDetected}
              className="flex items-center"
            >
              {malwareDetected ? (
                <>
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  Malware Detected
                </>
              ) : (
                <>
                  <ShieldAlert className="w-4 h-4 mr-2" />
                  Simulate Malware
                </>
              )}
            </Button>
          </div>
        </div>

        <div>
          <p className="text-sm font-medium">Connected Devices ({connectedDevices.length}):</p>
          {connectedDevices.map((device) => (
            <div key={device.id} className="flex items-center justify-between py-2">
              <span>
                <Disc className="inline-block h-4 w-4 mr-2" />
                {device.name} (Port {device.port})
              </span>
              <Button variant="outline" size="sm" onClick={() => disconnectDevice(device.id)}>
                Disconnect
              </Button>
            </div>
          ))}
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
