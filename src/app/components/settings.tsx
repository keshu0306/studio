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
import { Shield, Usb, AlertTriangle, Lock, Scan } from "lucide-react";

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
            <AccordionTrigger>
              <div className="flex items-center space-x-2">
                <Usb className="h-4 w-4" />
                <span>USB Port Access</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex items-center justify-between p-2">
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
                <p className="text-sm text-muted-foreground">
                  Allow or deny access to USB ports.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="malware-detection">
            <AccordionTrigger>
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4" />
                <span>Malware Detection</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex items-center justify-between p-2">
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
                <p className="text-sm text-muted-foreground">
                  Scan for malware on USB devices.
                </p>
              </div>

              <div className="flex items-center justify-between p-2">
                <div className="flex items-center space-x-2">
                  <Switch
                    id="auto-scan-switch"
                    checked={autoScanEnabled}
                    onCheckedChange={toggleAutoScan}
                  />
                  <Label htmlFor="auto-scan-switch">
                    {autoScanEnabled ? "Disable" : "Enable"} Auto Scan &amp; Block
                  </Label>
                </div>
                <p className="text-sm text-muted-foreground">
                  Automatically pause transfer and block USB ports upon malware
                  detection.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="authentication">
            <AccordionTrigger>
              <div className="flex items-center space-x-2">
                <Lock className="h-4 w-4" />
                <span>Authentication Control</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex items-center justify-between p-2">
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
                <p className="text-sm text-muted-foreground">
                  Prompt for user credentials to access features or unblock ports.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};
