import Image from "next/image";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function Home() {
  return (
    <html lang="en">
    <body>
  <SidebarProvider>
    <AppSidebar />
    
    <main>
      <SidebarTrigger />
        <h1 className="text-2xl font-bold">Welcome to the Main Content</h1>
        <p className="mt-4">This is the main content area.</p>
    </main>
  </SidebarProvider>
  </body>
  </html>
  );
}