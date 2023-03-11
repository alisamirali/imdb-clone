import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import SearchBox from "@/components/SearchBox";
import "./globals.css";
import Providers from "./Providers";

export const metadata = {
  title: "IMDb Clone",
  description:
    "IMDb is the world's most popular and authoritative source for movie, TV and celebrity content. Find ratings and reviews for the newest movie and TV shows.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/* Header */}
          <Header />

          {/* Navbar */}

          <Navbar />

          {/* SearchBox */}

          <SearchBox />

          {children}
        </Providers>
      </body>
    </html>
  );
}
