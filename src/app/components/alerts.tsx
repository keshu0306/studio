"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Alerts = () => {
  // Placeholder alerts
  const alerts = [
    { id: 1, message: "Data transfer completed successfully." },
    { id: 2, message: "USB port blocked due to malware detection." },
    { id: 3, message: "New device connected to USB port." },
  ];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Alerts</CardTitle>
        <CardDescription>Notification alerts for system events</CardDescription>
      </CardHeader>
      <CardContent>
        <ul>
          {alerts.length > 0 ? (
            alerts.map((alert) => (
              <li key={alert.id} className="mb-2 p-2 rounded-md bg-secondary text-sm">
                {alert.message}
              </li>
            ))
          ) : (
            <li>No alerts yet.</li>
          )}
        </ul>
      </CardContent>
    </Card>
  );
};

