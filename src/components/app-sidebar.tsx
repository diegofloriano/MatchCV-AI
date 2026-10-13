import { Link, useRouterState } from "@tanstack/react-router";
import { Briefcase, FileUser, KanbanSquare, LayoutDashboard, ScanSearch } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader,
  SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar,
} from "@/components/ui/sidebar";

const items = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Meu Perfil & CV", url: "/perfil", icon: FileUser },
  { title: "Matchmaker de Vagas", url: "/vagas", icon: Briefcase },
  { title: "Estúdio ATS", url: "/estudio", icon: ScanSearch },
  { title: "Candidaturas", url: "/candidaturas", icon: KanbanSquare },
] as const;

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const path = useRouterState({ select: (r) => r.location.pathname });
  return (
    <Sidebar collapsible="icon" className="no-print">
      <SidebarHeader>
        <div className="flex items-center px-1 py-2">
          <BrandLogo showWordmark={!collapsed} />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navegação</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((i) => (
                <SidebarMenuItem key={i.url}>
                  <SidebarMenuButton asChild isActive={path === i.url} tooltip={i.title}>
                    <Link to={i.url}><i.icon className="h-4 w-4" /><span>{i.title}</span></Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
