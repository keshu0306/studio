
"use client";

import { Tabs, Tab } from "@nextui-org/react";
import { Monitor } from "./components/monitor";
import { Settings } from "./components/settings";
import { Alerts } from "./components/alerts";
import { Toaster } from "@/components/ui/toaster";
import { ThemeToggle } from "./components/theme-toggle";
import React from "react";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Port Guardian</h1>
        <ThemeToggle />
      </div>
      <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-1">
        <Tabs aria-label="Options">
          <Tab key="monitor" title="Monitor">
            <Monitor />
          </Tab>
          <Tab key="settings" title="Settings">
            <Settings />
          </Tab>
          <Tab key="alerts" title="Alerts">
            <Alerts />
          </Tab>
        </Tabs>
      </div>
      <Toaster />
    </div>
  );
}
