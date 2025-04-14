"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export const Settings = () => {
  const [usbAccessEnabled, setUsbAccessEnabled] = useState(false);
  const [malwareScanEnabled, setMalwareScanEnabled] = useState(false);
  const [autoScanEnabled, setAutoScanEnabled] = useState(false);
  const [authenticationEnabled, setAuthenticationEnabled] = useState(false);

  const toggleUsbAccess = () => {
    setUsbAccessEnabled(!usbAccessEnabled);
  };

  const toggleMalwareScan = () => {
    setMalwareScanEnabled(!malwareScanEnabled);
  };

  const toggleAutoScan = () => {
    setAutoScanEnabled(!autoScanEnabled);
  };

  const toggleAuthentication = () => {
    setAuthenticationEnabled(!authenticationEnabled);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Settings</CardTitle>
        <CardDescription>
          Configure USB port access and malware detection settings here.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible>
          <AccordionItem value="usb-access">
            <AccordionTrigger>USB Port Access</AccordionTrigger>
            <AccordionContent>
              <div className="flex items-center space-x-2">
                <Switch
                  id="usb-access-switch"
                  checked={usbAccessEnabled}
                  onCheckedChange={toggleUsbAccess}
                />
                <Label htmlFor="usb-access-switch">
                  {usbAccessEnabled ? "Disable" : "Enable"} USB Port Access
                </Label>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Allow or deny access to USB ports.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="malware-detection">
            <AccordionTrigger>Malware Detection</AccordionTrigger>
            <AccordionContent>
              <div className="flex items-center space-x-2">
                <Switch
                  id="malware-detection-switch"
                  checked={malwareScanEnabled}
                  onCheckedChange={toggleMalwareScan}
                />
                <Label htmlFor="malware-detection-switch">
                  {malwareScanEnabled ? "Disable" : "Enable"} Malware Scan
                </Label>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Scan for malware on USB devices.
              </p>
              <div className="flex items-center space-x-2 mt-4">
                <Switch
                  id="auto-scan-switch"
                  checked={autoScanEnabled}
                  onCheckedChange={toggleAutoScan}
                />
                <Label htmlFor="auto-scan-switch">
                  {autoScanEnabled ? "Disable" : "Enable"} Auto Scan &amp; Block
                </Label>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Automatically pause transfer and block USB ports upon malware
                detection.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="authentication">
            <AccordionTrigger>Authentication Control</AccordionTrigger>
            <AccordionContent>
              <div className="flex items-center space-x-2">
                <Switch
                  id="authentication-switch"
                  checked={authenticationEnabled}
                  onCheckedChange={toggleAuthentication}
                />
                <Label htmlFor="authentication-switch">
                  {authenticationEnabled ? "Disable" : "Enable"} Authentication
                  Control
                </Label>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Prompt for user credentials to access features or unblock ports.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};
