
"use client";

import type { ReactNode, FormEvent, ChangeEvent } from 'react';
import { useState, useEffect } from 'react';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarInset,
  SidebarTrigger,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from '@/components/ui/sidebar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Home, Settings, User, LogOut, Pencil, UploadCloud, Save } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
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
import { useToast } from "@/hooks/use-toast";
import Image from 'next/image'; // For previewing image

export default function AppLayout({ children }: { children: ReactNode }) {
  const [username, setUsername] = useState("User Name");
  const [profilePicUrl, setProfilePicUrl] = useState("https://picsum.photos/40/40");
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  // State for the dialog form inputs
  const [dialogUsername, setDialogUsername] = useState(username);
  const [dialogProfilePicFile, setDialogProfilePicFile] = useState<File | null>(null);
  const [dialogPreviewUrl, setDialogPreviewUrl] = useState<string | null>(profilePicUrl);

  const { toast } = useToast();

  useEffect(() => {
    // Initialize username and profile pic from localStorage or a default
    const storedUsername = localStorage.getItem('username');
    const storedProfilePic = localStorage.getItem('profilePicUrl');
    if (storedUsername) setUsername(storedUsername);
    if (storedProfilePic) {
      setProfilePicUrl(storedProfilePic);
      setDialogPreviewUrl(storedProfilePic);
    }
  }, []);


  const handleOpenEditDialog = () => {
    setDialogUsername(username);
    setDialogPreviewUrl(profilePicUrl);
    setDialogProfilePicFile(null); // Reset file input
    setIsEditDialogOpen(true);
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setDialogProfilePicFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setDialogPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setDialogProfilePicFile(null);
      // Option: reset to current profile pic or leave as is
      // For now, if they clear the file, preview stays as current until save
      // setDialogPreviewUrl(profilePicUrl); 
    }
  };

  const handleProfileSave = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let updated = false;
    if (dialogUsername.trim() && dialogUsername.trim() !== username) {
      setUsername(dialogUsername.trim());
      localStorage.setItem('username', dialogUsername.trim());
      updated = true;
    }
    if (dialogPreviewUrl && dialogPreviewUrl !== profilePicUrl) {
      setProfilePicUrl(dialogPreviewUrl);
       localStorage.setItem('profilePicUrl', dialogPreviewUrl);
      updated = true;
    }

    if (updated) {
      toast({
        title: "Profile Updated",
        description: "Your profile has been successfully updated.",
      });
    } else {
      toast({
        title: "No Changes",
        description: "No changes were made to your profile.",
        variant: "default",
      });
    }
    setIsEditDialogOpen(false);
  };


  return (
    <SidebarProvider defaultOpen>
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={profilePicUrl} alt={`${username}'s profile avatar`} data-ai-hint="profile avatar" />
                <AvatarFallback>{username ? username.charAt(0).toUpperCase() : 'U'}</AvatarFallback>
              </Avatar>
              <span className="text-sm font-semibold group-data-[collapsible=icon]:hidden">
                {username}
              </span>
              <DialogTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6 p-0 group-data-[collapsible=icon]:hidden ml-1"
                  aria-label="Edit Profile"
                  onClick={handleOpenEditDialog}
                >
                  <Pencil className="h-3.5 w-3.5" />
                </Button>
              </DialogTrigger>
            </div>
            <SidebarTrigger className="ml-auto group-data-[collapsible=icon]:hidden" />
          </SidebarHeader>
          <Separator />
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton href="/dashboard" tooltip="Dashboard">
                  <Home />
                  Dashboard
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton href="/profile" tooltip="Profile">
                  <User />
                  Profile
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton href="/settings" tooltip="Settings">
                  <Settings />
                  Settings
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          <Separator />
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Log Out">
                  <Link href="/login">
                    <LogOut />
                    Logout
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>

        <DialogContent className="sm:max-w-[425px] bg-card/90 backdrop-blur-md border-border">
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
            <DialogDescription>
              Update your username and profile picture. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleProfileSave} className="grid gap-6 py-4">
            <div className="grid gap-2">
              <Label htmlFor="username-edit" className="text-foreground/80">
                Username
              </Label>
              <Input
                id="username-edit"
                value={dialogUsername}
                onChange={(e) => setDialogUsername(e.target.value)}
                className="bg-background/70"
                placeholder="Enter new username"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="profile-pic-edit" className="text-foreground/80">
                Profile Picture
              </Label>
              <div className="flex items-center gap-4">
                {dialogPreviewUrl && (
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={dialogPreviewUrl} alt="Profile preview" />
                    <AvatarFallback>{dialogUsername ? dialogUsername.charAt(0).toUpperCase() : 'P'}</AvatarFallback>
                  </Avatar>
                )}
                <Input
                  id="profile-pic-edit"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="bg-background/70 flex-1 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
                />
              </div>
               <p className="text-xs text-muted-foreground mt-1">Upload a new image for your profile.</p>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button type="button" variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  );
}
