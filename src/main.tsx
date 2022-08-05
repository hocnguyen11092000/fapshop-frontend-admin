import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "antd/dist/antd.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./context/authProvider";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <BrowserRouter>
        <QueryClientProvider client={queryClient}>
            <React.StrictMode>
                <AuthProvider>
                    <App />
                </AuthProvider>
            </React.StrictMode>
        </QueryClientProvider>
    </BrowserRouter>
);
