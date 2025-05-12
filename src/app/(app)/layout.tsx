
import type { ReactNode } from 'react';
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
import { Home, Settings, User, LogOut, Pencil } from 'lucide-react'; // Added Pencil
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { Button } from '@/components/ui/button'; // Ensured Button is imported

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider defaultOpen>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2">
             <Avatar className="h-8 w-8">
                <AvatarImage src="https://picsum.photos/40/40" alt="User profile avatar" data-ai-hint="profile avatar" />
                <AvatarFallback>U</AvatarFallback>
             </Avatar>
             <span className="text-sm font-semibold group-data-[collapsible=icon]:hidden">
               User Name
             </span>
             {/* Edit Profile Button */}
             <Button 
               variant="ghost" 
               size="icon" 
               className="h-6 w-6 p-0 group-data-[collapsible=icon]:hidden ml-1" // Adjusted size and added margin
               aria-label="Edit Profile"
             >
                <Pencil className="h-3.5 w-3.5" />
             </Button>
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
      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  );
}
