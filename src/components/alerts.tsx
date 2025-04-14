"use client";

import { Card, CardBody, CardHeader, CardFooter } from "@nextui-org/react";

export const Alerts = () => {
  // Placeholder alerts
  const alerts = [
    { id: 1, message: "Data transfer completed successfully." },
    { id: 2, message: "USB port blocked due to malware detection." },
    { id: 3, message: "New device connected to USB port." },
  ];

  return (
    <Card>
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md">Alerts</p>
          <p className="text-small text-default-400">
            Notification alerts for system events
          </p>
        </div>
      </CardHeader>
      <CardBody>
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
      </CardBody>
    </Card>
  );
};
