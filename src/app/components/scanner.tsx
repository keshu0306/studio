"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { scanForMalware, MalwareScanResult } from "@/services/malware-scanner";
import { useState } from "react";

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
        <CardDescription>
          Manually scan files for malware.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="file-input">Select File:</Label>
          <Input
            type="file"
            id="file-input"
            onChange={handleFileSelect}
            disabled={isScanning}
          />
          {selectedFile && (
            <p className="text-sm mt-2">
              Selected file: {selectedFile.name}
            </p>
          )}
        </div>
        <div>
          <Button onClick={handleScan} disabled={isScanning} variant="outline">
            {isScanning ? "Scanning..." : "Scan File"}
          </Button>
        </div>

        {scanResult && (
          <div className="mt-4">
            {scanResult.malwareDetected ? (
              <div className="p-4 rounded-md bg-red-100 text-sm text-red-700">
                Malware Detected: {scanResult.message || "Malware found in the file."}
              </div>
            ) : (
              <div className="p-4 rounded-md bg-green-100 text-sm text-green-700">
                File Safe: {scanResult.message || "No malware detected."}
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
