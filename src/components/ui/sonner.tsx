import { Toaster as Sonner } from "sonner"

export const Toaster = () => (
  <Sonner
    position="top-center"
    theme="light"
    richColors
    className="toaster group"
    style={
      {
        "--normal-bg": "var(--popover)",
        "--normal-text": "var(--popover-foreground)",
        "--normal-border": "var(--border)",
      } as React.CSSProperties
    }
  />
)
