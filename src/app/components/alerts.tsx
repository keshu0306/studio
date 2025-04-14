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
import { CheckCircle, AlertTriangle, Info } from "lucide-react";

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
        className: "border-primary bg-primary-foreground text-background",
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
        className: "border-accent bg-accent-foreground text-background",
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
        className: "border-muted bg-muted-foreground text-background",
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
      <CardContent className="space-y-4">
        {usbConnected && (
          <div className="p-3 rounded-md bg-green-50 text-green-900 flex items-center space-x-2">
            <CheckCircle className="h-4 w-4" />
            <span>USB Connected: A USB device has been connected.</span>
          </div>
        )}
        {malwareDetected && (
          <div className="p-3 rounded-md bg-red-50 text-red-900 flex items-center space-x-2">
            <AlertTriangle className="h-4 w-4" />
            <span>Malware Detected: USB port blocked temporarily.</span>
          </div>
        )}
        {fileSafe && (
          <div className="p-3 rounded-md bg-blue-50 text-blue-900 flex items-center space-x-2">
            <Info className="h-4 w-4" />
            <span>File Safe: The file is safe to use.</span>
          </div>
        )}
        {!usbConnected && !malwareDetected && !fileSafe && (
          <div className="text-muted-foreground">No alerts yet.</div>
        )}
      </CardContent>
    </Card>
  );
};
