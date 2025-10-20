import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider } from "react-router-dom" // ✅ correct package
import { router } from "@/routes"
import { ThemeProvider } from "@/providers/theme.provider"
import { Provider as ReduxProvider } from "react-redux"
import { store } from "@/redux/store"
import { Toaster } from "@/components/ui/sonner"
import "@/index.css" // ✅ use alias (cleaner + works with bundler mode)

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
        <Toaster />
      </ThemeProvider>
    </ReduxProvider>
  </React.StrictMode>
)
