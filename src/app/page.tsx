"use client";

import { Monitor } from "./components/monitor";
import { Settings } from "./components/settings";
import { Alerts } from "./components/alerts";
import { Toaster } from "@/components/ui/toaster";
import { ThemeToggle } from "./components/theme-toggle";
import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Scanner } from "./components/scanner";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Port Guardian</h1>
        <ThemeToggle />
      </div>
      <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-1">
        <Tabs defaultValue="monitor" aria-label="Options">
          <TabsList>
            <TabsTrigger value="monitor">Monitor</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
            <TabsTrigger value="alerts">Alerts</TabsTrigger>
            <TabsTrigger value="scanner">Scanner</TabsTrigger>
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

