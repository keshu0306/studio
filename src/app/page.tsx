"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Monitor } from "./components/monitor";
import { Settings } from "./components/settings";
import { Alerts } from "./components/alerts";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Port Guardian</h1>
      <Tabs defaultValue="monitor" className="w-[400px]">
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
      <Toaster/>
    </div>
  );
}
