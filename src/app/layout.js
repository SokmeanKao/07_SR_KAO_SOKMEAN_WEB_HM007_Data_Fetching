import { Inter } from "next/font/google";
import "./globals.css";
import NavbarComponent from "@/components/NavbarComponent";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/brands.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
