
import { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { FaYoutube } from 'react-icons/fa';

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "YouTube Clone",
    description: "Interface inspirada no YouTube",
};
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
  });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${geistSans} ${geistMono}`}>
                <header className="header">
                    <div className="header-titilu">
                        <span className="">YouTuber</span>
                    </div>
                    <div className="search-container">
                        <input
                            type="text"
                            placeholder="Pesquisar"
                            className="search-input"
                        />
                    </div>
                    <div className="social-icons">
                        <span className="icon youtube-icon">
                            <FaYoutube size={30} color="red" />
                        </span>
                    </div>
                </header>
                <main className="p-4">{children}</main>
            </body>
        </html>
    );
}
