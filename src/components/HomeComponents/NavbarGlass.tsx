import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const navigationItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contato", href: "/contact" },
];

export default function NavbarGlass() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="px-8 fixed left-1/2 top-0 z-50 mt-2 w-11/12 max-w-7xl -translate-x-1/2 rounded-full bg-gray-100/20 p-3 backdrop-blur-lg dark:bg-background/20">
      <div className="flex w-full items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="transition-all hover:opacity-80">
          <img
            src="src/assets/logos/cuglogo.png"
            alt="Cugnier TIC"
            className="h-10 w-12 transition-transform duration-300 hover:scale-105"
          />
        </Link>

        {/* Centered Desktop Navigation */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 md:flex">
          <div className="flex gap-6">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-sm font-medium text-gray-900 transition-colors hover:text-green-600"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-2 md:flex">
          <Button variant="default" className="rounded-full px-6">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-full"
          >
            {isOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute left-0 right-0 mt-3 rounded-2xl bg-white/20 p-4 backdrop-blur-lg dark:bg-background/80 md:hidden">
          <div className="flex flex-col items-center gap-3">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className="w-full rounded-lg px-4 py-3 text-center text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-accent"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
