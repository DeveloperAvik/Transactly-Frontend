import { useTheme } from "@/hooks/useTheme";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

type ModeToggleProps = {
  position?: "left" | "right";
  closeButton?: boolean;
};

export function ModeToggle({ position = "right", closeButton = true }: ModeToggleProps) {
  const { theme, setTheme } = useTheme();
  const toggle = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <Button
      variant="ghost"
      size="icon"
      className={`rounded-full ${position === "right" ? "ml-auto" : ""}`}
      onClick={toggle}
    >
      {theme === "light" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      {closeButton && <span className="sr-only">Toggle theme</span>}
    </Button>
  );
}
