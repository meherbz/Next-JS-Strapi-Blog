import { Lato, Open_Sans } from "next/font/google";

import "../styles/styles.sass";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-lato",
});
const openSans = Open_Sans({ subsets: ["latin"], variable: "--open-sans" });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${openSans.className} ${openSans.variable} ${lato.variable}`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
