import "./globals.css";
import { Inter } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "VoidCode",
  description: "Where the world comes to code",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, height=device-height,  initial-scale=1.0"
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="pt-navigation-height bg-page-gradient">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
