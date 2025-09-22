"use client";
import { Inter, Nunito_Sans } from "next/font/google"; // import Nunito Sans
import "../style/dashboard.css";
import "../style/global.css";
import MainLayout from "@/components/wrapper/root-layout";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const inter = Inter({ subsets: ["latin"] });
const nunito = Nunito_Sans({ subsets: ["latin"], weight: ["400", "700"] }); // choose weights

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${nunito.className}`}>
        <QueryClientProvider client={queryClient}>
          <I18nextProvider i18n={i18n}>
            <MainLayout>{children}</MainLayout>
          </I18nextProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
