
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { Bell, Bookmark } from "lucide-react"; // Changed to Bell for Notifications, Added Bookmark

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen p-4 md:p-6 lg:p-8">
      <h1 className="text-2xl font-bold mb-6 text-foreground">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Notifications Card */}
        <Card className="shadow-lg backdrop-blur-sm bg-card/70 border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="w-5 h-5" /> {/* Icon for Notifications */}
              Notifications
            </CardTitle>
            <CardDescription>Recent alerts</CardDescription>
          </CardHeader>
          <CardContent>
             <p className="text-3xl font-bold">0</p>
            <Button variant="outline" size="sm" className="mt-2">View Alerts</Button>
          </CardContent>
        </Card>

        {/* My Saved Events Card */}
        <Card className="shadow-lg backdrop-blur-sm bg-card/70 border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bookmark className="w-5 h-5" />
              My Saved Events
            </CardTitle>
            <CardDescription>Events you've bookmarked</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">0</p> {/* Placeholder count */}
            <Button variant="outline" size="sm" className="mt-2">View Events</Button>
          </CardContent>
        </Card>
      </div>

      {/* Example Content Area */}
       <Card className="flex-1 shadow-lg backdrop-blur-sm bg-card/70 border-border">
        <CardHeader>
          <CardTitle>Welcome, start!</CardTitle>
          <CardDescription>Here's what's happening in your space.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center">
          <Image
            src="https://picsum.photos/600/300"
            alt="Placeholder Space Image"
            width={600}
            height={300}
            className="rounded-lg mb-4 shadow-md"
            data-ai-hint="nebula stars"
          />
          <p className="text-muted-foreground">Your main content area goes here.</p>
           {/* You can add charts, tables, or other components */}
        </CardContent>
      </Card>
    </div>
  );
}

