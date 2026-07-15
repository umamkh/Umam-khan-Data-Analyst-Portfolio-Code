import "./globals.css";
import Navigation from "./_components/Navigation";

export const metadata = {
  title: "Portfolio, Umam",
  description: "Portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en">
      <body className="min-h-full flex flex-col">
        <Navigation />
        {children}
        </body>
    </html>
  );
}
