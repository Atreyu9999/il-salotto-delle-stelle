import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Il Salotto delle Stelle",
  description: "di Rosario Autiero",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* Altri metadata possono essere inseriti qui */}
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
