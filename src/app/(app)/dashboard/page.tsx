
"use client";

import { useState, type FormEvent } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { Bell, Bookmark, PlusCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface SavedEvent {
  id: number;
  title: string;
  description: string;
}

export default function DashboardPage() {
  const [savedEvents, setSavedEvents] = useState<SavedEvent[]>([]);
  const [newEventTitle, setNewEventTitle] = useState('');
  const [newEventDescription, setNewEventDescription] = useState('');
  const [isAddEventDialogOpen, setIsAddEventDialogOpen] = useState(false);
  const { toast } = useToast();

  const handleAddEvent = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newEventTitle.trim() || !newEventDescription.trim()) {
      toast({
        title: "Error",
        description: "Title and description cannot be empty.",
        variant: "destructive",
      });
      return;
    }
    const newEvent: SavedEvent = {
      id: Date.now(),
      title: newEventTitle,
      description: newEventDescription,
    };
    setSavedEvents(prevEvents => [...prevEvents, newEvent]);
    setNewEventTitle('');
    setNewEventDescription('');
    setIsAddEventDialogOpen(false);
    toast({
      title: "Event Saved",
      description: `"${newEvent.title}" has been added to your saved events.`,
    });
  };

  return (
    <div className="flex flex-col min-h-screen p-4 md:p-6 lg:p-8">
      <h1 className="text-2xl font-bold mb-6 text-foreground">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Notifications Card */}
        <Card className="shadow-lg backdrop-blur-sm bg-card/70 border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="w-5 h-5" />
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
        <Dialog open={isAddEventDialogOpen} onOpenChange={setIsAddEventDialogOpen}>
          <Card className="shadow-lg backdrop-blur-sm bg-card/70 border-border md:col-span-2 lg:col-span-1">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="flex items-center gap-2">
                  <Bookmark className="w-5 h-5" />
                  My Saved Events
                </CardTitle>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm">
                    <PlusCircle className="mr-2 h-4 w-4" /> Add Event
                  </Button>
                </DialogTrigger>
              </div>
              <CardDescription>Events you've bookmarked ({savedEvents.length})</CardDescription>
            </CardHeader>
            <CardContent>
              {savedEvents.length === 0 ? (
                <p className="text-muted-foreground">No saved events yet. Click "Add Event" to create one.</p>
              ) : (
                <div className="space-y-3 max-h-60 overflow-y-auto pr-2">
                  {savedEvents.map(event => (
                    <Card key={event.id} className="bg-background/60 p-3 shadow-sm">
                      <h3 className="font-semibold text-sm text-foreground">{event.title}</h3>
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{event.description}</p>
                    </Card>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          <DialogContent className="sm:max-w-[425px] bg-card/90 backdrop-blur-md border-border">
            <DialogHeader>
              <DialogTitle>Add New Event</DialogTitle>
              <DialogDescription>
                Enter the title and description for your new event.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleAddEvent} className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="event-title" className="text-right text-foreground/80">
                  Title
                </Label>
                <Input
                  id="event-title"
                  value={newEventTitle}
                  onChange={(e) => setNewEventTitle(e.target.value)}
                  className="col-span-3 bg-background/70"
                  placeholder="Event Title"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="event-description" className="text-right text-foreground/80">
                  Description
                </Label>
                <Textarea
                  id="event-description"
                  value={newEventDescription}
                  onChange={(e) => setNewEventDescription(e.target.value)}
                  className="col-span-3 bg-background/70 min-h-[100px]"
                  placeholder="Event Description"
                />
              </div>
              <DialogFooter>
                <DialogClose asChild>
                   <Button type="button" variant="outline">Cancel</Button>
                </DialogClose>
                <Button type="submit">Save Event</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Example Content Area */}
       <Card className="flex-1 shadow-lg backdrop-blur-sm bg-card/70 border-border">
        <CardHeader>
          <CardTitle>Welcome to the cosmos</CardTitle>
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

