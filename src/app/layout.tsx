import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ReactQueryProvider } from "@/react-query/provider";
import Navbar from "@/components/global/navbar";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import Footer from "@/components/global/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "IBC",
  description: "Sharing Thoughts and Ideas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased container mx-auto sm:max-w[640px] md:max-w-[768px] lg:[800px] xl:max-w-[1024px] px-4 py-10`}
      >
        <ReactQueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {/* <CustomBreadCrumb
              homeElement="Home"
              separator={
                <SlashIcon className="h-4 w-4 text-muted-foreground" />
              }
              containerClasses="space-x-2"
              listClasses="text-muted-foreground hover:text-primary"
              activeClasses="text-primary font-bold"
            /> */}
            {children}
            <Footer />
          </ThemeProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
