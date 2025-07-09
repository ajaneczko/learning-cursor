import { SideNav } from "@/components/side-nav"

export default function FleetLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <SideNav />
      <div className="flex-1">{children}</div>
    </div>
  )
} 