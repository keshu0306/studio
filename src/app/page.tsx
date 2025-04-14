"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Monitor } from "./components/monitor";
import { Settings } from "./components/settings";
import { Alerts } from "./components/alerts";
import { Toaster } from "@/components/ui/toaster";
import { ThemeToggle } from "./components/theme-toggle";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Port Guardian</h1>
        <ThemeToggle />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Tabs defaultValue="monitor" className="w-full">
          <TabsList>
            <TabsTrigger value="monitor">Monitor</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
            <TabsTrigger value="alerts">Alerts</TabsTrigger>
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
        </Tabs>
      </div>
      <Toaster />
    </div>
  );
}
