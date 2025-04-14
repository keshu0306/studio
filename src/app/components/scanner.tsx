"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { scanForMalware, MalwareScanResult } from "@/services/malware-scanner";
import { useState } from "react";
import { CheckCircle, AlertTriangle, File, Loader2 } from "lucide-react";

export const Scanner = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [scanResult, setScanResult] = useState<MalwareScanResult | null>(null);
  const [isScanning, setIsScanning] = useState(false);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    } else {
      setSelectedFile(null);
    }
    setScanResult(null);
  };

  const handleScan = async () => {
    if (!selectedFile) {
      alert("Please select a file to scan.");
      return;
    }

    setIsScanning(true);
    setScanResult(null);

    // Simulate file path for scanning
    const filePath = selectedFile.name;

    try {
      const result = await scanForMalware(filePath);
      setScanResult(result);
    } catch (error) {
      console.error("Scan failed:", error);
      setScanResult({ malwareDetected: true, message: "Scan failed due to an error." });
    } finally {
      setIsScanning(false);
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>File Scanner</CardTitle>
        <CardDescription>Manually scan files for malware.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-2">
          <Label htmlFor="file-input" className="text-sm font-medium">Select File:</Label>
          <div className="flex items-center space-x-2">
            <Input
              type="file"
              id="file-input"
              onChange={handleFileSelect}
              disabled={isScanning}
              className="text-sm"
            />
            {selectedFile && (
              <span className="text-gray-500 text-xs italic">
                Selected: {selectedFile.name}
              </span>
            )}
          </div>
        </div>
        <div>
          <Button onClick={handleScan} disabled={isScanning} variant="outline" className="w-full">
            {isScanning ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Scanning...
              </>
            ) : (
              <>
                <File className="mr-2 h-4 w-4" />
                Scan File
              </>
            )}
          </Button>
        </div>

        {scanResult && (
          <div className="mt-4">
            {scanResult.malwareDetected ? (
              <div className="p-4 rounded-md bg-red-100 text-sm text-red-700 flex items-center space-x-2">
                <AlertTriangle className="h-4 w-4" />
                <span>
                  Malware Detected: {scanResult.message || "Malware found in the file."}
                </span>
              </div>
            ) : (
              <div className="p-4 rounded-md bg-green-100 text-sm text-green-700 flex items-center space-x-2">
                <CheckCircle className="h-4 w-4" />
                <span>
                  File Safe: {scanResult.message || "No malware detected."}
                </span>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
