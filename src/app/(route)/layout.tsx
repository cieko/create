import { cn } from "@/lib/utils";
import "../globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Navbar from "@/components/home/Navbar";
import { Provider } from "@/components/Providers";
// import { Toaster } from "@/components/ui/toaster";

const font = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Create",
  description: "Generate your course and test yourself!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(font.className, "antialiased min-h-screen pt-24")}>
        <Navbar />
        <div className="h-24"></div>
        <Provider>{children}</Provider>
        {/* <Toaster /> */}
      </body>
    </html>
  );
}
