import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Poppins({ subsets: ["latin"], weight:["400"] });

export const metadata = {
  title: "portfolio",
  description: "Website portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
