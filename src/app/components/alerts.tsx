"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const Alerts = () => {
  const { toast } = useToast();
  const [usbConnected, setUsbConnected] = useState(false);
  const [malwareDetected, setMalwareDetected] = useState(false);
  const [fileSafe, setFileSafe] = useState(false);

  useEffect(() => {
    // Simulate USB connection
    const connectTimeout = setTimeout(() => {
      setUsbConnected(true);
      toast({
        title: "USB Connected",
        description: "A USB device has been connected.",
      });
    }, 1000);

    // Simulate malware detection
    const malwareTimeout = setTimeout(() => {
      setMalwareDetected(true);
      toast({
        title: "Malware Detected",
        description: "Malware detected. USB port blocked temporarily.",
        variant: "destructive",
      });
    }, 3000);

    // Simulate file being safe
    const fileSafeTimeout = setTimeout(() => {
      setFileSafe(true);
      toast({
        title: "File Safe",
        description: "The file is safe to use.",
      });
    }, 5000);

    // Simulate USB disconnection
    const disconnectTimeout = setTimeout(() => {
      setUsbConnected(false);
      setMalwareDetected(false);
      setFileSafe(false);
      toast({
        title: "USB Disconnected",
        description: "A USB device has been disconnected.",
      });
    }, 7000);

    return () => {
      clearTimeout(connectTimeout);
      clearTimeout(malwareTimeout);
      clearTimeout(fileSafeTimeout);
      clearTimeout(disconnectTimeout);
    };
  }, [toast]);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Alerts</CardTitle>
        <CardDescription>Real-time notifications for system events</CardDescription>
      </CardHeader>
      <CardContent>
        {usbConnected && (
          <div className="mb-2 p-2 rounded-md bg-green-100 text-sm text-green-700">
            USB Connected: A USB device has been connected.
          </div>
        )}
        {malwareDetected && (
          <div className="mb-2 p-2 rounded-md bg-red-100 text-sm text-red-700">
            Malware Detected: USB port blocked temporarily.
          </div>
        )}
        {fileSafe && (
          <div className="mb-2 p-2 rounded-md bg-blue-100 text-sm text-blue-700">
            File Safe: The file is safe to use.
          </div>
        )}
        {!usbConnected && !malwareDetected && !fileSafe && (
          <div>No alerts yet.</div>
        )}
      </CardContent>
    </Card>
  );
};
