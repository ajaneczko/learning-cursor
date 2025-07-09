import Link from "next/link"
import { Icons } from "./icons"

const navItems = [
  { label: "Vehicles", href: "/fleet/vehicles", icon: <Icons.car className="w-5 h-5" /> },
  { label: "Map", href: "/fleet/map", icon: <Icons.map className="w-5 h-5" /> },
  { label: "Drivers", href: "/fleet/drivers", icon: <Icons.users className="w-5 h-5" /> },
]

export function SideNav() {
  return (
    <nav className="w-56 min-h-full border-r bg-background py-8 px-4 flex flex-col gap-2">
      {navItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted transition-colors text-base font-medium"
        >
          {item.icon}
          <span>{item.label}</span>
        </Link>
      ))}
    </nav>
  )
} 