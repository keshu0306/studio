"use client";

import { Monitor } from "./components/monitor";
import { Settings } from "./components/settings";
import { Alerts } from "./components/alerts";
import { Toaster } from "@/components/ui/toaster";
import { ThemeToggle } from "./components/theme-toggle";
import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Scanner } from "./components/scanner";
import { Usb, Settings as SettingIcon, Bell, Scan, Activity, ShieldAlert } from "lucide-react";

export default function Home() {
  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold flex items-center text-primary">
          <Usb className="mr-2 h-6 w-6" />
          Port Guardian
        </h1>
        <ThemeToggle />
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Tabs defaultValue="monitor" className="col-span-full">
          <TabsList className="bg-secondary">
            <TabsTrigger value="monitor" className="flex items-center space-x-2">
              <Activity className="h-5 w-5" />
              <span>Monitor</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center space-x-2">
              <SettingIcon className="h-5 w-5" />
              <span>Settings</span>
            </TabsTrigger>
            <TabsTrigger value="alerts" className="flex items-center space-x-2">
              <Bell className="h-5 w-5" />
              <span>Alerts</span>
            </TabsTrigger>
            <TabsTrigger value="scanner" className="flex items-center space-x-2">
              <Scan className="h-5 w-5" />
              <span>Scanner</span>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="monitor" className="outline-none">
            <Monitor />
          </TabsContent>
          <TabsContent value="settings" className="outline-none">
            <Settings />
          </TabsContent>
          <TabsContent value="alerts" className="outline-none">
            <Alerts />
          </TabsContent>
          <TabsContent value="scanner" className="outline-none">
            <Scanner />
          </TabsContent>
        </Tabs>
      </div>
      <Toaster />
    </div>
  );
}
