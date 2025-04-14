"use client";

import { Monitor } from "./components/monitor";
import { Settings } from "./components/settings";
import { Alerts } from "./components/alerts";
import { Toaster } from "@/components/ui/toaster";
import { ThemeToggle } from "./components/theme-toggle";
import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Scanner } from "./components/scanner";
import { Usb, Settings as SettingIcon, Bell, Scan } from "lucide-react";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold flex items-center">
          <Usb className="mr-2" />
          Port Guardian
        </h1>
        <ThemeToggle />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
        <Tabs defaultValue="monitor" aria-label="Options" className="col-span-3">
          <TabsList>
            <TabsTrigger value="monitor">
              <Usb className="mr-2 h-4 w-4" />
              Monitor
            </TabsTrigger>
            <TabsTrigger value="settings">
              <SettingIcon className="mr-2 h-4 w-4" />
              Settings
            </TabsTrigger>
            <TabsTrigger value="alerts">
              <Bell className="mr-2 h-4 w-4" />
              Alerts
            </TabsTrigger>
            <TabsTrigger value="scanner">
              <Scan className="mr-2 h-4 w-4" />
              Scanner
            </TabsTrigger>
          </TabsList>
          <TabsContent value="monitor">
            <Monitor />
          </TabsContent>
          <TabsContent value="settings">
            <Settings />
          </TabsContent>
          <TabsContent value="alerts">
            <Alerts />
          </TabsContent>
          <TabsContent value="scanner">
            <Scanner />
          </TabsContent>
        </Tabs>
      </div>
      <Toaster />
    </div>
  );
}
