"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export const Settings = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Settings</CardTitle>
        <CardDescription>Configure USB port access and malware detection settings here.</CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible>
          <AccordionItem value="usb-access">
            <AccordionTrigger>USB Port Access</AccordionTrigger>
            <AccordionContent>
              <div className="flex items-center space-x-2">
                <Switch id="usb-access-switch" />
                <Label htmlFor="usb-access-switch">Enable USB Port Access</Label>
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
                <Switch id="malware-detection-switch" />
                <Label htmlFor="malware-detection-switch">Enable Malware Detection</Label>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Automatically block USB ports upon malware detection.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="authentication">
            <AccordionTrigger>Authentication Control</AccordionTrigger>
            <AccordionContent>
              <div className="flex items-center space-x-2">
                <Switch id="authentication-switch" />
                <Label htmlFor="authentication-switch">Require Authentication</Label>
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

