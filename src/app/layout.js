import "./globals.css";

export const metadata = {
  title: "MacBook Pro",
  description: "Apple MacBook Pro landing page built with Next.js, Three.js and GSAP",
  icons: { icon: "/logo.svg" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
