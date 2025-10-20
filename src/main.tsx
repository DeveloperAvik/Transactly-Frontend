import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";

import { router } from "@/routes";
import { store } from "@/redux/store";
import { ThemeProvider } from "@/providers/theme.provider";
import { Toaster } from "sonner"; 

import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
        <Toaster position="top-right" richColors closeButton />
      </ThemeProvider>
    </ReduxProvider>
  </React.StrictMode>
);
