"use client";

import {
  Accordion,
  AccordionItem,
  Card,
  CardBody,
  CardHeader,
  Switch,
} from "@nextui-org/react";
import { Label } from "@/components/ui/label";

export const Settings = () => {
  return (
    <Card>
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md">Settings</p>
          <p className="text-small text-default-400">
            Configure USB port access and malware detection settings here.
          </p>
        </div>
      </CardHeader>
      <CardBody>
        <Accordion>
          <AccordionItem key="usb-access" title="USB Port Access">
            <div className="flex items-center space-x-2">
              <Switch id="usb-access-switch" />
              <Label htmlFor="usb-access-switch">Enable USB Port Access</Label>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Allow or deny access to USB ports.
            </p>
          </AccordionItem>
          <AccordionItem key="malware-detection" title="Malware Detection">
            <div className="flex items-center space-x-2">
              <Switch id="malware-detection-switch" />
              <Label htmlFor="malware-detection-switch">
                Enable Malware Detection
              </Label>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Automatically block USB ports upon malware detection.
            </p>
          </AccordionItem>
          <AccordionItem key="authentication" title="Authentication Control">
            <div className="flex items-center space-x-2">
              <Switch id="authentication-switch" />
              <Label htmlFor="authentication-switch">
                Require Authentication
              </Label>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Prompt for user credentials to access features or unblock ports.
            </p>
          </AccordionItem>
        </Accordion>
      </CardBody>
    </Card>
  );
};
