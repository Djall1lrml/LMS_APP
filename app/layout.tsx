import { ClerkProvider } from "@clerk/nextjs";
import { Suspense } from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import proxy from "../proxy";
export const metadata = {
  title: "My App",
  description: "Example App",
};
// Add this at the top of your layout to force no-store
export const dynamic = "force-dynamic";
export const revalidate = 0;
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={<div>Loading...</div>}>
          <ClerkProvider
            appearance={{ variables: { colorPrimary: "#fe5933" } }}
          >
            <Navbar />
            {children}
          </ClerkProvider>
        </Suspense>
      </body>
    </html>
  );
}
