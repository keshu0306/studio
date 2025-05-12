
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
import { Home, Settings, User, LogOut } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { Logo } from '@/components/Logo'; // Assuming Logo component exists

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider defaultOpen>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2">
             <Avatar className="h-8 w-8">
                {/* Placeholder for user image - replace src if available */}
                <AvatarImage src="https://picsum.photos/40/40" alt="@shadcn" data-ai-hint="profile avatar" />
                <AvatarFallback>U</AvatarFallback> {/* Fallback initials */}
             </Avatar>
             {/* Name displayed next to avatar, hidden when collapsed */}
             <span className="text-sm font-semibold group-data-[collapsible=icon]:hidden">
               User Name {/* Changed from 'start' to 'User Name' */}
             </span>
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

          {/* Projects Group Removed */}

        </SidebarContent>
        <Separator />
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              {/* Use Link for navigation, wrapped in button for styling/tooltip */}
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

