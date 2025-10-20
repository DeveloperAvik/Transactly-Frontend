import Logo from "@/assets/icons/Logo";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ModeToggle } from "./ModeToggler";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

// Navigation links array
const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="border-b bg-background text-foreground sticky top-0 z-50">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between gap-4">
        {/* Left section */}
        <div className="flex items-center gap-3">
          {/* Mobile menu trigger */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="group size-9 md:hidden"
                variant="ghost"
                size="icon"
              >
                <Menu className="h-5 w-5 transition-transform group-data-[state=open]:rotate-90" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent
              align="start"
              className="w-40 p-1 md:hidden bg-background"
            >
              <NavigationMenu className="max-w-none w-full">
                <NavigationMenuList className="flex-col items-start gap-0">
                  {navigationLinks.map((link) => (
                    <NavigationMenuItem key={link.href} className="w-full">
                      <NavigationMenuLink
                        asChild
                        className="block w-full px-2 py-1.5 text-sm rounded-md hover:bg-accent hover:text-accent-foreground"
                      >
                        <Link to={link.href}>{link.label}</Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>

          {/* Logo + desktop nav */}
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center text-primary hover:text-primary/80">
              <Logo />
            </Link>
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList className="gap-4">
                {navigationLinks.map((link) => (
                  <NavigationMenuItem key={link.href}>
                    <NavigationMenuLink
                      asChild
                      className="text-muted-foreground hover:text-primary font-medium transition-colors"
                    >
                      <Link to={link.href}>{link.label}</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-2">
          <ModeToggle />
          <Button asChild variant="default" className="text-sm">
            <Link to="/login">Login</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
